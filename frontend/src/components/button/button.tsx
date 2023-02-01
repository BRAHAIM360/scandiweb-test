import React from 'react';
import './styles.scss';

interface IHeader {
    name: string;
    onClick: () => void;
}

export const MButton = (props: IHeader) => {
    return (
        <button type="button" className='button' onClick={props.onClick}>{props.name}</button>
    );
}

