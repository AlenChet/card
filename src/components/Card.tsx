import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Card.css';

interface CardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  children?: React.ReactNode; 
}

const Card: React.FC<CardProps> = ({ title, description, imgUrl, link, children }) => (
  <div className="card">
    <img src={imgUrl} className="card-img-top" alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <Link to={link} className="btn btn-primary">
        Go somewhere
      </Link>
      {children}
    </div>
  </div>
);

export default Card;
