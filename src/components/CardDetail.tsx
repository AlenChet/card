import React from 'react';
import { Link } from 'react-router-dom';
import './styles/CardDetail.css';

interface CardDetailProps {
  title: string;
}

const CardDetail: React.FC<CardDetailProps> = ({ title }) => (
  <div className="card-detail">
    <h1>{title}</h1>
    <p>This is the detail view of {title}.</p>
    <Link to="/" className="btn btn-primary">
      Back to list
    </Link>
  </div>
);

export default CardDetail;
