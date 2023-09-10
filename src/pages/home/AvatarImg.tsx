import React from 'react'
import avatarImg from "../../assets/images/avatar-raihan.jpg"
const AvatarImg = () => {
    return (
        <React.Fragment>
            <div className='card-bio p-9 max-w-40-5 rounded-lg rounded-xl	'>
                <img src={avatarImg} className='avatar-img rounded-lg' alt={"muhammed raihan"} />
            </div>
        </React.Fragment>
    )
}

export default AvatarImg