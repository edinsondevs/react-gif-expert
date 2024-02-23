import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            { isLoading && ( <h3>Cargando...</h3> ) }
                <h3>{category}</h3>
                <div className='card-grid'>
                    {images.map((item, id) => (
                        <GifItem
                            key={item.id}
                            item={item}
                        />
                        ))}
                </div>
                
        </>
    );
};
