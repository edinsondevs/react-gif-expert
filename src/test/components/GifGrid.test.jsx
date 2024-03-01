import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

// * Con este jest.mock, estoy mokeando todo el hook que luego usare al renderizar
jest.mock("../../hooks/useFetchGifs");

describe("test en GifGrid", () => {
    const category = "One Punch";

    test("debe de mostrar el loading inicialmente", () => {
        const loading = "Cargando...";

        // * mockeo la respuesta de la funcion o hooks, que inicialmente images esta vacio y el loading es true usando "mockReturnValue"

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByText(loading));
        expect(screen.getByText(category));
    });

    test("debe de mostrar items cuando se cargan las imagenes", () => {
        // * mockeo las images de respuesta del hooks para completar el mock de respuesta
        
        const gifs = [
            {
                id: "ABC",
                title: "Saitama",
                url: "http://example.com/saitama",
            },
            {
                id: "123",
                title: "Gohan",
                url: "http://example.com/gohan",
            },
        ];

        // * mockeo la respuesta de la funcion o hooks, pasandole las images  y el loading pasa a false

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render(<GifGrid category={category} />);
        expect(screen.getByTestId("content-cards"));
        expect(screen.getAllByRole("img").length).toBe(2);
    });
});
