import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Everest.jpeg'
              text='Explore the top of the world'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Langtang.jpg'
              text='Travel through the Mystic Beauty of Nepal'
              label='Adventure'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Annapurna.jpeg'
              text='Set for the one in a lifetime experience'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/Dhaulagiri.jpeg'
              text='Ride through the Himalayan Beauty'
              label='Mystery'
              path='/products'
            />
            <CardItem
              src='images/Mustang.jpeg'
              text='Explore the hidden beauty of Nepal'
              label='Luxury'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;