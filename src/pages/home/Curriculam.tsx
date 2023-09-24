import React from 'react'
import CVRAIHAN from "../../assets/cv/MuhdRaihan-ReactJs,Laravel,Typescript.pdf"
const Curriculam = () => {

    const handleDownloadClick = () => {
        // Replace 'your_cv_url.pdf' with the actual URL of your CV file
        const cvUrl = 'Muhd-Raihan,Reactjs,laravel,typescript.pdf';

        // Create an anchor element to trigger the download
        const link = document.createElement('a');
        link.href = cvUrl;
        link.target = '_blank'; // Open the download in a new tab (optional)
        link.download = CVRAIHAN; // Specify the desired filename

        // Trigger the click event on the anchor element
        link.click();

        // Clean up the anchor element
        link.remove();
    };

    return (
        <React.Fragment>
            <div className='rounded-b-lg card-bio p-9 '>
                <div className='flex flex-col gap-5'>
                    <span className='text-xs md:text-lg'>Download my curriculam vitae</span>
                    <div className='flex flex-col gap-5 md:flex-row md:gap-5 curriculam'>
                        <button onClick={handleDownloadClick} className='text-xs curriculam-btn md:text-lg'>Download CV</button>
                        <button className='text-xs curriculam-btn md:text-lg'>Contact Me</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Curriculam