import React from 'react';
import "./styles.scss"

const Input = () => {
    return (
        <div className="input-container">
            <input className="input-container__input" type="text" placeholder=" "/>
                <label className="input-container__label">Sale Price</label>
        </div>
    );
};

export default Input;