import React, {useState} from 'react';
import axios from 'axios';

function Apply()
{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [skills, setSkills] = useState('');
  const [about, setAbout] = useState('');

  function putFreelancer(event){
    event.preventDefault()
    
    axios.post('http://localhost:8000/putFreelancer', {name, email, skills, about})
    .then(res=>{
        if(res.data['statusCode']==200) 
        {
          setName('')
          setEmail('')
          setSkills('')
          setAbout('')

          alert(res.data['message'])
        }
        else
        {
          alert(res.data['message'])
        }
        
    })
    .catch(err=>{
        alert('server error')
})




}

    return(
      <>
      <h1>Apply for a job</h1>
        <div className="forms">
          <div className="uploadform">
            <form onSubmit={putFreelancer}>
              <div className='inputs'>
                <div className="input-box">
                  <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-box">
                  <input type="text" className="form-control" placeholder="Skills(Comma separated)" value={skills} onChange={(e) => setSkills(e.target.value)} />
                </div>
                <div className="input-area">
                  <textarea type="text" className="form-control" placeholder="About" value={about} onChange={(e) => setAbout(e.target.value)} />
                </div>
              </div>
              <button type="submit">Post</button>
            </form>
          </div>
        </div>
        
      </>
    )
}

export default Apply
