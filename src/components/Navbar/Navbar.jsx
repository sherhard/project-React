import React from "react";
import classes from './Navbar.module.css';


const Navbar=()=>{
    return(
        <div className={classes.navbar}>
            
                <ul className={classes.ShowNavbar}>
                    <li>Dialogs</li>
                    <li>News</li>
                    <li>Music</li>
                </ul>
        
        </div>
        
    )
}


export default Navbar;