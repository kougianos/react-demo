/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Coded by&nbsp;
            <a href="https://grizzledwizard.eu/kougianos" target="_blank">
                Nikos Kougianos
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
