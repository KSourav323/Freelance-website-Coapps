import React from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import '../style/navbar.css'
import '../style/body.css'
import '../style/main.css'
import logo from '../assets/logo.png';
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineManageSearch } from "react-icons/md";

const Landing = () => {

    const location = useLocation();
    
    const messege = location.state;
    const username = messege.username
    
    const navigate = useNavigate();
    function gotoHome(pageno) {
        navigate('/home', {replace:true,state:{pageno, username}});
    }

    return (
        <div className='wrapper'>
            <br />
            <br />
            <div className='img'>
                <img src={logo} alt="" />
            </div>
            <div className='dash'>
              <button className='gotobtn' onClick={(e)=>{e.preventDefault; gotoHome(1)}}><GrUserWorker className='icon'/>Hire someone</button>
              <button className='gotobtn' onClick={(e)=>{e.preventDefault; gotoHome(3)}}><MdOutlineManageSearch  className='icon'/>Look for Jobs</button>
            </div>
        </div>
    );
}

export default Landing;
