import {Container, Nav, Navbar} from "react-bootstrap";
import {navLinks} from "../data/index.js";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

const NavBarComponent = () => {
    const [changeColor, setChangeColor] = useState(false)
    const [expanded, setExpanded] = useState(false)
    const changeBackgroundColor = () => {
        setChangeColor(window.scrollY > 10)
    }

    useEffect(() => {
        changeBackgroundColor()
        window.addEventListener("scroll", changeBackgroundColor)
    })
    return <div>
        <Navbar expand="lg" className={changeColor ? "color-active": ""} expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" className={"fs-3 fw-bold"}>Ngoding ReactJS.</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto text-center">
                        {navLinks.map((link) => {
                            return (<div className={"nav-link"} key={link.id}>
                                <NavLink to={link.path}
                                         className={({
                                                         isActive, isPending
                                                     }) => (isPending ? "pending" : isActive ? "active" : "")} end
                                onClick={() => setExpanded(false)}
                                >{link.text}</NavLink>
                            </div>)
                        })}
                    </Nav>

                    <div className={"text-center"}>
                        <button className={"btn btn-outline-danger rounded-1"}>Gabung Kelas</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
}
export default NavBarComponent