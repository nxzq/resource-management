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
    const badges = (skills) => {
        let badges = []
        if (skills.length === 0) {}
        else badges = skills.sort((a, b) => a !== b ? a > b ? 1 : -1 : 0).map((skill) => (
                <Button onClick={() => {removeSkill(skill)}} style={style} key={skill} className="shadow-none">
                    <b>X </b> {skill}
                </Button>
        ))
        return badges
    }
    return (
        <Row className="col-md-12">
            {badges(skills)}
        </Row>
    )
}

export default Skill