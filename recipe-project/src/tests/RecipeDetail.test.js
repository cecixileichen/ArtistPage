import { render, screen } from '@testing-library/react';
import RecipeDetail from './RecipeDetail';
import { MemoryRouter, Route } from 'react-router-dom';

//sample component
test('renders RecipeDetail component', () => {
    const recipe = {
        id: 'CeciXileiChen',
        title: 'Egg Fried Rice',
        author: 'Ceci Xilei Chen',
        image: 'some_image_url',
        story: 'Some story about the recipe',
        ingredients: ['Rice', 'Egg'],
        steps: ['Cook rice', 'Fry egg'],
  };

    //test if it renders and manages urls correctly
    render(
        <MemoryRouter initialEntries={['/recipe/CeciXileiChen']}>
        <Route path="/recipe/:id">
            <RecipeDetail />
        </Route>
        </MemoryRouter>
    );

    //component unit test
    expect(screen.getByText('Egg Fried Rice')).toBeInTheDocument();
});
