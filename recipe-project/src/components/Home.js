import React, { useEffect }from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import headerImg from '../img/headerImg.jpg';
import '../css/App.css';
import '../css/Home.css';
import { recipes } from '../data/recipes';

function Home() {

	useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 

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
			{recipes.map((recipe, id) => (
				<Link to={`/recipe/${recipe.id}`} key={id}>
					<Card key={id} className="Home-recipe-card">
						<Card.Img src={recipe.image} alt={recipe.title} className="Home-recipe-image" />
						<Card.Body>
							<Card.Title className="Home-recipe-title">
								<span>{recipe.title}</span>
							</Card.Title>
							<Card.Text className="Home-recipe-text">{recipe.author}</Card.Text>
						</Card.Body>
					</Card>
				</Link>
			))}
		</div>
		<div className='Page-bottom'></div>
	</div>
	);
}

export default Home;
