import React from 'react'
import Header from '../../components/header'
import Bio from './Bio'
import Curriculam from './Curriculam'
import AvatarImg from './AvatarImg'

const Home = () => {
    return (
        <React.Fragment>
            <Header />

            <div className='mx-3 pt-30 md:pt-40 md:mx-24'>

                <div className='flex flex-col-reverse gap-5 pb-10 md:gap-5 md:grid md:justify-center md:grid-cols-2 lg:gap-5 lg:grid lg:justify-center lg:grid-cols-2'>
                    <div className='flex flex-col gap-5 '>

                        <Bio />

                        <Curriculam />

                    </div>
                    <div className=''>
                        <AvatarImg />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home