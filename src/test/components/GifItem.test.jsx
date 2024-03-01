import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";


describe('pruebas en GifItem', () => {

    const title = "Saitama";
    const url = "https://one-punch.com/saitama.jpg";
    
    test('debe hacer match con snapshopt ', () => {

        const { container } =  render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();

    });

    test('debe mostrar la imagen con el url y alt indicado', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug()
        // console.log(screen.getByRole('img').src)
        expect(screen.getByRole("img").src).toBe( url );
    });

    test('verificar que el title exista', () => {
        
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title )).toBeTruthy();
    });

});