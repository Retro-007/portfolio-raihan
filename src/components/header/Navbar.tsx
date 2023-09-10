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
            <nav className="mx-auto flex max-w-full	 items-center justify-between py-5 lg:px-5" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to={INDEX} className="flex items-center">
                        <img className="h-16 rounded-full border-4 border-slate-600" src={avatar} alt={"Muhammed Raihan"} />
                        <span className="ms-2 text-portfolio-gray font-semibold text-xl">Muhammed Raihan</span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    // onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className=" nav hidden lg:flex items-center lg:gap-x-8">
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

                    <button className='contact-btn  '>
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