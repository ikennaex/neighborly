import React, { useState } from 'react'
import { IoIosHelpCircle } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import "./infobutton.css"


const InfoButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50">
          {/* The Popup */}
          {open && (
            <div className="mb-2 p-3 bg-white rounded-lg shadow-lg w-64 text-md border">
              <p  className='font-bold mb-3'>For support and enquires:</p>
            <div className='flex items-center gap-2'><MdOutlineMail className='text-customBlue' size={20}/> <p>enquires@neighborly.ng</p></div>
            <div className='flex items-center gap-2'><FaPhoneAlt  className='text-customBlue' size={15}/> <p>09116241758</p></div>
            </div>
          )}
    
          {/* The Button */}
          <button
            onClick={() => setOpen(!open)}
            className="heartbeat bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-700"
            aria-label="Info"
          >
            <IoIosHelpCircle />
          </button>
        </div>
      )
}

export default InfoButton