import React, { useState } from 'react';
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap';

export default React.memo(function SkillPopOver({ matched, unmatched, content }) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleEnter = (e) => {
    if (e.keyCode === 13) toggle()
}
  
  return (
    <div>
      <div onClick={toggle} onKeyDown={handleEnter}>
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
});
