import CommunityUpdateImage1 from '../../assets/CommunityUpdateImage1.png'
import CommunityUpdateImage2 from '../../assets/CommunityUpdateImage2.png'
import CommunityUpdateImage3 from '../../assets/CommunityUpdateImage3.png'

export default function CommunityUpdateSection() {
    const communityCards = [
        {
            img: CommunityUpdateImage1,
            desc: "Creating Streamlined Safeguarding Processes with OneRen"
        },
        {
            img: CommunityUpdateImage2,
            desc: "What are your safeguarding responsibilities and how can you manage them?"
        },
        {
            img: CommunityUpdateImage3,
            desc: "Revamping the Membership Model with Triathlon Australia"
        }
    ]

    return(
        <div className="community-update-container">
            <h1 className="community-update-title">Caring is the new marketing</h1>

            <p className="community-update-description">The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>

            <div className="community-update-card-list">
                {
                    communityCards.map((card, index) => (
                        <div key={index} className="community-update-card">
                            <img src={card.img} alt={card.desc} className='card-image'/>

                            <div className="card-description">
                                <p>{card.desc}</p>
                                <a href="./">Readmore →</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}