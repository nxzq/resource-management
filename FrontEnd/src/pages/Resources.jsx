import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Table, Progress, Input, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SkillCollapse from '../components/resourcetable/SkillCollapse';
import FilterModal from '../components/resourcetable/FilterModal';
import ResumeModal from '../components/resourcetable/ResumeModal';

const Resources = () => {

  const [neededSkills, setNeededSkill] = useState([]);
  const [search, setSearch] = useState('');
  const [top] = useState(10)
  const [skip] = useState(0)
  const [showSkillMatch, setShowSkillMatch] = useState(false);
  const hideShowSkillMatch = () => setShowSkillMatch(false);
  const toggleShowSkillMatch = () => setShowSkillMatch(!showSkillMatch);
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/resources/table`,
    {params: {
      top: top,
      skip: skip,
      search: search,
      skills: neededSkills.join()
    }
    })
      .then(res => {
        const resourceData = res.data.results;
        setData(resourceData)
      })
      .catch(error => {
          console.log(error)
      })
  }, [top, skip, search, neededSkills])

  const getSkillMatch = (skills) => {
    let count = 0
    if (skills !== undefined && neededSkills !== undefined) {
    let personalSkills = skills.map(function (value) {
      return value;  
    })
    let jobSkills = neededSkills.map(function (value) {
      return value;
    })
    for (let i in personalSkills) {
      if (jobSkills.indexOf(personalSkills[i]) > -1) {
        count++
      }
    }
    let num = (Math.floor((count / jobSkills.length) * 100))
    if (neededSkills.length === 0) return 0
    else return num
    } else return 0
  }

  const getMatchedSkills = (skills) => {
    let personalSkills = skills.map(value => value)
    let jobSkills = neededSkills.map(value => value)
    let matched = jobSkills.filter(value => personalSkills.includes(value))
    matched = matched.join(', ')
    return matched
  }

  const getUnmatchedSkills = (skills) => {
    let personalSkills = skills.map(value => value)
    let jobSkills = neededSkills.map(value => value)
    let unmatched = jobSkills.filter(value => !personalSkills.includes(value))
    unmatched = unmatched.join(', ')
    return unmatched
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const tableData = () => {
    let tableData = [...data].map((person) => (
      <tr key={person.Id}>
        <td>
          <Link style={{ textDecoration: 'none' }} className="table-data" to={"/profile/" + person.Id}>
            {person.FirstName + ' ' + person.LastName}
          </Link>
        </td>
        <td>{person.Role}</td>
        <td><a style={{ textDecoration: 'none' }} className="table-data" href={'mailto: ' + person.Email}>{person.Email}</a></td>
        {showSkillMatch ?
          <td>
            <div>
              <SkillCollapse matched={getMatchedSkills(person.Skills)} unmatched={getUnmatchedSkills(person.Skills)} key={'SkillMatch' + person.Id}
                content={<Progress className="unselectable" value={getSkillMatch(person.Skills)} color="primary">{getSkillMatch(person.Skills)}%</Progress>} />
            </div>
          </td>
          : null}
        <td>
          <ResumeModal key={person.Id} FirstName={person.FirstName} LastName={person.LastName} id={person.Id} />
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
          <Col md="2">
            <FilterModal neededSkills={neededSkills} setNeededSkill={setNeededSkill} toggleSkillMatch={toggleShowSkillMatch} notHidden={showSkillMatch} hideSkillMatch={hideShowSkillMatch} id="filter" />
          </Col>
          <Col lg="5" md="10">
            <div>
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button id="button-addon2" type="submit" aria-label="Search" className="btn btn-link text-primary">
                      <i style={{ color: '#005ba1' }} aria-hidden="true" className="fa fa-search"></i>
                    </button>
                  </div>
                  <label className="sr-only" htmlFor="myInput">Search</label>
                  <Input style={{ marginRight: '25px', marginLeft: '15px', marginTop: '5px', marginBottom: '5px' }} type="search" id="myInput" onChange={handleSearch} value={search} placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
                  </Input>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="2" md="6">
            <Link style={{ textDecoration: 'none' }} to="/addjob">
              <Button style={{ height: '50px', textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} className="blue-button btn-block shadow-none" id="addJob" type="button" color="primary"><i className="fas fa-plus"></i>
                &nbsp;&nbsp;Add Job
              </Button>
            </Link>
          </Col>
          <Col lg="3" md="6">
            <Link style={{ textDecoration: 'none' }} to="/addresource">
              <Button style={{ height: '50px', textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} className="blue-button btn-block shadow-none" id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>
                &nbsp;&nbsp;Add Resource
              </Button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table striped borderless responsive>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Email</th>
                  {showSkillMatch ? <th>Skill Match</th> : null}
                  <th>Action</th>
                </tr>
              </thead>
              {data[0] === undefined ?
                <tbody>
                  <tr><td colSpan="10" className="text-center"><Spinner color="primary" /></td></tr>
                </tbody>
                :
                <tbody>
                  {tableData()}
                </tbody>}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;