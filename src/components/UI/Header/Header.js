import Classes from "./Header.module.css";
import {NavLink} from 'react-router-dom';
import { useState } from "react";


const Header = ()=>{

    // const [currentYear, setCurrentYear] = useState("2023");

    

    return (

        <>
        <header className={Classes.header}>
            <div className={Classes['header-child']}>
                <div>
                    <h1>NITP PLACEMENT</h1>
                </div>
                <div className={Classes.pages}>
                    <ul className={Classes['nav-items-list']}>
                        <li className={Classes['nav-item']}><NavLink to= "" >Full Time</NavLink></li>
                        <li className={Classes['nav-item']}><NavLink to = "internship" >Internship</NavLink></li>
                        {/* <li className={Classes['nav-item']}><NavLink to = "internship" >{currentYear}</NavLink></li> */}
                    </ul>
                </div>
            </div>
        </header>
        </>

    )}




export default Header;



