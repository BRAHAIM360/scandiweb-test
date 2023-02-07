import React from 'react';
import './styles.scss';

interface IButton {
    name: string;
    onClick: () => void;
    disbaled?: boolean;
    id: string;
}

export const MButton = (props: IButton) => {
    return (
        <button id={props.id} type="button" className={props.disbaled ? 'button disabled' : "button"} onClick={props.onClick}>{props.name}</button>
    );
}

