import React, {useState, useContext, useEffect} from 'react';
import {Form, Container, Card, Button} from 'react-bootstrap';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, HOME_ROUTE} from '../routes/routerConsts';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import {observer} from 'mobx-react-lite';
import {Context} from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('Email не может быть пустым.');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым.');
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [formValid, setFormValid] = useState(false);

    const getAccess = async () => {
        try {
            if (isLogin) await login(email, password);
            else await registration(email, password);
            user.setUser(user);
            user.setIsAuth(true);
            history.push(HOME_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    useEffect(() => {
        if(emailError || passwordError) setFormValid(false);
        else setFormValid(true);
    }, [emailError, passwordError]);

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const regex = /^.+@gmail\.com$/;
        if(!regex.test(email)) setEmailError('Некорректный email.');
        else setEmailError('');
    }
    
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if(password.length < 6) setPasswordError('Пароль должен быть больше 6 символов.');
        else if (password.length > 20) setPasswordError('Пароль должен быть меньше 20 символов.');
        else setPasswordError('');
    }
    
    const blurHandler = (event) => {
        if(event.target.name === 'email') setEmailValid(true);
        if(event.target.name === 'password') setPasswordValid(true);
    };

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 104}}>
            <Card className='p-5' style={{width: 600}}>
                <h2 className='m-auto text-primary'>{isLogin ? 'Вход' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>

                    {(emailValid && emailError) && <div className='mt-3 text-primary'>{emailError}</div>}
                    <Form.Control 
                        name='email'
                        className='mt-2'
                        placeholder='Email'
                        value={email}
                        onChange={e => emailHandler(e)}
                        onBlur={e => blurHandler(e)}/>

                    {(passwordValid && passwordError) && <div className='mt-3 text-primary'>{passwordError}</div>}
                    <Form.Control  
                        name='password'
                        className='mt-2'
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={e => passwordHandler(e)}
                        onBlur={e => blurHandler(e)}/>

                    <Button disabled={!formValid} className='mt-3' variant={'outline-primary'} onClick={getAccess}>{isLogin ? 'Войти' : 'Регистрация'}</Button>
                        {isLogin ?
                            <div className='mt-3'>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink></div>
                            :
                            <div className='mt-3'>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                        }
                </Form>
            </Card>
        </Container>
    )
});

export default Auth;