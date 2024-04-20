import React from 'react';
import '../style/component.css'
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react'
import FCard from './freelancercard.jsx'
import axios from 'axios';

function Services()
{

    const [search, setSearch] = useState('');
    const [freelancerList, setFreelancerList] = useState([]);

   
    function searchSubmit(e){
        e.preventDefault()
        getFreelancer()
    }

    function getFreelancer(){
      
      axios.post('http://localhost:8000/getFreelancer', {search})
      .then(res=>{
          if(res.data['statusCode']==200) 
          {
            setFreelancerList(res.data['body'])
          }
      })
      .catch(err=>{
          alert('server error')
  })}

  useEffect(() => {
    getFreelancer()
  }, []);
    
    return(
      <>
        <div className="search">
            <h1>Hire</h1> 
          <div>
          <form onSubmit={searchSubmit}>
            <input type="text" className="form-control" onChange={(e) => setSearch(e.target.value)}/>
            <button className='btn' type="submit"><FaSearch /></button>
          </form>
          </div>
        </div>

        <div className='cards'>
          {freelancerList.map((item, index) => (
            <FCard key={item.id} item={item}/>
          ))}
        </div>
        
      </>
    )
}

export default Services
