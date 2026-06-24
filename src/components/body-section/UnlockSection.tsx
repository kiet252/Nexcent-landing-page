import UnlockImage from '../../assets/UnlockImage.svg'

export default function UnlockSection() {
    return (
        <div className="unlock-container">
            <div className="left-unlock">
                <img src={UnlockImage} alt="Image" />
            </div>

            <div className="right-container">
                <h2>The unseen of spending three years at Pixelgrade</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button>Learn more</button>
            </div>
        </div>
    )
}