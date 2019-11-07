import React, { useState } from 'react';
import { Container, Row, Button, Table, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/ResourcePage.css'
import Header from '../components/Header';
import FilterModal from '../components/resourcetable/FilterModal';

const Resources = () => {

  const [neededSkills, setNeededSkill] = useState([])
  const [showSkillMatch, setShowSkillMatch] = useState(false);
  const hideShowSkillMatch = () => setShowSkillMatch(false);
  const toggleShowSkillMatch = () => setShowSkillMatch(!showSkillMatch);
  const [data, setData] = useState(
    [
      {
        "FirstName": "John",
        "LastName": "Anderson",
        "Role": "Sr. Technical Lead",
        "Email": "john.anderson@yash.com",
        "Skills": ["Project Management"]
      }, {
        "FirstName": "Tim",
        "LastName": "Johnson",
        "Role": "Jr. Software Developer",
        "Email": "tim.johnson@yash.com",
        "Skills": ["C#", ".NET Framework", "PowerApps", "ASP.NET", "React"]
      }, {
        "FirstName": "John",
        "LastName": "Jackson",
        "Role": "Jr. Software Developer",
        "Email": "john.jackson@yash.com",
        "Skills": ["Java", "HTML", "Spring Boot", "CSS", "Angular"]
      }, {
        "FirstName": "Travis",
        "LastName": "Platt",
        "Role": "Business Analyst",
        "Email": "travis.platt@yash.com",
        "Skills": ["Software Analysis", "Requirement Gathering"]
      }, {
        "FirstName": "Mary",
        "LastName": "Dixon",
        "Role": "Software Developer",
        "Email": "mary.dixon@yash.com",
        "Skills": ["React", "HTML", "JavaScript", "CSS"]
      }, {
        "FirstName": "Todd",
        "LastName": "Dooley",
        "Role": "Data Analyst",
        "Email": "todd.dooley@yash.com",
        "Skills": ["SQL", "MongoDB", "NoSQL", "Python"]
      }
    ])

  const getSkillMatch = (skills) => {
    let count = 0
    let personalSkills = skills.map(function(value) {
      return value.toLowerCase();
    })
    let jobSkills = neededSkills.map(function(value) {
      return value.toLowerCase();
    })
    for (let i in personalSkills) {
      if (jobSkills.indexOf(personalSkills[i]) > -1) {
        count++
      }
    }
    return Math.floor((count / jobSkills.length) * 100)
  }

  const tableDate = data.sort((a, b) => (getSkillMatch(a.Skills) > getSkillMatch(b.Skills)) ? -1 : 1).map((person) => (
    <tr key={person.Email}>
      <td>{person.FirstName + ' ' + person.LastName}</td>
      <td>{person.Role}</td>
      <td>{person.Email}</td>
      {showSkillMatch ?
        <td>
          <div className="text-center">{getSkillMatch(person.Skills)}%</div>
          <Progress value={getSkillMatch(person.Skills)} color="success" />
        </td>
        : ''}
      <td>
        <Link style={{ textDecoration: 'none', color: '#212529' }} to="/profile"><i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
          aria-hidden="true"></i></Link>
        <span>&nbsp;</span>
        <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
      </td>
    </tr>
  ))

  return (
    <div>
      <Header name={'Resource Management'} />
      <Container>
        <Row>
          <FilterModal neededSkills={neededSkills} setNeededSkill={setNeededSkill} toggleSkillMatch={toggleShowSkillMatch} notHidden={showSkillMatch} hideSkillMatch={hideShowSkillMatch} id="filter" className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2" />
          <div className="col-xl-9 col-lg-9 col-md-7 col-sm-7 col-xs-7">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4" style={{ marginRight: '15px', marginLeft: '15px' }}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                </div>
                <input type="search" id="myInput" placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
                </input>
              </div>
            </div>
          </div>
          <Link to="/addresource" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
            <Button style={{ height: '50px', marginRight: 0 }} className="shadow-none" id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Resource
            </Button>
          </Link>
        </Row>
        <Row>
          <Table className="table table-striped col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Email</th>
                {showSkillMatch ? <th>Skill Match</th> : ''}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tableDate}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;