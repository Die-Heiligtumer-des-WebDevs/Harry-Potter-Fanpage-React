import Header from "../components/Header";
import LondonStudiosSlider from "../components/LondonStudiosSlider";
import Spells from "../components/SpellsCard";
import Button from "../components/MenuButtons.jsx"; // Dein Component
import  ButtonNames  from "../utils/buttonNames.js"; // Import des Arrays

const HomePage = () => {
    return (
        <>
        <Header />
        <Button buttonNames={ButtonNames} />
        <LondonStudiosSlider />
        <Spells />
        </>
    )
}

export default HomePage;