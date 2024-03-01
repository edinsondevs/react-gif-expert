import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import PropTypes from "prop-types";

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            { isLoading && ( <h3>Cargando...</h3> ) }
                <h3>{category}</h3>
                <div className='card-grid' data-testid="content-cards">
                    {images.map((item, id) => (
                        <GifItem
                            key={item.id}
                            title={item.title}
                            url={item.image}
                        />
                        ))}
                </div>
                
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}