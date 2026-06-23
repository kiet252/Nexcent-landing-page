import CommunityMembership from '../../assets/CommunityMembership.svg'
import CommunityClubAndGroup from '../../assets/CommunityClubAndGroup.svg'
import CommunityNationalAssociation from '../../assets/CommunityNationalAssociation.svg'

export default function CommunitySection() {

    const communities = [
        {
            img: CommunityMembership,
            name: "Membership Organisations",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            img: CommunityNationalAssociation,
            name: "National Associations",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        },
        {
            img: CommunityClubAndGroup,
            name: "Clubs And Groups",
            desc: "Our membership management software provides full automation of membership renewals and payments"
        }
    ]

    return (
        <div className="community-container">
            <h1>Manage your entire community in a single system</h1>

            <p>Who is Nextcent suitable for?</p>

            <div className='community-display-container'>
                {communities.map((group) => (
                    <div key={group.name} className='community-card'>
                        <div className="icon-badge">
                            <img src={group.img} alt={group.name} className='img-chunk'/>
                        </div>
                        <h3>{group.name}</h3>
                        <p>{group.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}