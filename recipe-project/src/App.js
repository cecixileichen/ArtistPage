import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'; // Import your pages/components
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
		{/* <nav>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/contact">Contact</Link></li>
			</ul>
      </nav> */}
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<h1>404 Not Found</h1>} />
      	</Routes>
    </div>
  );
}

export default App;
