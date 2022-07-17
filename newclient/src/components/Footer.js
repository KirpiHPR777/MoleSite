import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import {HOME_ROUTE} from '../routes/routerConsts';

const Footer = () => {
    return (
        <Navbar bg='primary' variant='dark' style={{height: '52px'}}>
            <Container className='d-flex justify-content-center'>
                <Nav>
                    <NavLink className='text-white' style={{textDecoration: 'none'}} to={HOME_ROUTE}>© {new Date().getFullYear()} Copyright: MoleSite</NavLink>
                </Nav>
            </Container>
        </Navbar>   
    )
};

export default Footer;