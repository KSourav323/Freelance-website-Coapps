import React, { useState } from 'react';
import Services from "../components/services";
import Apply from "../components/apply";
import Post from "../components/post";
import Jobs from "../components/jobs";
import { useNavigate, useLocation } from 'react-router-dom';
import '../style/navbar.css'
import '../style/body.css'
import { CgProfile } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlineManageSearch } from "react-icons/md";
import { IoIosPersonAdd } from "react-icons/io";
import { MdOutlinePostAdd } from "react-icons/md";

const Home = () => {
    const location = useLocation();
    
    const messege = location.state;
    const pageno = messege.pageno


    const navigate = useNavigate();
    const [componentNumber, setComponentNumber] = useState(pageno);

    let componentToRender;

    function loadPage(number) {
        setComponentNumber(number);
    }

    if (componentNumber === 1) {
        componentToRender = <Services />;
    } else if (componentNumber === 2) {
        componentToRender = <Apply />;
    }  else if (componentNumber === 3) {
            componentToRender = <Jobs />;
    }  else if (componentNumber === 4) {
        componentToRender = <Post />;
    } else {
        componentToRender = <div>Click a button to render a component</div>;
    }

    function logout() {
        navigate('/');
    }

    return (
        <>
            <div className='bod'>
                <div className='navbar'>
                    <div className='btns'>
                        <button className='navbtn' onClick={() => loadPage(1)}><GrUserWorker /></button>
                        <button className='navbtn' onClick={() => loadPage(2)}><IoIosPersonAdd /></button>
                        <button className='navbtn' onClick={() => loadPage(3)}><MdOutlineManageSearch /></button>
                        <button className='navbtn' onClick={() => loadPage(4)}><MdOutlinePostAdd /></button>
                        <button className='navbtn' onClick={() => logout()}><TbLogout2 /></button>
                    </div>
                </div>
                <div className='component'>
                    {componentToRender}
                </div>
            </div>
        </>
    );
}

export default Home;
