import React, { useState } from 'react';
import { Popover, PopoverHeader, PopoverBody } from 'reactstrap';

const SkillPopOver = ({ target, matched, unmatched, id, content }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <div>
      <div id={id}>
        {content}
      </div>
      <Popover placement="bottom" isOpen={popoverOpen} target={target} toggle={toggle}>
        <PopoverHeader className="text-center">Skill Match Breakdown</PopoverHeader>
        <PopoverBody>
          <p><b>Matched Skills:</b> {matched}</p>
          <p><b>Unmatched Skills:</b> {unmatched}</p>
        </PopoverBody>
      </Popover>
    </div>
  );
}

export default SkillPopOver;
