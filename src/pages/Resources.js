import React from 'react';
import { Container, Row, Button, Table } from 'reactstrap';
import '../styles/ResourcePage.css'
import Header from '../components/Header';

const Resources = () => {
  return (
    <div>
      <Header name={'Resource Management'} />
      <Container>
        <Row>
          <Button id="filter" type="button" className="btn btn-secondary"><i className="fas fa-filter"></i>&nbsp;&nbsp;Filter</Button>
          <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div className="input-group">
              <div className="input-group-prepend">
                <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
              </div>
              <input type="search" id="myInput" placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
              </input>
            </div>
          </div>
          <Button id="addResource" type="button" color="primary"><i className="fas fa-plus"></i>&nbsp;&nbsp;Add
          Resource</Button>
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
                  <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user"
                    aria-hidden="true"></i>
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
            </tbody>    </Table>
        </Row>
      </Container>


      {/* <body>


<div className="container" style="margin-top: 50px">

  <div className="row">
    <div className="col-md-3">
      <h2>Employee List</h2>
    </div>
    <div className="col-md-2">
      <button id="filter" type="button" className="btn btn-secondary"><i className="fas fa-filter"></i>&nbsp;&nbsp;Filter</button>
    </div>

    <div className="col-md-5">
      <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <div className="input-group-prepend">
            <button id="button-addon2" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
          </div>
          <input type="search" id="myInput" placeholder="Find an Employee" aria-describedby="button-addon2" className="form-control border-0 bg-light">
        </div>
      </div>
    </div>
    <div className="col-md-2">
      <a href="employee.html"><button id="addResource" type="button" className="btn btn-primary"><i className="fas fa-plus"></i>&nbsp;&nbsp;Add
          Resource</button></a>
    </div>
  </div>

  <table id="myTable" className="table table-striped">
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
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
          <i data-toggle="tooltip" data-placement="left" title="View Profile" className="far fa-user" aria-hidden="true"></i>
          <span>&nbsp;</span>
          <i data-toggle="tooltip" data-placement="right" title="Create Resume" className="far fa-file-alt"></i>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<br>
<hr>

<script>
  $(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
</script>


</body> */}

    </div>
  );
}

export default Resources;