import LogoClient1 from '../../assets/LogoClient1.png'
import LogoClient2 from '../../assets/LogoClient2.png'
import LogoClient3 from '../../assets/LogoClient3.png'
import LogoClient4 from '../../assets/LogoClient4.png'
import LogoClient5 from '../../assets/LogoClient5.png'
import LogoClient6 from '../../assets/LogoClient6.png'
import CustomerLeftSectionImage from '../../assets/CustomerSectionLeftImage.png'

export default function CustomerSection() {
    const customers = [
        {
            name: "Logo1",
            logosrc: LogoClient1
        },
        {
            name: "Logo2",
            logosrc: LogoClient2
        },
        {
            name: "Logo3",
            logosrc: LogoClient3
        },
        {
            name: "Logo4",
            logosrc: LogoClient4
        },
        {
            name: "Logo5",
            logosrc: LogoClient5
        },
        {
            name: "Logo6",
            logosrc: LogoClient6
        }
    ]

    return (
        <div className="customer-container">
            <div className="customer-left">
                <img src={CustomerLeftSectionImage} alt="Customer image" />
            </div>
            <div className="customer-right">
                <p className="testimonial-text">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <h4 className="customer-name">Tim Smith</h4>
                <span className="customer-title">British Dragon Boat Racing Association</span>
                
                <div className="customers-list">
                    {customers.map((customer, idx) => (
                        <img key={idx} src={customer.logosrc} alt={customer.name} className="customer-brand-logo"/>
                    ))}
                    <a href="./" className="meet-customers-link">Meet all customers →</a>
                </div>
            </div>
        </div>
    )
}