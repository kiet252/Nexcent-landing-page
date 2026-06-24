import UnlockImage from '../../assets/UnlockImage.svg'

export default function UnlockSection() {
    return (
        <div className="unlock-container">
            <div className="left-unlock">
                <img src={UnlockImage} alt="Image" />
            </div>

            <div className="right-container">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}