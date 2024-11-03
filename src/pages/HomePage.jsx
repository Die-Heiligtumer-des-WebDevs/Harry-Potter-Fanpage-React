import Header from "../components/Header";
import LondonStudiosSlider from "../components/LondonStudiosSlider";
import Spells from "../components/SpellsCard";
import HouseCardSlide from "../components/HousesCardSlide.jsx";

const HomePage = () => {
    return (
        <>
        <Header />
        <h1 style={{color: 'black',paddingTop: '12vh', fontSize: '6vw'}}>Hogwarts Houses</h1>
        <HouseCardSlide />
        <h1 style={{color: 'black', marginTop: '8vh', fontSize: '6vw'}}>London Studios</h1>
        <LondonStudiosSlider />
        <Spells />
        </>
    )
}

export default HomePage;