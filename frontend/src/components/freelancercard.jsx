import React, {useState} from 'react';
import '../style/component.css'
import '../style/pop.css'
import axios from 'axios';
import Popup from './popup.jsx'
import { IoCloseOutline } from "react-icons/io5";

function FCard({item, username})
{

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
      console.log(isPopupOpen)
    };

    const closePopup = () => {
      setIsPopupOpen(false);
    };

  
    
    return(
      <>
        <button className="jobcard" onClick={openPopup}>
          <div className='a'>
              <h3>{item.name}</h3>
          </div>
          <div className='b'>
              <h4>{item.skills}</h4>
              <h6>{item.about}</h6>
          </div>
        </button>
        {isPopupOpen && (
          <div className='pop'>
            <button className='closebtn' onClick={(e)=>{e.preventDefault; closePopup()}}><IoCloseOutline /></button>
            <Popup mode={'hire'} item={item} username={username}/>
          </div>
        )}
      </>
    )
}

export default FCard
