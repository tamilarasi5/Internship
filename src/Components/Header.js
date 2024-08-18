

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    FaHome
} from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { FcAbout } from "react-icons/fc";
import { IoMdContacts } from "react-icons/io";
import logo from '../images/logo1.jpeg'
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import PaletteIcon from '@mui/icons-material/Palette';


const TopNav = () => {
    return (
        <><nav className="topnav">
            <div className="topnav-container">
                <img src={logo} style={{ width: "3%", height: "3%" }}></img>
                {/* <div className="logo">SG</div> */}
                <div className="nav-links">
                    <NavLink to="/" exact activeClassName="active">
                        <FaHome className='icon' /> Home
                    </NavLink>
                    <NavLink to="/Service" activeClassName="active">
                        <GrServices className='icon' /> Services
                    </NavLink>
                    <NavLink to="/About" activeClassName="active">
                        <InfoIcon className='icon' /> About
                    </NavLink>
                    <NavLink to="/internship" activeClassName="active">
                        <GroupIcon className='icon' /> Internship
                    </NavLink>
                    <NavLink to="/Arts" activeClassName="active">
                        <PaletteIcon className='icon' /> Arts
                    </NavLink>
                    <NavLink to="/contact" activeClassName="active">
                        <IoMdContacts className='icon' /> Contact
                    </NavLink>
                    
                </div>
            </div>
        </nav></>
    );
};



// const App = () => {
//     return (
//         <>
//             <TopNav />
//             {/* <MainContent /> */}
//         </>
//     );
// };

// export default App;

export default TopNav;
