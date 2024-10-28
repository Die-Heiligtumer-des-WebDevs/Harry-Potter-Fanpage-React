import React, { useContext,useState, useEffect } from 'react';
import { AppContext } from '../utils/AppContext'; 
import '../styles/components/spellsCard.css'; 

import img1 from '../assets/spellsCardBackgroundImg/image1.jpg';
import img2 from '../assets/spellsCardBackgroundImg/image2.webp';
import img3 from '../assets/spellsCardBackgroundImg/image3.jpg';
import img4 from '../assets/spellsCardBackgroundImg/image4.jpeg';
import img5 from '../assets/spellsCardBackgroundImg/image5.webp';
import img6 from '../assets/spellsCardBackgroundImg/image6.webp';
import img7 from '../assets/spellsCardBackgroundImg/image7.jpg';
import img8 from '../assets/spellsCardBackgroundImg/image8.jpg';
import img9 from '../assets/spellsCardBackgroundImg/image9.webp';
import img10 from '../assets/spellsCardBackgroundImg/image10.jpg';
import img11 from '../assets/spellsCardBackgroundImg/image11.jpeg';
import img12 from '../assets/spellsCardBackgroundImg/image12.jpg';
import img13 from '../assets/spellsCardBackgroundImg/image13.jpg';

const images = [img1, img2, img3, img4, img5, img6,img7,img8,img9,img10,img11,img12,img13];

const shuffleArray = (array) => {
  return array.sort(() => 0.5 - Math.random());
};

const Spells = () => {
    const { allSpellsData } = useContext(AppContext);  

    const [randomSpells, setRandomSpells] = useState([]);
    const [shuffledImages, setShuffledImages] = useState([]);
    
    useEffect(() => {
        const shuffledSpells = [...allSpellsData]
            .sort(() => 0.5 - Math.random())  
            .slice(0, 5);  
        setRandomSpells(shuffledSpells);

        const shuffledImgs = shuffleArray([...images]);
        setShuffledImages(shuffledImgs);

    }, [allSpellsData]);


    return (
      <div className="spells-container-home">
          {randomSpells.map((spell, index) => {
              
              return (
                  <div key={index} className="spell-card" style={{ backgroundImage: `url(${shuffledImages[index]})` }}>
                      <div className="spell-overlay">
                          <h2>{spell.name}</h2>
                          <p>{spell.description}</p>
                      </div>
                  </div>
              );
          })}
      </div>
  );
};

export default Spells;
