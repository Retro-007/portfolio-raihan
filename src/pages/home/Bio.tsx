import React from 'react'

const Bio = () => {
    return (
        <React.Fragment>
            <div className='card-bio p-9 rounded-tr-xl rounded-tl-xl'>
                <div className='flex flex-col items-start gap-3 justify-normal'>
                    <div className='user '>
                        <div className='flex flex-row items-center justify-center '>
                            <i className='pi pi-user'></i>
                        </div>
                    </div>
                    <div>
                        <span className='text-xl font-bold text-white md:text-4xl lg:text-6xl'>Hi, I'm </span>
                        <span className='text-xl font-bold font-primary-text md:text-4xl lg:text-6xl'>Muhd Raihan</span>
                    </div>
                    <div>
                        <span className='text-xs text-portfolio-gray md:text-xl'>Full Stack Developer | Freelancer |  Team Lead Developer | ReactJs | Typescript | Laravel </span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='text-xs md:text-lg pi pi-envelope font-primary-text'></i>
                        <span className='text-xs md:text-lg text-portfolio-gray'>kadakkadanraihan@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='text-xs md:text-lg pi pi-phone font-primary-text'></i>
                        <span className='text-xs md:text-lg text-portfolio-gray '>+91 9562492181</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='text-xs md:text-lg pi pi-phone font-primary-text'></i>
                        <span className='text-xs md:text-lg text-portfolio-gray '>+91 7012981211</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i className='text-xs md:text-lg pi pi-map-marker font-primary-text'></i>
                        <span className='text-xs md:text-lg text-portfolio-gray '>Malappuram, Kerala, India</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Bio