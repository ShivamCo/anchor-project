import { useSelector, useDispatch } from 'react-redux';
import { setStats } from "./app/features/statsSlice";
import Popup from './PopUp';
import { useEffect, useState } from 'react';
import TopVideos from './TopVideos.jsx'
import { useNavigate } from "react-router-dom";

const ResultPage = () => {

    const [showPopUp, setShowPopUP] = useState(false)
    const stats = useSelector((state) => state.stats.value);
    const navigate = useNavigate()


    const subscribers = Number(stats.subscriber)
    const views = Number(stats.viewCount)
    const comment = Number(stats.commentCount)
    const like = Number(stats.likeCount)
    const title = stats.otherDetails.title
    const thumbnails = stats.otherDetails.thumbnails.default.url
    let date = stats.otherDetails.publishedAt
    date = date.slice(0, date.indexOf("T"))

    const TotalEarning = () => {


        let min = 0
        if (subscribers >= views) {
            min = subscribers
        } else {
            min = views
        }
        console.log(subscribers, views)

        return (<span className='text-white sm:text-3xl md:text-lg p-2 font-semibold ' >₹ {(min + 10 * comment + 5 * like).toLocaleString()}</span>
        )

    }

    useEffect(() => {
        {
            setTimeout(function () {
                setShowPopUP(true)
            }, 2000)
        }

    }, [setShowPopUP])

   


    return (
        <div className=' flex  flex-col bg-slate-950 h-full justify-center items-center ' >

            {showPopUp ? <Popup /> : <></>}




            <div className={`  sm:flex flex-row  justify-center mt-36 items-center  mb-24 bg-mainBlack w-max m-2 border  rounded-lg shadow-md sm:w-4/6 `} >
                {/* Thumbnail */}

                <div className=' sm:w-1/6 w-full flex items-start flex-col m-4' >
                    <div className='  rounded-lg overflow-hidden ' >
                        <img className='sm:w-44 w-80 shadow-lg  object-cover ' src={thumbnails} ></img>
                    </div>


                    {/* Date */}
                    <div className='flex mt-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-200 w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                        </svg>
                        <span className=' px-2 font-semibold text-gray-200 ' >
                            {date}
                        </span>

                    </div>




                </div>

                {/* Details */}
                <div className=' sm:w-4/6 m-4 '>

                    <h2 className=' text-left text-white font-semibold text-xl ' >{title}</h2>

                    {/* Views */}
                    <div className='flex items-center mt-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" text-gray-300 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>


                        <span className=' px-2 font-semibold text-gray-200 ' >
                            {views.toLocaleString()}
                        </span>

                    </div>

                    {/* Like */}
                    <div className='flex items-center mt-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-300 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        <span className=' px-2 font-semibold text-gray-200 ' >
                            {like.toLocaleString()}
                        </span>

                    </div>

                    {/* Comment */}
                    <div className='flex items-center mt-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-300 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                        <span className=' px-2 font-semibold text-gray-200 ' >
                            {comment.toLocaleString()}
                        </span>

                    </div>

                    {/* Subscriber */}

                    <div className='flex items-center mt-2' >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-300 w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>

                        <span className=' px-2 font-semibold text-gray-200 ' >
                            {subscribers.toLocaleString()}
                        </span>

                    </div>


                </div>

                {/* Earings */}
                <div className='flex m-4 sm:w-1/6 ' >

                    <div className=' rounded-xl flex w-full items-center justify-center bg-gray-600' >
                        <TotalEarning />
                    </div>




                </div>
            </div>
            <div className=' top-0' >
                <TopVideos />
            </div>


        </div>
    )

}

export default ResultPage