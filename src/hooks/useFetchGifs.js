import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {      /* Llamamos la funcion en el useEffect para que se ejecute una sola vez, por el array de dependencia */
        getImages();
    }, [])


    return {
        images,
        isLoading
    }
}
