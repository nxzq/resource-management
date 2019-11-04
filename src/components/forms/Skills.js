import React from 'react';
import { Row, Button } from 'reactstrap';

const Skill = ({ skills, removeSkill }) => {
    const style = {
        color: 'black',
        minHeight: '10px',
        marginRight: '10px',
        marginLeft: '10px',
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: 'lightGrey'
    }
    return (
        <Row className="col-md-12">
            {skills.map((skill) => (
                <Button onClick={() => {removeSkill(skill)}} style={style} key={skill}>
                    <b>X </b> {skill}
                </Button>
            ))}
        </Row>
    )
}

export default Skill