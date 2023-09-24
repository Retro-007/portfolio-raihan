import React from 'react'
import Header from '../../components/header'
import Bio from './Bio'
import Curriculam from './Curriculam'
import AvatarImg from './AvatarImg'

const Home = () => {
    return (
        <React.Fragment>
            <Header />

            <div className='mx-3 pt-30 md:pt-30 md:mx-10 lg:pt-20 lg:mx-24'>

                <div className='flex flex-col-reverse gap-5 pb-10 xl:gap-5 xl:grid xl:justify-center xl:grid-cols-2'>
                    <div className='flex flex-col gap-5 '>

                        <Bio />

                        <Curriculam />

                    </div>
                    <div className='pt-10 md:pt-8 lg:pt-0'>
                        <AvatarImg />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home