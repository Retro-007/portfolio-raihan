import React from 'react'
import { ContentProps } from '../../helpers/header/aside';
import { NavLink } from 'react-router-dom';
import { ABOUTME, CLIENT_SPEAK, CONTACT_ME, INDEX, PORTFOLIO, PROFILE, RESUME, WHAT_I_DO } from '../../utilities/routeNames';

const Content = ({
    isAsideOpen,
}: ContentProps) => {

    const pathname = window.location.pathname

    return (
        <React.Fragment>

            {isAsideOpen && (
                <div className={`overlay`}   >

                    <div className='overlay-content-head flex '>
                        <div className='flex flex-column justify-content-center align-content-center align-items-center gap-3'>
                            <NavLink to={INDEX}>
                                <span className={`nav-link ${pathname == INDEX ? "active" : ""}`}>Home</span>
                            </NavLink>
                            <NavLink to={ABOUTME}>
                                <span className={`nav-link ${pathname == ABOUTME ? "active" : ""}`}>About Me</span>
                            </NavLink>
                            <NavLink to={PROFILE}>
                                <span className={`nav-link ${pathname == PROFILE ? "active" : ""}`}>Profile</span>
                            </NavLink>
                            <NavLink to={WHAT_I_DO}>
                                <span className={`nav-link ${pathname == WHAT_I_DO ? "active" : ""}`}>What I Do</span>
                            </NavLink>
                            <NavLink to={RESUME}>
                                <span className={`nav-link ${pathname == RESUME ? "active" : ""}`}>Resume</span>
                            </NavLink>
                            <NavLink to={PORTFOLIO}>
                                <span className={`nav-link ${pathname == PORTFOLIO ? "active" : ""}`}>Portfolio</span>
                            </NavLink>
                            <NavLink to={CLIENT_SPEAK}>
                                <span className={`nav-link ${pathname == CLIENT_SPEAK ? "active" : ""}`}>Client Speak</span>
                            </NavLink>
                            <NavLink to={CONTACT_ME}>
                                <span className={`nav-link ${pathname == CONTACT_ME ? "active" : ""}`}>Contact Me</span>
                            </NavLink>
                        </div>
                    </div>
                    {/* Your content here */}
                </div>
            )}
        </React.Fragment>
    )
}

export default Content