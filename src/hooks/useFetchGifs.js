import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) =>{
    // console.log('category :', category)
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const get = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    };

    useEffect(() => {
        get();
    }, []);

    return {
        images,
        isLoading,
    }
}
