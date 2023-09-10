import React from 'react'
import Header from '../../components/header'
import Bio from './Bio'
import Curriculam from './Curriculam'
import AvatarImg from './AvatarImg'

const Home = () => {
    return (
        <React.Fragment>
            <Header />

            <div className='mx-24 pb-10	 content-top-padding'>

                <div className='grid grid-cols-2   justify-center gap-5'>
                    <div className='flex flex-col gap-5  '>

                        <Bio />

                        <Curriculam />

                    </div>
                    <div>
                        <AvatarImg />
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Home