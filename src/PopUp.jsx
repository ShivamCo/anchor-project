import { current } from "@reduxjs/toolkit"
import { useState } from "react"
import emailjs from '@emailjs/browser'


const Popup = () => {

    const [popOpen, setPopOpen] = useState(false)
    const [formData, setFormData] = useState({})
    const [submit, setSubmit] = useState(false)
    const handleClose = (event) => {
        event.preventDefault()
        setPopOpen(current => !current)
    }

    const handelChange = (event) => {

        setFormData({ ...formData, [event.target.name]: event.target.value })

    }

    

    const ServiceID = import.meta.env.VITE_serviceID
    const TemplateID = import.meta.env.VITE_TempleteID
    const PublicKey = import.meta.env.VITE_EmailJSPublicKey


    const handelSubmit = (event) => {
        event.preventDefault()

        emailjs.send(ServiceID, TemplateID, formData, PublicKey)
            .then(function (response) {
                alert('SUCCESS!', response.status, response.text).then(setPopOpen(false));
            }, function (error) {
                alert('FAILED...', error);
            });

            setSubmit(true)


    }

    
    return (
        <div className={`flex ${popOpen ? "hidden" : "show"} overflow-y-auto overflow-x-hidden fixed  z-50 justify-center items-center w-5/6 sm:w-full md:inset-0 h-screen sm:mb-64  max-h-full`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-gray-800 rounded-lg shadow dark:bg-gray-700">
                    <button onClick={handleClose} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">

                        {/* <svg  className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg> */}

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>


                        <h3 className="mb-5 text-lg font-normal text-white ">Request Call Back</h3>

                        <form onSubmit={handelSubmit} >

                            <div>
                                <input type="text" onChange={handelChange} name="fullName" placeholder="Abhishek Singh" className="m-2  bg-transparent border border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>

                            <div>
                                <input type="tel" onChange={handelChange} name="phoneNumber" className="bg-gray-50 border m-2 bg-transparent border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="875xxxx" required />
                            </div>

                            <div>
                                <input type="time" onChange={handelChange} name="preferredTime" className="bg-gray-50 border m-2 bg-transparent border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>

                            <div>
                                <input type="email" onChange={handelChange} name="email" id="email" className="bg-gray-50 border m-2 bg-transparent border-gray-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                            </div>

                            <button onClick={handelSubmit} data-modal-hide="popup-modal" type="button" className="text-white my-2 bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Popup