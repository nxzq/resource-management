import React from 'react';

export default function Header({name}) {
    return (
        <div>
            <hr />
            <h1 data-testid="header" className='text-center' >{name}</h1>
            <hr />
        </div>
    )
};