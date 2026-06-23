import { useState } from 'react'
import HeroIllustration from '../../assets/HeroIllustration.svg'

export default function HeroSection() {

    const slideDescriptions = [
        {
            title: "Lessons and insights",
            accent: "from 8 years",
            subtitle: "Where to grow your business as a photographer: site or social media?"
        },
        {
            title: "Design simple interfaces",
            accent: "for complex systems",
            subtitle: "Streamline your engineering workflows and launch your products faster."
        },
        {
            title: "Scale your business",
            accent: "with modern tools",
            subtitle: "Empower your managers and creators with data-driven evaluation models."
        }
    ]

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className="hero-container"> 
            <div className="left-hero">
                <h1>
                    {slideDescriptions[currentSlide].title} <br />
                    <span className="text-accent">{slideDescriptions[currentSlide].accent}</span>
                </h1>
                <p>{slideDescriptions[currentSlide].subtitle}</p>
        
                <button className="hero-register">Register</button>
            </div>
        
            <div className="right-hero">
                <img src={HeroIllustration} alt="Learning illustration" className="hero-img"/>
            </div>

            <div className="hero-dots">
                {[0, 1, 2].map((index) => (
                    <button 
                    key={index}
                    className={`dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}