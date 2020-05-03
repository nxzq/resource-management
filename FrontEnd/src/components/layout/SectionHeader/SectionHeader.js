import React from 'react';

export default React.memo(function SectionHeader({ name }) {
    return (
        <div>
            <h3>{name}</h3>
            <hr />
        </div>
    )
});