import React from 'react';
import './styles.scss';

interface ISelectBox {
    options: string[];
    selected: string;
    setSelected: (val: string) => void;
    id?: string;
    label?: string;
}

export const SelectBox = (props: ISelectBox) => {
    return (
        <div className='select-container'>
            <span>{props.label}</span>

            <div className="select-dropdown" >
                <select id={props.id} onChange={(e) => props.setSelected(e.target.value)} value={props.selected}>
                    {props.options.map((option) => {
                        return (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        );
                    })

                    }

                </select>
            </div>
        </div>
    );
}

