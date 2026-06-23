import logoAsset from '../assets/NexcentLogo.svg'

export default function Navbar() {
    //const navLinks = ['Home', 'Feature', 'Community', 'Blog', 'Pricing']
    const navLinks = [
        {name: 'Home', link: './'},
        {name: 'Feature', link: './'},
        {name: 'Community', link: './'},
        {name: 'Blog', link: './'},
        {name: 'Pricing', link: './'}
    ]

    return (
        <nav className="navbar-container">
            
            <div className="navbar-logo">
                <img src={logoAsset} alt="Nexcent Logo" className="logo-img"></img>
            </div>

            <div className="navbar-links">
                {navLinks.map((link) => (
                    <a 
                        key={link.name} 
                        href={`#${link.link}`}
                        className="nav-item"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            <button className="navbar-btn">Register Now →</button>
        </nav>
    )
}

