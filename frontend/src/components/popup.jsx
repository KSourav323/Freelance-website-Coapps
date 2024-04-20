import React, {useState} from 'react';
import '../style/pop.css'

const Popup = ({mode, item}) => {

    const [isApplied, setIsApplied] = useState(false);

    const switchApply = () => {
        setIsApplied(!isApplied);
    };


  return (
    <div className='popup'>
    {mode === 'hire' ? (
        <div className='notapplied'>

            {!isApplied ? (
                <div className='content1'>
                    <div className='content2'>
                        <h1>Hire {item.name}?</h1>
                        <h2>{item.email}</h2>
                        <h3>{item.skills}</h3>
                        <h4>{item.about}</h4>
                    </div>
                    <button className='applybtn' onClick={(e) => { e.preventDefault; switchApply(); } }>Hire</button>
                </div>
            ) : (
                <p>
                    Your request has been received.  
                    {item.name} will contact you shortly
                    Contact {item.email} for further details.
                    Thank you for using NeoHire.
                </p>
            )}
        </div>

    ) : mode === 'job' ? (
        <div className='notapplied'> 
            {!isApplied ? (
                <div className='content1'>
                <div className='content2'>
                        <h1>Job posted by {item.name}</h1>
                        <h2>{item.email}</h2>
                        <h3>{item.title}</h3>
                        <h4>{item.description}</h4>
                    </div>
                    <button className='applybtn' onClick={(e)=>{e.preventDefault; switchApply()}}>Request</button>
                </div>
            ) : (
                <p>
                    Your request has been received.  
                    {item.name} will contact you shortly
                    Contact {item.email} for further details.
                    Thank you for using NeoHire.
                </p>
            )}
        </div>
    ) : (
        <h1>null</h1>
    )}
    </div>
  )
}

export default Popup