import React, {useState} from 'react';
import axios from 'axios';

function Post()
{

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  function putJob(event){
    event.preventDefault()
    
    axios.post('http://localhost:8000/putJob', {name, email, title, desc})
    .then(res=>{
        if(res.data['statusCode']==200) 
        {
          setName('')
          setEmail('')
          setTitle('')
          setDesc('')

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
      <h1>Post a job</h1>
      <div className="forms">
        <div className="uploadform">
          <form onSubmit={putJob}>
            <div className='inputs'>
              <div className="input-box">
                <input type="text" className="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input-box">
                <input type="text" className="form-control" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="input-area">
                <textarea type="text" className="form-control" placeholder="Job Description" value={desc} onChange={(e) => setDesc(e.target.value)} />
              </div>
            </div>
            <button type="submit">Post</button>
          </form>
        </div>
        </div>
        
      </>
    )
}

export default Post
