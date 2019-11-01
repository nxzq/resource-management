import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';


const SummaryForm = () => {
    return (
        <div>
            <FormGroup>
                <Label for="summaryText">Summary</Label>
                <Input type="textarea" name="summaryText" id="summaryText" placeholder="Summary" />
            </FormGroup>
            <hr />
        </div>
    )
}

export default SummaryForm;