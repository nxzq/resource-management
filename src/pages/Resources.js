import React, { useState } from 'react';
import { Container, Row, Button, Table, Progress } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SkillCollapse from '../components/resourcetable/SkillCollapse';
import FilterModal from '../components/resourcetable/FilterModal';

const Resources = () => {

  const [neededSkills, setNeededSkill] = useState([]);
  const [showSkillMatch, setShowSkillMatch] = useState(false);
  const hideShowSkillMatch = () => setShowSkillMatch(false);
  const toggleShowSkillMatch = () => setShowSkillMatch(!showSkillMatch);
  const [data] = useState(
    [
      {
        "Id": "1",
        "FirstName": "John",
        "LastName": "Anderson",
        "Role": "Sr. Technical Lead",
        "Email": "john.anderson@yash.com",
        "Skills": ["Project Management", "AWS",]
      }, {
        "Id": "2",
        "FirstName": "Tim",
        "LastName": "Johnson",
        "Role": "Jr. Software Developer",
        "Email": "tim.johnson@yash.com",
        "Skills": ["C#", ".NET Framework", "PowerApps", "ASP.NET", "React", "Power BI", "Azure", "Git"]
      }, {
        "Id": "3",
        "FirstName": "John",
        "LastName": "Jackson",
        "Role": "Jr. Software Developer",
        "Email": "john.jackson@yash.com",
        "Skills": ["Java", "HTML", "Spring Boot", "CSS", "Angular"]
      }, {
        "Id": "4",
        "FirstName": "Travis",
        "LastName": "Platt",
        "Role": "Business Analyst",
        "Email": "travis.platt@yash.com",
        "Skills": ["Software Analysis", "Requirement Gathering"]
      }, {
        "Id": "5",
        "FirstName": "Mary",
        "LastName": "Dixon",
        "Role": "Software Developer",
        "Email": "mary.dixon@yash.com",
        "Skills": ["React", "HTML", "JavaScript", "CSS"]
      }, {
        "Id": "6",
        "FirstName": "Todd",
        "LastName": "Dooley",
        "Role": "Data Analyst",
        "Email": "todd.dooley@yash.com",
        "Skills": ["SQL", "MongoDB", "NoSQL", "Python", "Tableau"]
      }, {
        "Id": "7",
        "FirstName": "Brendan",
        "LastName": "Legett",
        "Role": "Jr. Software Developer",
        "Email": "brendan.legett@yash.com",
        "Skills": ["java", "aws", "html", "css", "javascript", "git", "spring", "react", "angular", "object-oriented programming", "bootstrap"]
      }, {
        "Id": "8",
        "FirstName": "Andre",
        "LastName": "Prawira",
        "Role": "Jr. Software Developer",
        "Email": "andre.prawira@gmail.com",
        "Skills": ["python", "java", "git", "aws", "html", "cobol", "springboot"]
      }, {
        "Id": "9",
        "FirstName": "Matthew",
        "LastName": "Voels",
        "Role": "Jr. Software Developer",
        "Email": "matthew.voels@yash.com",
        "Skills": ["Python", "Java", "AWS", "Javascript", "HTML", "Tensorflow", "Spring Boot", "Spring 4", "React", "Angular"]
      }, {
        "Id": "10",
        "FirstName": "Mohammed",
        "LastName": "Aldalooj",
        "Role": "Jr. Software Developer",
        "Email": "mohammed.aldalooj@yash.com",
        "Skills":
          ["Java", "c#", "azure", "TypeScript", "Python", "HTML", "CSS", "SQL", "React"]
      }
    ])

  const getSkillMatch = (skills) => {
    let count = 0
    let personalSkills = skills.map(function (value) {
      return value.toLowerCase();
    })
    let jobSkills = neededSkills.map(function (value) {
      return value.toLowerCase();
    })
    for (let i in personalSkills) {
      if (jobSkills.indexOf(personalSkills[i]) > -1) {
        count++
      }
    }
    let num = (Math.floor((count / jobSkills.length) * 100))
    if (neededSkills.length === 0) return 0
    else return num
  }

  const getMatchedSkills = (skills) => {
    let personalSkills = skills.map(value => value.toLowerCase())
    let jobSkills = neededSkills.map(value => value.toLowerCase())
    let matched = jobSkills.filter(value => personalSkills.includes(value))
    matched = matched.map(value => value.charAt(0).toUpperCase() + value.substring(1))
    matched = matched.join(', ')
    return matched
  }

  const getUnmatchedSkills = (skills) => {
    let personalSkills = skills.map(value => value.toLowerCase())
    let jobSkills = neededSkills.map(value => value.toLowerCase())
    let unmatched = jobSkills.filter(value => !personalSkills.includes(value))
    unmatched = unmatched.map(value => value.charAt(0).toUpperCase() + value.substring(1))
    unmatched = unmatched.join(', ')
    return unmatched
  }

  const tableData = () => {
    let tableData = data.sort((a, b) => (getSkillMatch(a.Skills) > getSkillMatch(b.Skills)) ? -1 : 1).map((person) => (
      <tr key={person.Id}>
        <td>{person.FirstName + ' ' + person.LastName}</td>
        <td>{person.Role}</td>
        <td>{person.Email}</td>
        {showSkillMatch ?
          <td>
            <div>
              <SkillCollapse matched={getMatchedSkills(person.Skills)} unmatched={getUnmatchedSkills(person.Skills)} key={'SkillMatch' + person.Id}
                content={<Progress className="unselectable" value={getSkillMatch(person.Skills)} color="primary">{getSkillMatch(person.Skills)}%</Progress>} />
            </div>
          </td>
          : ''}
        <td>
          <Link style={{ textDecoration: 'none', color: '#212529' }} to="/profile"><i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
            aria-hidden="true"></i></Link>
          <span>&nbsp;&nbsp;</span>
          <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
        </td>
      </tr>
    ))
    return tableData
  }

  return (
    <div>
      <Header name={'Resource Management'} />
      <Container>
        <Row>
          <FilterModal neededSkills={neededSkills} filterTable={tableData} setNeededSkill={setNeededSkill} toggleSkillMatch={toggleShowSkillMatch} notHidden={showSkillMatch} hideSkillMatch={hideShowSkillMatch} id="filter" className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2" />
          <div className="col-xl-7 col-lg-7 col-md-5 col-sm-5 col-xs-5">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4 form-inline">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i style={{color: '#007bff'}} className="fa fa-search"></i></button>
                </div>
                <input style={{ marginRight: '15px', marginLeft: '15px' }} type="search" id="myInput" placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
                </input>
              </div>
            </div>
          </div>
          <Link style={{ textDecoration: 'none' }} to="/addjob" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
            <Button style={{ height: '50px', marginRight: 0 }} className="btn-block shadow-none" id="addJob" type="button" color="primary"><i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Job
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/addresource" className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3">
            <Button style={{ height: '50px', marginRight: 0, textDecoration: 'none' }} className="btn-block shadow-none" id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Resource
            </Button>
          </Link>
        </Row>
        <Row>
          <Table striped className="table col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
              {tableData()}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;