import React from 'react'

const Bio = () => {
    return (
        <React.Fragment>
            <div className='card-bio max-w-39 p-9 rounded-tr-xl rounded-tl-xl'>
                <div className='flex flex-col justify-normal gap-3 items-start'>
                    <div className='user '>
                        <div className='flex flex-row p0-3 justify-center items-center'>
                            <i className='pi pi-user'></i>
                        </div>
                    </div>
                    <div>
                        <span className='text-white font-bold text-6xl'>Hi, I'm </span>
                        <span className='font-primary-text font-bold text-6xl'>Muhd Raihan</span>
                    </div>
                    <div>
                        <span className='text-portfolio-gray'>Full Stack Developer | Freelancer |  Team Lead Developer | ReactJs | Typescript | Laravel </span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='pi pi-envelope text-lg font-primary-text'></i>
                        <span className='text-portfolio-gray text-lg '>kadakkadanraihan@gmail.com</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='pi pi-phone text-lg font-primary-text'></i>
                        <span className='text-portfolio-gray text-lg '>+91 9562492181</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='pi pi-phone text-lg font-primary-text'></i>
                        <span className='text-portfolio-gray text-lg '>+91 7012981211</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <i className='pi pi-map-marker text-lg font-primary-text'></i>
                        <span className='text-portfolio-gray text-lg '>Malappuram, Kerala, India</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio