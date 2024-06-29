import React from 'react';
import Card from './Card';
import './styles/CardList.css';

interface CardData {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

interface CardListProps {
  cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => (
  <div className="card-list">
    {cards.map((card, index) => (
      <Card
        key={index}
        title={card.title}
        description={card.description}
        imgUrl={card.imgUrl}
        link={card.link}
      />
    ))}
  </div>
);

export default CardList;
