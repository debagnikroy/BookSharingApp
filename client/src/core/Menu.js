import React, { Fragment } from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
const Menu = (props) => {

    const isActive = (history, path) => {
        if (history.location.pathname === path)
            return { color: '#ff9900' }
        else
            return { color: '#ffffff' }

    }

    const nav = () => {
        return (
            <Navbar bg="dark" expand="sm">
                <Navbar.Brand href="#home">bookApp</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link className="nav-link" to="/" style={isActive(props.history, "/")}>Dashboard</Link></Nav.Link>
                        <Nav.Link >
                            <Link className="nav-link" to="/transferMarket" style={isActive(props.history, "/transferMarket")}>Transfer Market</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nav-link" to="/user/addBook" style={isActive(props.history, "/user/addBook")}>
                                Add Book
                                {/* <sub><small className="cart-badge">{itemTotal()}</small></sub> */}
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="nav-link" to="/" style={isActive(props.history, "/")}>
                                Notification{" "}
                                {/* <sub><small className="cart-badge">{itemTotal()}</small></sub> */}
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            {isAuthenticated() && (
                                <li className="nav-item">
                                    <span className="nav-link" onClick={() => {
                                        signout(() => {
                                            props.history.push("/");
                                        });
                                    }}
                                        style={{ cursor: 'pointer', color: '#ffffff' }}>
                                        Signout
                    </span>
                                </li>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }

    return (
        <React.Fragment>
            {nav()}
        </React.Fragment>
        
    )

}

export default withRouter(Menu);
