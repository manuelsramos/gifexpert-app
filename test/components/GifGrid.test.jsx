import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../src/components/GifGrid'

describe('Test <GifGrid />', () => {

    const category = 'Saint Seiya'
    test('should show loading', () => {

        render(<GifGrid category={category} />);

        expect(screen.getByText('Loading...'));
        expect(screen.getAllByText(category))

    })

    test('should show items when image are loaded', () => { second })
})

