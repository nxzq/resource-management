import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Button, Table, Progress, Input, Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import SkillCollapse from '../components/resourcetable/SkillCollapse';
import FilterModal from '../components/resourcetable/FilterModal';

const Resources = () => {

  const [neededSkills, setNeededSkill] = useState([]);
  const [search, setSearch] = useState('');
  const [showSkillMatch, setShowSkillMatch] = useState(false);
  const hideShowSkillMatch = () => setShowSkillMatch(false);
  const toggleShowSkillMatch = () => setShowSkillMatch(!showSkillMatch);
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:5000/api/resources/table`)
      .then(res => {
        const resourceData = res.data;
        setData(resourceData)
      })
  }, [])

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

  const Search = () => {
    let rawData = data.filter(resource => resource.Role.toLowerCase().includes(search.toLowerCase())
      || resource.FirstName.toLowerCase().includes(search.toLowerCase())
      || resource.LastName.toLowerCase().includes(search.toLowerCase()))
    return rawData
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const tableData = () => {
    let rawData = (search === '' ? [...data] : Search())
    rawData = rawData.sort((a, b) => a.FirstName !== b.FirstName ? a.FirstName > b.FirstName ? 1 : -1 : 0)
    let tableData = rawData.sort((a, b) => (getSkillMatch(a.Skills) > getSkillMatch(b.Skills)) ? -1 : 1).map((person) => (
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
          : null}
        <td>
          <Link style={{ textDecoration: 'none', color: '#212529' }} to={"/profile/" + person.Id}><i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
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
          <FilterModal neededSkills={neededSkills} setNeededSkill={setNeededSkill} toggleSkillMatch={toggleShowSkillMatch} notHidden={showSkillMatch} hideSkillMatch={hideShowSkillMatch} id="filter" className="col-xl-1 col-lg-1 col-md-4 col-sm-6 col-xs-6" />
          <div className="rounded-input col-xl-7 col-lg-7 col-md-8 col-sm-6 col-xs-6">
            <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i style={{ color: '#007bff' }} className="fa fa-search"></i></button>
                </div>
                <Input style={{ marginRight: '25px', marginLeft: '15px' }} type="search" id="myInput" onChange={handleSearch} value={search} placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
                </Input>
              </div>
            </div>
          </div>
          <Link style={{ textDecoration: 'none' }} to="/addjob" className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-6">
            <Button style={{ height: '50px' }} className="btn-block shadow-none" id="addJob" type="button" color="primary"><i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Job
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/addresource" className="col-xl-2 col-lg-2 col-md-6 col-sm-6 col-xs-6">
            <Button style={{ height: '50px', textDecoration: 'none' }} className="btn-block shadow-none" id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>
              &nbsp;&nbsp;Add Resource
            </Button>
          </Link>
        </Row>
        <Row>
          <Table striped>
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
        </Row>
      </Container>
    </div>
  );
}

export default Resources;