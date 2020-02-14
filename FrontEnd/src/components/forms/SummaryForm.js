import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';


const SummaryForm = ({ SummaryText, handleChange }) => {
    return (
        <div>
            <FormGroup>
                <Label for="SummaryText">Summary</Label>
                <Input type="textarea" name="SummaryText" id="SummaryText" placeholder="Summary (Optional)" value={SummaryText} onChange={handleChange} />
            </FormGroup>
            <hr />
        </div>
    )
}

export default SummaryForm;