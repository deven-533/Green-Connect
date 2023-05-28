import React, {useState} from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import {
    Home,
    HomeOutlined,
    Search,
    SearchOutlined,
    Add,
    AddOutlined,
    AccountCircle,
    AccountCircleOutlined

}  from "@mui/icons-material"
import img from "./head.png"



const Header = () => {

    const [Tab,setTab] = useState(window.location.pathname);
    // console.log(window.location.pathname)
    
    return (
        <div className='header' >
            <div className='header__logo'>
                <img src={img} alt="" />
            </div>
            <Link to='/' onClick={()=>{setTab('/')}}>
             {Tab==='/' ? <Home style={{color:"black"}}/>: <HomeOutlined />} 
            </Link>
            
            <Link to='/newpost'onClick ={()=>setTab('/newpost')}>
            {Tab==='/newpost' ? <Add style={{color:"black"}}/>: <AddOutlined />} 
            </Link>

            <Link to='/search'onClick ={()=>setTab('/search')}>
            {Tab==='/search' ? <Search style={{color:"black"}}/>: <SearchOutlined />} 
            </Link>

            <Link to='/account'onClick ={()=>setTab('/account')}>
            {Tab==='/account' ? <AccountCircle style={{color:"black"}}/>: <AccountCircleOutlined />} 
            
            </Link>


        </div>
    )
}

export default Header;