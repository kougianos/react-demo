import React from "react";

// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  Progress
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";

function Profile() {
  const [pills, setPills] = React.useState("2");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <h3 className="title">About me</h3>
            <h5 className="description">
              Software Engineer with a B.Sc in Computer Science and a passion
              for developing innovative programs that expedite the efficiency
              and effectiveness of organizational success. Well-versed in
              technology and writing code to create systems that are reliable
              and user-friendly. Confident communicator, strategic thinker, and
              innovative creator to develop software that is customized to meet
              a company’s organizational needs.
            </h5>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h4 className="title text-center">More details</h4>
                <div className="nav-align-center">
                  <Nav
                    className="nav-pills-primary nav-pills-just-icons"
                    pills
                    role="tablist"
                  >
                    <NavItem>
                      <NavLink
                        className={pills === "1" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("1");
			}}
                      >
                        <i className="now-ui-icons education_hat"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "2" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <i className="now-ui-icons business_briefcase-24"></i>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={pills === "3" ? "active" : ""}
                        href="#pablo"
                        onClick={e => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <i className="now-ui-icons design_bullet-list-67"></i>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </Col>
              <TabContent className="gallery w-100 px-2" activeTab={"pills" + pills}>
                <TabPane tabId="pills1">
                  <Col className="ml-auto mr-auto" md="10">
			<Row>
		    		<span class="font-weight-bold text-primary">M.Sc Data Science </span>&nbsp; (2019-2021)
                    	</Row>
                    	<Row>
		    		<span class="font-weight-bold text-primary">B.Sc Computer Science </span>&nbsp; (2011-2018)
                    	</Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills2">
                  <Col className="ml-auto mr-auto" md="10">
		  	<Row>
		    		<span class="font-weight-bold text-primary">Software Engineer </span>&nbsp;@ OTE-COSMOTE (July 2019-today)
                    	</Row>
                    	<Row>
		    		<span class="font-weight-bold text-primary">Full Stack Developer </span>&nbsp;@ Figame (November 2018-May 2019)
                    	</Row>
                  </Col>
                </TabPane>
                <TabPane tabId="pills3">
                  <Col className="ml-auto mr-auto" md="10">
                    <Row className="collections">
			<div className="progress-container w-100 px-3">
				<h3 className="">Skills</h3>
			</div>
		    	<div className="progress-container progress-primary w-100 px-3">
				<span className="progress-badge">PHP</span>
				<Progress max="100" value="80">
				<span className="progress-value">80%</span>
				</Progress>
			</div>
			<div className="progress-container progress-primary w-100 px-3">
				<span className="progress-badge">Jquery</span>
				<Progress max="100" value="75">
				<span className="progress-value">75%</span>
				</Progress>
			</div>
			<div className="progress-container progress-primary w-100 px-3">
				<span className="progress-badge">React</span>
				<Progress max="100" value="30">
				<span className="progress-value">30%</span>
				</Progress>
			</div>
			<div className="progress-container progress-primary w-100 px-3">
				<span className="progress-badge">Bootstrap4</span>
				<Progress max="100" value="90">
				<span className="progress-value">90%</span>
				</Progress>
			</div>
                    </Row>
                  </Col>
                </TabPane>
              </TabContent>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default Profile;
