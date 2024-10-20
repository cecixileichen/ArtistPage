import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home'; // Import your pages/components
import About from './components/About';
import Contact from './components/Contact';
import RecipeDetail from './components/RecipeDetail';

function App() {
  return (
    <div className="App">
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="/recipe/:id" element={<RecipeDetail />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
      	</Routes>
    </div>
  );
}

export default App;
