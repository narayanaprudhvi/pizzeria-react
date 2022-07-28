import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';
function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                {""}
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <YouTubeIcon />
                <LinkedInIcon />
                <center>
                    <p> &copy; 2021 prudhvipizzeria.com </p>
                </center>
            </div>
        </div>
    )
}

export default Footer
