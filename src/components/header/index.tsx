import React, { useRef } from 'react'
import Navbar from './Navbar'

const Header = () => {

    const headerRef = useRef(null);
    // const [scrolled, setScrolled] = useState(false);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (headerRef.current && window.scrollY > headerRef.current.clientHeight) {
    //             setScrolled(true);
    //         } else {
    //             setScrolled(false);
    //         }
    //     };

    //     // Add a scroll event listener to the window
    //     window.addEventListener('scroll', handleScroll);

    //     // Remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);


    return (
        <React.Fragment>
            <header ref={headerRef}
                className={`header`}
            >
                <Navbar />
            </header>
        </React.Fragment>
    )
}

export default Header