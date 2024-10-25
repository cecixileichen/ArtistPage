import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { act } from 'react';
import RecipeDetail from './RecipeDetail';

test('renders RecipeDetail component correctly', () => {
	const recipe = {
		id: 'CeciXileiChen',
		title: 'Egg Fried Rice',
		author: 'Ceci Xilei Chen',
		image: 'some_image_url',
		story: 'Some story about the recipe',
		ingredients: ['Rice', 'Egg'],
		steps: ['Cook rice', 'Fry egg'],
	};

	act(() => {
		render(
			<MemoryRouter initialEntries={['/recipe/CeciXileiChen']}>
				<Routes>
					<Route path="/recipe/:id" element={<RecipeDetail />} />
				</Routes>
			</MemoryRouter>
		);
	});

	expect(screen.getByText('Egg Fried Rice')).toBeInTheDocument();
});
