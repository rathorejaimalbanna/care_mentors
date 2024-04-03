import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import styles from '../App.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactDetails from "./contactDetails";

function Header() {
  return (
    <>
      <Navbar className="bg-body-tertiary" style={{height:'15vh',fontSize:'1.2rem'}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/download.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <h3 className="d-inline-block" style={{marginLeft:'10px'}}>Care Mentors </h3>
          </Navbar.Brand>
          <div><a href="tel:+919899992467" className={styles.tle}>
            <FontAwesomeIcon icon={faPhone}  style={{marginRight:'5px',color:'orange'}}/>
            9899992467
            </a>
          </div>
        </Container>
      </Navbar>
      <ContactDetails/>
    </>
  );
}

export default Header;
