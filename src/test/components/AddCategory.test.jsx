import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../components/AddCategory";

describe('test AddCategory', () => {

    test('debe cambiar el valor de la caja de texto ', () => {
        render(<AddCategory onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox')
        fireEvent.input( input, { target : { value: "Saitama"}} )
        expect( input.value ).toEqual('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render(
            //* renderizo el componente con la funcion vacia porque es obligatoria
            <AddCategory onNewCategory={onNewCategory} />
        );

        // * PASO 1: Capturo el input
        const input = screen.getByRole('textbox');

        // * PASO 2: Capturo el formulario a traves del area-label
        const form = screen.getByRole('form');

        // * PASO 3: Simulo la entrada de datos en el input
        fireEvent.input( input, { target : { value: inputValue}} )

        // * PASO 4: Disparar el submit del formulario
        fireEvent.submit( form );
        
        expect( input.value ).toBe('')
        screen.debug()
        
        // ? Con el siguiente expect se comprueba que la función fue llamada
        expect( onNewCategory ).toHaveBeenCalled()
        // ? Con el siguiente expect se comprueba que la función fue llamada 1 vez
        expect( onNewCategory ).toHaveBeenCalledTimes( 1 )
        // ? Con el siguiente expect se comprueba que la función fue llamada con el valor del input
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    });

    test('no debe llamar el onNewCategory si el input está vacio', () => {
        const onNewCategory = jest.fn();

        render(
            //* renderizo el componente con la funcion vacia porque es obligatoria
            <AddCategory onNewCategory={onNewCategory} />
        );
        
        const form = screen.getByRole("form");
        
        // ? Se llama al evento submit sin haber ingresado un dato
        fireEvent.submit(form);
        // ? Con el siguiente expect  se comprueba que la función fue llamada 0 veces
        expect( onNewCategory ).toHaveBeenCalledTimes( 0 );
        // ? Con el siguiente expect  se comprueba que la función no fue llamada
        expect( onNewCategory ).not.toHaveBeenCalled();
        
    });
});