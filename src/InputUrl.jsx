import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from 'react-redux';
import { setStats } from "./app/features/statsSlice";
import { json, useNavigate } from "react-router-dom";



const InputUrl = () => {
    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
    const navigate = useNavigate();

    // const [incrementValue, setIncrementValue] = useState(5); // Default increment value
    const dispatch = useDispatch();
    const stats = useSelector((state) => state.stats.value);




    const [url, setUrl] = useState("")
    const [subCount, setSubCount] = useState(0)
    const [videoUrl, setVideoUrl] = useState("")
    const [videoDetails, setVideoDetails] = useState({})
    const [channelID, setChannelID] = useState("")
    const [otherDetails, setOtherDetails] = useState([])
    const [topVideos, setTopVideos] = useState([])



    const handleInput = (event) => {
        setUrl(event.target.value)
    }



    const handleSubmit = async (event) => {
        event.preventDefault()
        try {

            const videoDetails = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoUrl}&key=${YOUTUBE_API_KEY}`)

            setVideoDetails(videoDetails.data.items[0].statistics)
            setChannelID(videoDetails.data.items[0].snippet.channelId)
            setOtherDetails(videoDetails.data.items[0].snippet)

        } catch (error) {
            console.log(error)
        }

    }


    const getSubscriberCount = async () => {

        try {

            const channelData = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelID}&key=${YOUTUBE_API_KEY}`)
            const channelVideos = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&channelId=${channelID}&part=snippet&type=video&order=viewCount&maxResults=5`)

            setSubCount(channelData.data.items[0].statistics.subscriberCount)
            videoDetails["topVideos"] = channelVideos.data


        } catch (error) {
            console.log(error)
        }
    }

   


    useEffect(() => {

        setVideoUrl(url.substring((url.indexOf("v=") + 3) - 1))

    }, [url])

    useEffect(() => {

        getSubscriberCount()

    }, [channelID])


    

    useEffect( () => {
        if (subCount) {
            
            videoDetails["subscriber"] = subCount
            videoDetails["otherDetails"] = otherDetails
            dispatch(setStats(videoDetails))
            navigate("/result")
        }
    }, [subCount])


    return (
        <div className=" flex flex-col justify-center pb-64 items-center bg-slate-950 h-screen " >

            <div>
                <h1 className=" text-white text-5xl font-bold text-center leading-relaxed " >Discover your earning <br></br>  potential</h1>
                <h2 className=" text-slate-200 text-center font-normal text-lg py-4 " >Turn your Youtube expertise into a lucrative <br></br>  income throw resource sharing</h2>


            </div>

            <div className="my-4" >
                <form onSubmit={handleSubmit} >


                    <input onChange={handleInput} className=" w-96 text-white border px-4 py-2 p-1 border-slate-600 rounded-full bg-transparent" placeholder="enter youtube video link" >

                    </input>
                    <button className=" bg-red-600 text-white font-semibold mx-4 rounded-full p-1 py-2 px-4 " >
                        Calculate
                    </button>

                </form>

            </div>


        </div>
    )

}

export default InputUrl