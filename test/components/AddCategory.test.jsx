import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('Test on <AddCategory />', () => {
    test('Must change box text value', () => {
        render(<AddCategory onNewCategory={() => { }} />)

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'Saint Seiya' } })
        screen.debug()

        expect(input.value).toBe('Saint Seiya')
    })

    test('Must call onNewCategory if the input have a value', () => {

        const inputValue = 'Saint Seiya';
        const onNewCategory = jest.fn();


        render(<AddCategory onNewCategory={onNewCategory} />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form);

        screen.debug()

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled(); //Evaluamos que el inputValue.trim() haya sido llamado
        expect(onNewCategory).toHaveBeenCalledTimes(1); // Evaluamos que el inputValue.trim() haya sido llamado una X cantidad de veces
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
    })

    test('Dont should call onNewCategory if input are empty', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        screen.debug()

        expect(onNewCategory).toHaveBeenCalledTimes(0)
    })
})