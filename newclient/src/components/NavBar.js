import React, { useContext } from 'react';
import {Navbar, Container, Button, Nav} from 'react-bootstrap';
import { Context } from '../index';
import {HOME_ROUTE, PHOTO_ROUTE, LOGIN_ROUTE} from '../routes/routerConsts';
import {observer} from 'mobx-react-lite';
import {NavLink, useHistory} from 'react-router-dom';

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const history = useHistory();
    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
    }

    return (
        <Navbar bg='primary'>
            <Container>
                <NavLink className='text-white' style={{textDecoration: 'none'}} to={HOME_ROUTE}>MoleSite</NavLink>
                {user.isAuth ?
                    <Nav>
                        <Button style={{margin: '0 20px 0 0'}} className='btn btn-primary' onClick={() => history.push(PHOTO_ROUTE)}>Прислать фото</Button>
                        <Button className='btn btn-primary' onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav>
                        <Button className='btn btn-primary' onClick={() => history.push(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
});

export default NavBar;