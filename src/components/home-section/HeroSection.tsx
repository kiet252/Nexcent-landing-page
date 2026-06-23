import HeroIllustration from '../../assets/HeroIllustration.svg'

export default function HeroSection() {
    return (
        <div className="hero-container"> 
            <div className="left-hero">
                <h1>
                    Lessons and insights <br />
                    <span className="text-accent">from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
        
                <button className="hero-register">Register</button>
            </div>
        
            <div className="right-hero">
                <img src={HeroIllustration} alt="Learning illustration" className="hero-img"/>
            </div>
        </div>
    )
}