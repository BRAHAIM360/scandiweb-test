import React from 'react';
import './styles.scss';

interface IButton {
    name: string;
    onClick: () => void;
    disbaled?: boolean;
}

export const MButton = (props: IButton) => {
    return (
        <button type="button" className={props.disbaled ? 'button disabled' : "button"} onClick={props.onClick}>{props.name}</button>
    );
}

