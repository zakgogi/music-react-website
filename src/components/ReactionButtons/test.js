import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactionButtons from '.';

describe('Reaction Buttons', () => {
    beforeEach(() => {
        render(<ReactionButtons />)
    })

    test('The like button initialises as unclicked', () => {
        const likeButton = screen.getAllByRole('button', { name: 'Like'})[0];
        expect(likeButton.style.background).toBe('');
    })

    test('The like button background turns green when clicked', () => {
        const likeButton = screen.getAllByRole('button', { name: 'Like'})[0];
        userEvent.click(likeButton);
        expect(likeButton.style.background).toBe('lightgreen');
    })

    test('The like button grows when clicked', () => {
        const likeButton = screen.getAllByRole('button', { name: 'Like'})[0];
        userEvent.click(likeButton);
        expect(likeButton.style.transform).toBe('scale(1.1)');
    })

})