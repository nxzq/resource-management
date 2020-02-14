import React, { useState } from 'react';
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap';

const SkillPopOver = ({ matched, unmatched, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <div>
      <div onClick={toggle}>
        {content}
      </div>
      <Collapse isOpen={isOpen}>
        <Card className="card">
          <CardHeader className="text-center">Skill Match Breakdown</CardHeader>
          <CardBody>
            {(matched !== '') ? <p><b>Matched Skills:</b> {matched}</p> : ''}
            {(unmatched !== '') ? <p><b>Unmatched Skills:</b> {unmatched}</p> : ''}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default SkillPopOver;
