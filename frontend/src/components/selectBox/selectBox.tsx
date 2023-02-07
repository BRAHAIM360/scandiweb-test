import React from 'react';
import './styles.scss';

interface ISelectBox {
    options: string[];
    selected: number;
    setSelected: (index: number) => void;
    id?: string;
}

export const SelectBox = (props: ISelectBox) => {
    return (

        <div className="select-dropdown" id={props.id}>
            <select onChange={(e) => props.setSelected(parseInt(e.target.value))} value={props.selected}>
                {props.options.map((option, index) => {
                    return (
                        <option key={option} value={index}>
                            {option}
                        </option>
                    );
                })

                }

            </select>
        </div>
    );
}

