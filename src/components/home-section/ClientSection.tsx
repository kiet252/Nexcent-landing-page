import LogoClient1 from '../../assets/LogoClient1.png'
import LogoClient2 from '../../assets/LogoClient2.png'
import LogoClient3 from '../../assets/LogoClient3.png'
import LogoClient4 from '../../assets/LogoClient4.png'
import LogoClient5 from '../../assets/LogoClient5.png'
import LogoClient6 from '../../assets/LogoClient6.png'
import LogoClient7 from '../../assets/LogoClient7.png'


export default function ClientSection() {
    const clients = [
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
        },
        {
            name: "Logo7",
            logosrc: LogoClient7
        }
    ]

    return (
        <div className="client-container">
            <h2>Our client</h2>

            <p>We have been working with some Fortune 500+ clients</p>

            <div className="client-display-block">
                {clients.map((client, index) => (
                    <img key={index} src={client.logosrc} alt={client.name} className="client-logo-img" />
                ))}
            </div>
        </div>
    )
}