import React from 'react';
import './styles.scss';

interface ISelectBox {
    options: string[];
    selected: number;
    setSelected: (index: number) => void;
}

export const SelectBox = (props: ISelectBox) => {
    return (
        <div className="select-dropdown">
            <select onChange={(e) => props.setSelected(parseInt(e.target.value))} value={props.selected}>
                {props.options.map((option, index) => {
                    return (
                        <option value={index} selected={index === props.selected}>
                            {option}
                        </option>
                    );
                })

                }

            </select>
        </div>
    );
}

