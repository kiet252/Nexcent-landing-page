import SecondUnlockImage from '../../assets/SecondUnlockImage.svg'

export default function SecondUnlockSection() {
    return (
        <div className="second-unlock-container">
            <div className="second-unlock-left">
                <img src={SecondUnlockImage} alt="Image" />
            </div>
            <div className="second-unlock-right">
                <h2>How to design your site footer like we did</h2>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}