import React from 'react'
import avatarImg from "../../assets/images/avatar-raihan.jpg"
const AvatarImg = () => {
    return (
        <React.Fragment>
            <div className='p-5 rounded-lg card-bio md:p-9 rounded-xl '>
                <img src={avatarImg} className='rounded-lg avatar-img' alt={"muhammed raihan"} />
            </div>
        </React.Fragment>
    )
}

export default AvatarImg