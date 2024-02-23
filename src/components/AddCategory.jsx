import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const inputValueChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        onNewCategory( inputValue );
        setInputValue("");
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ inputValueChange }
            />
        </form>
    );
}
