import { useEffect, useState } from "react"
import axios from "axios";
import Header from "./Header";

const LandingPage = () => {

    const YOUTUBE_API_KEY = "AIzaSyD2m98Lta3RXD_AhFzgMCTJeYozmifJPL8"

    const [url, setUrl] = useState("")
    const [subCount, setSubCount] = useState(0)
    const [videoUrl, setVideoUrl] = useState("")
    const [videoDetails, setVideoDetails] = useState([])
    const [channelID, setChannelID] = useState("")

    const [parma, setParma] = useState({})


    const handleInput = (event) => {
        setUrl(event.target.value)
    }






    
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {

            const videoDetails = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoUrl}&key=${YOUTUBE_API_KEY}`)

            setVideoDetails(videoDetails.data.items[0].statistics)
            setChannelID(videoDetails.data.items[0].snippet.channelId)

        } catch (error) {
            console.log(error)
        }

    }


    // console.log(subCount)



    useEffect(() => {

        setVideoUrl(url.substring((url.indexOf("v=") + 3) - 1))

    }, [url])



    return (

        <div className="bg-slate-950">

            

            <div className="flex  items-center justify-center  h-screen " >
            
                <div className=" flex-col p-4 rounded-2xl shadow-lg bg-slate-50 flex  border h-5/6 w-3/5 sm:h-4/5 w md:w-2/6 sm:w-4/12">


                    <form onSubmit={handleSubmit} className="flex w-6/6 flex-col  ">

                        <h1 className=" text-2xl text-center font-semibold text-cyan-700 " >Please Enter Channel URL</h1>
                        <input onChange={handleInput} className=" mt-6 pl-4  shadow-md border rounded-lg p-1 " placeholder="youtube.com/..." type="text" />
                        <p>{JSON.stringify(videoDetails)}</p>
                        <p>{channelID}</p>
                        <p>{subCount}</p>


                        <button onMouseDown={handleSubmit} className="mt-6 rounded-md self-center p-1 px-4 shadow-md text-white font-semibold text-xl bg-cyan-500 hover:bg-cyan-400 w-min" type="submit" >Calculate</button>
                    </form>
                </div>




            </div>
        </div>

    )
}


export default LandingPage