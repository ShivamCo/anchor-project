import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';




const TopVideos = () => {

    const stats = useSelector((state) => state.stats.value);

    const video = stats.topVideos.items
    console.log(video[0].snippet.thumbnails.high.url)
    console.log(video)



    return (
        <div className="w-full" >
            <h3 className=" text-white text-center font-semibold  text-2xl " >Potential Earnings of other videos</h3>
            
            {
                video.map((vid) => 

                <div className="flex justify-between text-start items-center p-4 m-4 rounded-lg  bg-slate-700 " >
                <div>
                    <img className='h-32' src={vid.snippet.thumbnails.high.url}></img>
                </div>
                <div className=' text-left w-5/6 ' >
                    <h4 className='mx-2 text-white text-lg font-semibold' >{vid.snippet.title}</h4>
                </div>


            </div>

                )
            }
            
            
            
            <div>

            </div>
            <div>

            </div>
        </div>
    )

}

export default TopVideos