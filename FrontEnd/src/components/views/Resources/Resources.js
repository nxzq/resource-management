import React, { useState, useEffect, useContext, useRef } from 'react'
import axios from '../../../api/index'
import { Container, Row, Col, Button, Table, Progress, Input, Spinner } from 'reactstrap'
import { Link } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import SkillCollapse from '../../resourceTable/SkillCollapse/SkillCollapse'
import FilterModal from '../../resourceTable/FilterModal/FilterModal'
import ResumeModal from '../../resourceTable/ResumeModal/ResumeModal'
import { FilterContext } from '../../../contexts/FilterContext/FilterContext'

export default function Resources() {

  const { neededSkills, setNeededSkill, showSkillMatch, setShowSkillMatch } = useContext(FilterContext)
  const [ search, setSearch ] = useState('')
  const [ top ] = useState(10)
  const [ skip ] = useState(0)
  // eslint-disable-next-line
  const [count, setCount] = useState(null);
  const hideShowSkillMatch = () => setShowSkillMatch(false)
  const toggleShowSkillMatch = () => setShowSkillMatch(!showSkillMatch)
  const [ data, setData ] = useState([])
  const page = useRef(null)

  useEffect(() => {
    axios.get('resources/table',
      { params: {
        top: top,
        skip: skip,
        search: search,
        skills: neededSkills.join()
      }
      })
      .then(res => {
        const resourceData = res.data.results
        setData(resourceData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [ top, skip, search, neededSkills ])

  useEffect(() => {
    if (page !== null) page.current.focus()
  }, [ page ])

  const getSkillMatch = React.useCallback((skills) => {
    let count = 0
    if (skills !== undefined && neededSkills !== undefined) {
      let personalSkills = skills.map(function (value) {
        return value  
      })
      let jobSkills = neededSkills.map(function (value) {
        return value
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
  }, [ neededSkills ])

  const getMatchedSkills = React.useCallback((skills) => {
    let personalSkills = skills.map(value => value)
    let jobSkills = neededSkills.map(value => value)
    let matched = jobSkills.filter(value => personalSkills.includes(value))
    matched = matched.join(', ')
    return matched
  }, [ neededSkills ])

  const getUnmatchedSkills = React.useCallback((skills) => {
    let personalSkills = skills.map(value => value)
    let jobSkills = neededSkills.map(value => value)
    let unmatched = jobSkills.filter(value => !personalSkills.includes(value))
    unmatched = unmatched.join(', ')
    return unmatched
  }, [ neededSkills ])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const tableData = 
    [ ...data ].map((person) => (
      <tr key={person.Id}>
        <td>
          <Link style={{ textDecoration: 'none' }} className="table-data" to={'/profile/' + person.Id}>
            {person.FirstName + ' ' + person.LastName}
          </Link>
        </td>
        <td>{person.Role}</td>
        <td><a style={{ textDecoration: 'none' }} className="table-data" href={'mailto: ' + person.Email}>{person.Email}</a></td>
        {showSkillMatch ?
          <td>
            <div >
              <SkillCollapse matched={getMatchedSkills(person.Skills)} unmatched={getUnmatchedSkills(person.Skills)} key={'SkillMatch' + person.Id}
                content={<Progress tabIndex={0} className="unselectable" value={getSkillMatch(person.Skills)} color="primary">{getSkillMatch(person.Skills)}%</Progress>} />
            </div>
          </td>
          : null}
        <td>
          <ResumeModal key={person.Id} FirstName={person.FirstName} LastName={person.LastName} id={person.Id} />
        </td>
      </tr>
    ))

  return (
    <div tabIndex={-1} ref={page} id="resourcePage">
      <Header name={'Resource Management'} />
      <Container>
        <Row>
          <Col lg="6" md="12">
            <div>
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4" id="resource-search">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button id="button-addon2" tabIndex={-1} type="submit" aria-label="Search" className="btn btn-link text-primary">
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
          <Col lg="3" md="6" xs="6">
            <FilterModal neededSkills={neededSkills} setNeededSkill={setNeededSkill} toggleSkillMatch={toggleShowSkillMatch} notHidden={showSkillMatch} hideSkillMatch={hideShowSkillMatch} id="filter" />
          </Col>
          <Col lg="3" md="6" xs="6">
            <Link style={{ textDecoration: 'none' }} to="/addresource">
              <Button style={{ height: '50px', textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} tabIndex={-1} className="blue-button btn-block shadow-none" id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>
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
                  {tableData}
                </tbody>}
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}