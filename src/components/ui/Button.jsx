import * as React from 'react';
import './Button.css';

export const Button = (props) => {
    return (
        <button className='move-forvard' {...props}>{props.name}</button>
    );
};