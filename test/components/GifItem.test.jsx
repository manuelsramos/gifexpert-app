import { render, screen } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe('Prueba en GifItem', () => {
    const title = 'title';
    const url = 'https://dosods.com'


    test('should match with snapshot', () => {


        const { container } = render(<GifItem title={title} url={url} />);

        expect(container).toMatchSnapshot();
    })

    test('should show the image with URL and ALT', () => {

        render(<GifItem title={title} url={url} />);
        /*         expect(screen.getByRole('img').src).toBe(url);
                expect(screen.getByRole('img').alt).toBe(title); */
        /*   console.log(screen.getByRole('img')); */

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    });


    test('should show component title', () => {
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();


    })
});