import React from 'react';
import { Button } from 'reactstrap';

const DynamicSectionHeader = ({ name, count, addForm}) => {
    const AddFormButton = (count) => {
        while (count < 3) return <Button onClick={addForm} style={{}}><b>+</b> Add New {name}</Button>
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{name}</h3>
                {AddFormButton(count)}
            </div>
            <hr />
        </div>
    )
}

export default DynamicSectionHeader