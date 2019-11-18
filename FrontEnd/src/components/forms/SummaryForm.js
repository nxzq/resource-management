import React from 'react';
import { Label, Input, FormGroup } from 'reactstrap';


const SummaryForm = ({ SummaryText }) => {
    return (
        <div>
            <FormGroup>
                <Label for="summaryText">Summary</Label>
                <Input type="textarea" name="summaryText" id="summaryText" placeholder="Summary (Optional)" value={SummaryText} />
            </FormGroup>
            <hr />
        </div>
    )
}

export default SummaryForm;