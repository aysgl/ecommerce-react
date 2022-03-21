import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Navbar, NavbarBrand, NavItem, Row, } from 'reactstrap';
import LoginTest from './LoginTest';
import Basket from './module/Basket';
import Login from './module/Login';
import Searchbar from './module/Searchbar';

export default function Header() {
    const [logo, setLogo] = useState(0);
    const [total, setTotal] = useState(0);

    const icons = [
        <i className="bi bi-handbag text-primary small"></i>,
        <i className="bi bi-stopwatch text-success small"></i>,
        <i className="bi bi-cart text-warning small"></i>,
        <i className="bi bi-gem text-primary small"></i>,
        <i className="bi bi-basket text-success small"></i>,
        <i className="bi bi-mouse2 text-warning small"></i>,
        <i className="bi bi-alarm text-primary small"></i>,
        <i className="bi bi-bag-heart text-success small"></i>,
        <i className="bi bi-camera-reels text-warning small"></i>,
        <i className="bi bi-music-note text-primary small"></i>,
        <i className="bi bi-palette text-success small"></i>,
        <i className="bi bi-printer text-warning small"></i>,
    ];

    useEffect(() => {
        if (window.Snipcart) {
            setTotal(Snipcart.store.getState().cart.total);
        }
        const interval = setInterval(() => {
            setLogo(Math.floor(Math.random() * icons.length));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Navbar
                expand="lg"
                light
            >
                <Container>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <Col lg={3}>
                            <div className='d-flex justify-content-between '>
                                <NavbarBrand href="/">
                                    <div className='h3 mb-0 text-dark logo'>
                                        <span className='me-2'>candyshop</span>
                                        <i className="one bi bi-handbag small"></i>
                                        <i className="two bi bi-stopwatch small"></i>
                                        <i className="three bi bi-cart  small"></i>
                                    </div>
                                </NavbarBrand>
                                <div className='d-lg-none'>
                                    <Login />
                                    <Basket />
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className='d-lg-none mt-2'>
                                <Searchbar width="100%" />
                            </div>
                            <div className='d-none d-lg-block'>
                                <Nav
                                    navbar
                                    className='d-flex justify-content-end ms-auto'
                                >
                                    <NavItem className='ms-lg-2 ms-2'>
                                        <Searchbar width="375px" />
                                    </NavItem>
                                    <NavItem className='ms-lg-2 ms-2'>
                                        <Login title="login" />
                                    </NavItem>
                                    <NavItem className='ms-lg-2 ms-2'>
                                        <Basket title="basket" />
                                    </NavItem>
                                </Nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <div className='container-fluid'
                style={{ height: "2px", overflow: "hidden" }}
            >
                <Row>
                    <Col xs={3} className='border border-primary border-2'></Col>
                    <Col xs={7} className='border border-success border-2'></Col>
                    <Col xs={2} className='border border-warning border-2'></Col>
                </Row>
            </div>
        </>
    )
}
