import { screen } from '@testing-library/react';
import App from '../App.js';

describe('App', () => {
    beforeEach(() => {
        render(<App />)
    })

    test('The like button initialises as unclicked', () => {
        const likeButton = screen.getAllByRole('button', { name: 'Like'})[0];
        expect(likeButton.style.background).toBe('');
    })
})