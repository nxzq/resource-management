import React from 'react';
import { Button } from 'reactstrap';

const DynamicSectionHeader = ({ name }) => {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{name}</h3>
                <Button style={{}}><i className="fas fa-plus-circle"></i>+ Add New {name}</Button>
            </div>
            <hr />
        </div>
    )
}

export default DynamicSectionHeader