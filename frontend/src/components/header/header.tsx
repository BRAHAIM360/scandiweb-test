import React, { ReactNode } from 'react';
import './styles.scss';


export const Header = ({ children }: { children: ReactNode }) => {
    return (
        <div className="header">
            <div className='container'>{children}</div>
            <div className="line"></div>
        </div>
    );
}

