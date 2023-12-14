
import { useState } from "react"
import Popup from "./PopUp"

const Header = () => {

    const [ showPopUp, setShowPopUP ] = useState(false)

    const handleCallBack = (event) => {
        // event.preventDefault()
        console.log(event.target)
        setShowPopUP(current => !current)
    }


    return (
        <header className="flex p-4 sm:pl-24 justify-between bg-slate-950" >
        {showPopUp && <Popup />}
            <div>
            <a href="/" >
                <img className="sm:h-12 h-8" src="https://www.anchors.in/static/media/logo-invite-only.05788d79bfb2d37a65d2.png">

                </img>
                </a>
            </div>
            <div className="flex items-center sm:pr-24" >
                <button onClick={handleCallBack} className="flex items-center border  rounded-full px-4 h-8 " >
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 text-white text-opacity-90 h-4">
                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                    </svg>

                       
                    <span  className=" text-white pl-2 " >Request a call back</span>
                    

                </button>
            </div>
        </header>
    )




}

export default Header 