// import React, { useState } from 'react'
// import Content from './content'

// import { Turn as Hamburger } from 'hamburger-react'
// const Aside = () => {

//     const [isAsideOpen, setisAsideOpen] = useState<boolean>(false)
//     // const refExit = useRef(null)
//     // const handleAside = () => {
//     //     setisAsideOpen(!isAsideOpen)
//     //     if (refExit && refExit.current && refExit.current.style) {
//     //         refExit.current.style.opacity = '0';
//     //         refExit.current.style.animation = 'fadeOut 0.3s ease-out forwards';
//     //         console.log(refExit.current);

//     //     }

//     // }



//     return (
//         <React.Fragment>
//             <div
//                 onClick={handleAside}
//             >
//                 <div className='burger-elevated' >
//                     <Hamburger direction="right" size={25} color={isAsideOpen ? "white" : "black"} toggled={isAsideOpen} toggle={handleAside} />
//                     {/* <i className={`pi ${isAsideOpen ? 'pi-times' : 'pi-bars'}`} style={{ fontSize: '24px' }}></i> */}
//                 </div>
//             </div>

//             <Content
//                 isAsideOpen={isAsideOpen}
//             />


//         </React.Fragment >
//     )
// }

// export default Aside