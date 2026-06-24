import AchievementIcon1 from '../../assets/AchievementIcon1.svg'
import AchievementIcon2 from '../../assets/AchievementIcon2.png'
import AchievementIcon3 from '../../assets/AchievementIcon3.svg'
import AchievementIcon4 from '../../assets/AchievementIcon4.svg'

export default function AchievementSection() {
    const achievements = [
        {
            img: AchievementIcon1,
            amount: 2245341,
            type: "Members"
        },
        {
            img: AchievementIcon2,
            amount: 46328,
            type: "Clubs"
        },
        {
            img: AchievementIcon3,
            amount: 828867,
            type: "Event Bookings"
        },
        {
            img: AchievementIcon4,
            amount: 1926436,
            type: "Payments"
        }
    ]

    return (
    <div className="achievement-container">
        <div className="left-achievement">
            <h1>
                Helping a local <br />
                <span className="text-accent">business reinvent itself</span>
            </h1>
            <p>We reached here with our hard work and dedication</p>
        </div>
        
        <div className="right-achievement">
            {achievements.map((achievement) => (
                <div key={achievement.type} className="achievement-card">
                    <img src={achievement.img} alt={achievement.type} className="achievement-icon" />
                    <div className="achievement-data">
                        <h2>{Number(achievement.amount).toLocaleString()}</h2>
                        <p>{achievement.type}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)
}