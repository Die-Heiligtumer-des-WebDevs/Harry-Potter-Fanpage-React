import Header from "../components/Header";
import LondonStudiosSlider from "../components/LondonStudiosSlider";
import Spells from "../components/SpellsCard";
import Button from "../components/MenuButtons.jsx"; // Dein Component
import ButtonNames  from "../utils/buttonNames.js"; // Import des Arrays
import HouseCardSlide from "../components/HousesCardSlide.jsx";

const HomePage = () => {
    return (
        <>
        <Header />
        <Button buttonNames={ButtonNames} />
        <div className="houseCardContainer">
        <HouseCardSlide />
        </div>
        <LondonStudiosSlider />
        <Spells />
        </>
    )
}

export default HomePage;