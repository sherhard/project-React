import React from "react";
import Post from "./Post/Post";


const MyPost=()=>{
    return(
        <div className='MyPost'>
            <div>
                <img src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3" alt="" />
            </div>
            <Post message='Hello React '/>
            <Post message='Hi Sher '/>
            <div className="">

            </div>
        </div>
    )
}

export default MyPost;