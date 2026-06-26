import NexcentFooterLogo from '../../assets/NexcentFooterLogo.svg'

import NexcentInstagramIcon from '../../assets/NexcentInstagramIcon.svg'
import NexcentBasketballIcon from '../../assets/NexcentBasketballIcon.svg'
import NexcentTwitterIcon from '../../assets/NexcentTwitterIcon.svg'
import NexcentYoutubeIcon from '../../assets/NexcentYoutubeIcon.svg'

import FooterSendIcon from '../../assets/FooterEmailSendIcon.svg'

export default function FooterBelowSection() {
    const socialMedias = [
        {
            name: "Instagram",
            icon: NexcentInstagramIcon,
            link: "",
        },
        {
            name: "Basketball",
            icon: NexcentBasketballIcon,
            link: "",
        },
        {
            name: "Twitter",
            icon: NexcentTwitterIcon,
            link: "",
        },
        {
            name: "Youtube",
            icon: NexcentYoutubeIcon,
            link: "",
        }
    ]

    return(
        <div className="footer-below-container">
            <div className="social-description-container">
                <img src={NexcentFooterLogo} alt="Nexcent Logo" className="nexcent-logo" />
                <span className="copyright">Copyright © 2020 Landify UI Kit.</span>
                <span className="all-rights-reserved">All rights reserved</span>
                <div className="social-media-links">
                    {
                        socialMedias.map((socialMedia, index) => (
                            <a key={index} href={socialMedia.link}>
                                <img src={socialMedia.icon} alt={socialMedia.name} />
                            </a>
                        ))
                    }
                </div>
            </div>

            <div className="company-link-container">
                    <h2 className="company-tag">Company</h2>

                    <a href="">About us</a>
                    <a href="">Blog</a>
                    <a href="">Contact us</a>
                    <a href="">Pricing</a>
                    <a href="">Testimonials</a>
            </div>
            <div className="support-container">
                    <h2 className="support-tag">Support</h2>

                    <a href="">Help center</a>
                    <a href="">Terms of service</a>
                    <a href="">Legal</a>
                    <a href="">Privacy policy</a>
                    <a href="">Status</a>
            </div>
            <div className="stay-up-to-date-container">
                    <h2>Stay up to date</h2>
                    <div className="input-container">
                        <input 
                            type="email" 
                            placeholder="Your email address" 
                            className="email-input" 
                        />
                        <button type="submit" className="icon-button">
                            <img src={FooterSendIcon} alt="Send" />
                        </button>
                    </div>
            </div>
        </div>
    )
}