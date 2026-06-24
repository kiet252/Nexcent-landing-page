import UnlockSection from "./UnlockSection"
import AchievementSection from "./AchievementsSection"
import SecondUnlockSection from "./SecondUnlockSection"
import CustomerSection from "./CustomerSection"
import CommunityUpdateSection from "./CommunityUpdateSection"

export default function BodySection() {
    return (
        <>
            <UnlockSection></UnlockSection>
            <AchievementSection></AchievementSection>
            <SecondUnlockSection></SecondUnlockSection>
            <CustomerSection></CustomerSection>
            <CommunityUpdateSection></CommunityUpdateSection>
        </>
    )
}