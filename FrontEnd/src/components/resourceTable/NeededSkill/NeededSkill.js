import React from 'react';
import { Row, Badge, Button } from 'reactstrap';

export default React.memo(function NeededSkill({ skills, removeSkill }) {

    const style = {
        minHeight: '15px',
        marginRight: '5px',
        marginLeft: '5px',
        marginTop: '5px',
        marginBottom: '5px'
    };
    
    const badges = (skills) => {
        let badges = [];
        if (skills.length !== 0) {
            badges = skills.map((skill) => (
            <Button style={style} key={skill} className="shadow-none" color="secondary" outline>
                <Badge onClick={() => { removeSkill(skill); }} color="secondary">X</Badge> {skill}
            </Button>
        ))}
        return badges;
    };

    return (
        <Row className="col-md-12">
            {badges(skills)}
        </Row>
    );
});