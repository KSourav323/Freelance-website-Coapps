import React from 'react';
import '../style/component.css'
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react'
import JCard from './jobcard.jsx'
import axios from 'axios';

function Jobs({username})
{

    const [search, setSearch] = useState('');
    const [jobList, setJobList] = useState([]);


    

    function getJob(){
      
      axios.post('http://localhost:8000/getJob', {search})
      .then(res=>{
          if(res.data['statusCode']==200) 
          {
            setJobList(res.data['body'])
          }
      })
      .catch(err=>{
          alert('server error')
  })}

  useEffect(() => {
    getJob()
  }, []);

  function searchSubmit(e){
    e.preventDefault()
    console.log(search)
    getJob()
}
    
    return(
      <>
        <div className="search">
            <h1>Jobs</h1> 
          <div>
          <form onSubmit={searchSubmit}>
            <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
            <button className='btn' type="submit"><FaSearch /></button>
          </form>
          </div>
        </div>

        <div className='cards'>
          {jobList.map((item, index) => (
            <JCard key={item.id} item={item} usename={username}/>
          ))}
        </div>
      </>
    )
}

export default Jobs
