import React from "react";
import MyPost from "./MyPost/MyPost";
import classes from './Profile.module.css';


const Profile=()=>{
    return(
        <div className={classes.profile}>
            <div className={classes.font_profile}>
                <img src="https://cs14.pikabu.ru/post_img/big/2023/01/09/9/1673278708140859048.jpg" alt="" />
            </div>
            <MyPost/>
           
            <div className="item">
                profile
            </div>
            
        </div>
    )
}

export default Profile;