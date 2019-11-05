import React from 'react';
import { Container, Row, Button, Table } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/ResourcePage.css'
import Header from '../components/Header';
import FilterModal from '../components/resourcetable/FilterModal';

const Resources = () => {
  return (
    <div>
      <Header name={'Resource Management'} />
      <Container>
        <Row>
          <FilterModal id="filter" className="col-xl-1 col-lg-1 col-md-2 col-sm-2 col-xs-2" />
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
          <Table className="table table-striped">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>John</td>
                <td>Anderson</td>
                <td>Sr. Technical Lead</td>
                <td>john.anderson@yash.com</td>
                <td>
                  <Link style={{ textDecoration: 'none', color: '#212529'}} to="/profile"><i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i></Link>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Mary</td>
                <td>Dixon</td>
                <td>Software Developer</td>
                <td>mary.dixon@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Todd</td>
                <td>Dooley</td>
                <td>Data Analyst</td>
                <td>todd.dooley@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Nate</td>
                <td>Johnson</td>
                <td>Software Developer</td>
                <td>nate.johnson@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Travis</td>
                <td>Platt</td>
                <td>Business Analyst</td>
                <td>travis.platt@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Alex</td>
                <td>Towns</td>
                <td>Jr. Software Developer</td>
                <td>alex.towns@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
              <tr>
                <td>Duncan</td>
                <td>Welsh</td>
                <td>Mobile Developer</td>
                <td>duncan.welsh@yash.com</td>
                <td>
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
                  <span>&nbsp;</span>
                  <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}

export default Resources;