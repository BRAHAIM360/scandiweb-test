import React from 'react';
import './styles.scss';

interface IInputText {
    label: string;
    value: string;
    onChange: (val: string) => void;
    type: 'number' | 'text';
    errorText?: string;
    id?: string;
}

export const InputText = (props: IInputText) => {
    return (
        <>
            <div className='input-text' >
                <span className='input-text__label'>{props.label}</span>
                <input id={props.id} type={props.type} className='input-text__input' value={props.value} onChange={(e) => props.onChange(e.target.value)} />
            </div>
            {
                props.errorText && <div className='errorText' >{props.errorText}</div>
            }

        </>
    );
}

