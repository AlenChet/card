import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './components/CardList';
import CardDetail from './components/CardDetail';
import './App.css';

const cards = [
  {
    title: 'Card title',
    description: 'Some quick example text to buld on the card',
    imgUrl: 'https://via.placeholder.com/150',
    link: '/card1',
  },
  {
    title: 'Card title',
    description: 'Some quick example text to buld on the card',
    imgUrl: 'https://via.placeholder.com/150',
    link: '/card2',
  },
  {
    title: 'Card title',
    description: 'Some quick example text to buld on the card',
    imgUrl: 'https://via.placeholder.com/150',
    link: '/card3',
  },
];

const App: React.FC = () => (
  <Router>
    <div className="app">
      <Routes>
        <Route path="/" element={<CardList cards={cards} />} />
        <Route path="/card1" element={<CardDetail title="Card 1" />} />
        <Route path="/card2" element={<CardDetail title="Card 2" />} />
        <Route path="/card3" element={<CardDetail title="Card 3" />} />
      </Routes>
    </div>
  </Router>
);

export default App;
