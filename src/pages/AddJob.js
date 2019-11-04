import React from 'react';
import { Form, FormGroup, FormText, Label, Input } from 'reactstrap';
import Header from '../components/Header';

const AddJob = () => {
  return (
    <div>
      <Header name={'Add Job'} />
      <Form>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      </Form>
    </div>
  );
}

export default AddJob;