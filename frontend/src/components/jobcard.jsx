import React, {useState} from 'react';
import '../style/component.css'
import '../style/pop.css'
import axios from 'axios';
import Popup from './popup.jsx'
import { IoCloseOutline } from "react-icons/io5";

function JCard({item})
{

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
      setIsPopupOpen(true);
      console.log(isPopupOpen)
    };

    const closePopup = () => {
      setIsPopupOpen(false);
    };


  function selectFCard(event){
    event.preventDefault()
    openPopup()

}
    
    return(
      <>
        <button className="jobcard" onClick={selectFCard}>
          <div className='a'>
            <h3 className='t'>{item.name}</h3>
          </div>
          <div className='b'>
            <h4 className='t'>{item.title}</h4>
            <h6 className='t'>{item.description}</h6>
          </div>
        </button>
        {isPopupOpen && (
          <div className='pop'>
            <button className='closebtn' onClick={(e)=>{e.preventDefault; closePopup()}}><IoCloseOutline /></button>
            <Popup mode={'job'} item={item}/>
          </div>
        )}
      </>
    )
}

export default JCard
