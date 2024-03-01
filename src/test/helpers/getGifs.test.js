import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {

    test('debe retornar una arreglo de gifs ', async () => {
    
        const gifs = await getGifs('One Punch')
        expect( gifs.length ).toBeGreaterThan(0)
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            image: expect.any( String ),
        })
    });
});