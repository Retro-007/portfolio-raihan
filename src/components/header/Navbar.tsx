import React from 'react'
import { Link } from 'react-router-dom';
import { Popover } from '@headlessui/react'
import { Bars3Icon, } from '@heroicons/react/24/outline'
import { ABOUTME, INDEX } from '../../utilities/routeNames';
import avatar from "../../assets/images/avatar-raihan.jpg"
const Navbar = () => {

    const pathname = window.location.pathname;

    return (
        <React.Fragment>
            <nav className="flex items-center justify-between w-full max-w-full px-2 py-5 mx-auto md:px-5 lg:px-5" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to={INDEX} className="flex items-center justify-center">
                        <img className="h-16 border-4 rounded-full border-slate-600" src={avatar} alt={"Muhammed Raihan"} />
                        <span className="font-semibold ms-2 text-portfolio-gray md:text-xl">Muhammed Raihan</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    // onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="items-center hidden nav lg:flex lg:gap-x-8">
                    <Link to={INDEX} className={` nav-item text-sm uppercase  leading-6 text-color-gray ${pathname == INDEX && ("current")}`}>
                        Home
                    </Link>

                    <Link to={ABOUTME} className={` nav-item text-sm uppercase  leading-6 text-color-gray ${pathname == ABOUTME && ("current")}`}>
                        experience
                    </Link>
                    <Link to={ABOUTME} className={` nav-item text-sm uppercase  leading-6 text-color-gray ${pathname == ABOUTME && ("current")}`}>
                        education
                    </Link>
                    <Link to={ABOUTME} className={` nav-item text-sm uppercase  leading-6 text-color-gray ${pathname == ABOUTME && ("current")}`}>
                        resume
                    </Link>
                    <Link to={ABOUTME} className={` nav-item text-sm uppercase  leading-6 text-color-gray ${pathname == ABOUTME && ("current")}`}>
                        Portfolio
                    </Link>

                    <button className='contact-btn '>
                        <span>
                            Hire Me
                        </span>
                    </button>

                </Popover.Group>

            </nav>

        </React.Fragment>
    )
}

export default Navbar