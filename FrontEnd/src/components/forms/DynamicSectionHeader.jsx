import React from 'react';
import { Button, Row } from 'reactstrap';

const DynamicSectionHeader = ({ name, count, addForm}) => {
    const AddFormButton = (count) => {
        while (count < 3) return <Button color="primary" id="section-header" className="shadow-none" onClick={addForm}>
            <i style={{ color: 'inherit' }} className="fas fa-plus-circle fa-lg"></i>&nbsp;&nbsp;Add New {name}</Button>
    }
    return (
        <div>
            <Row>
            <div className="col-md-9">
                <h3>{name}</h3>
            </div>
            <div className="col-md-3">
                {AddFormButton(count)}
            </div>
            </Row>
            <hr />
            
        </div>
    )
}

export default DynamicSectionHeader