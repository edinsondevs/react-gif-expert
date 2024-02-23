import {  useState } from "react";
import { AddCategory, GifGrid } from "./components";


export default function GifExpertApp() {
	const [categories, setCategories] = useState(['cat'])

	const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ))  return;
        setCategories( [ newCategory, ...categories ] );
    }

	
	return (
        <>
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory onNewCategory={ onAddCategory } />

            {/* Listado de Gif */}
            
            {
                categories.map(( category ) => (
                    <GifGrid key={ category } category={ category } />
                ))
            }
            
            {/* Gif Item */}
        </>
    );
}
