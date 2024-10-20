import React from 'react';
import Card from 'react-bootstrap/Card';
import headerImg from '../img/headerImg.jpg';
import '../css/App.css';
import '../css/Home.css';
import { recipes } from '../data/recipes';

function Home() {
  return (
	<div className='Home-page'>
		<div className="Home-head-page">
			<img src={headerImg} alt="headerImg" className="Home-head-img"/>
			<div className="Home-head-title">
				<p>HOME</p>
				<p>FROM</p>
				<p>FOOD</p>
			</div>
		</div>
		<div className="Home-recipe-page">
			{recipes.map((recipe, idx) => (
				<Card key={idx} className="Home-recipe-card">
				<Card.Img src={recipe.image} alt={recipe.title} className="Home-recipe-image" />
				<Card.Body>
					<Card.Title className="Home-recipe-title">{recipe.title}</Card.Title>
					<Card.Text className="Home-recipe-text">{recipe.author}</Card.Text>
				</Card.Body>
				</Card>
			))}
		</div>
	</div>
  );
}

export default Home;
