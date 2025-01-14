import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import '../styles/components/houseCard.scss';
import "../styles/main.scss";
function HouseCardSlide() {
  const initialItems = [
    {
      name: 'Gryffindor',
      description: 'Courage, bravery, determination. House of heroes and champions. Values friendship and loyalty',
      imageUrl: '../assets/housesLogos/gryffindor.jpg'
    },
    {
      name: 'Slytherin',
      description: 'Ambition, cunning, resourcefulness. House of leaders and strategists. Values loyalty to friends and allies.',
      imageUrl: '../assets/housesLogos/slytherin.jpg',
    },
    {
      name: 'Hufflepuff',
      description: 'Loyalty, patience, hard work. House of kindness and inclusivity. Values fairness and justice for all',
      imageUrl: '../assets/housesLogos/hufflepuff.jpg',
    },
    {
      name: 'Ravenclaw',
      description: 'Wisdom, intelligence, creativity. House of thinkers and innovators. Values curiosity and a love for learning.',
      imageUrl: '../assets/housesLogos/ravenclaw.jpg',
    },
  ];

  const [items, setItems] = useState(initialItems);

  const nextSlide = () => {
    setItems((prevItems) => {
      const [first, ...rest] = prevItems;
      return [...rest, first];
    });
  };

  const prevSlide = () => {
    setItems((prevItems) => {
      const last = prevItems[prevItems.length - 1];
      return [last, ...prevItems.slice(0, -1)];
    });
  };

  return (
    <>
    <div className="houseCardContainer">
        <div className="slide">
          {items.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="content">
                <h3 className='name'>{item.name}</h3>
                <p className='des'>{item.description}</p>
                {/* <button>See More</button> */}
              </div>
            </div>
          ))}
        </div>
        <div className="button">
          <button className="prev" onClick={prevSlide}><FaArrowLeft /></button>
          <button className="next" onClick={nextSlide}><FaArrowRight /></button>
        </div>
      </div>
    </>
  );
}

export default HouseCardSlide;
