import React from 'react';

const Header = ({name}) => {
    return (
        <div>
            <h1 className='text-center' >{name}</h1>
            <hr />
        </div>
        )
    }
    
export default Header