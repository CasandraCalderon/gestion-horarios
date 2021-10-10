import React from 'react'
import './Input.css'
const Input = ({ atribute, handlerChange, param }) => {
    return (
        <div className="input-container">
            <input
            id ={atribute.id}
            name={atribute.name}
            placeholder={atribute.placeholder}
            type={atribute.type}
            onChange={(e) => handlerChange(e.target.name, e.target.value)}
            className={ param ? 'input-error' : 'regular-style'}

            />
        </div>
    )
};
export default Input;
