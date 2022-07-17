import React, {useState} from 'react';
import {Carousel, Card, Container} from 'react-bootstrap';

const Home = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div style={{position: 'absolute', width: '100%', height: '600px', background: 'black', opacity: '0.4'}}></div>
                    <img style={{width: '100%', height: '600px', objectFit: 'cover'}} className='d-block w-100' src={require('../img/main_photo.jpg')} alt='First slide'/>
                    <Carousel.Caption>
                        <h2>MoleProject</h2>
                        <p>Наша цель - снизить заболеваемость и предотвратить осложения <br/>
                        путём ранней диагностики меланомы.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{position: 'absolute', width: '100%', height: '600px', background: 'black', opacity: '0.4'}}></div>
                    <img style={{width: '100%', height: '600px', objectFit: 'cover'}} className='d-block w-100' src={require('../img/main_ai.jpg')} alt='First slide'/>
                    <Carousel.Caption>
                        <h2>MoleProject</h2>
                        <p>Наша задача — создать нейросеть и обучить её определять <br/>
                        рак кожи по родинке.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <div className='d-flex justify-content-center align-items-center mt-5 flex-column'>
                    <h2 className='text-primary'>Как мы работаем?</h2>
                    <p className='m-auto text-primary' style={{textAlign:'center'}}>Внимание! Данный сайт в настоящее время не подключён к нейросети. 
                    <br/>Вы получите случайные результаты.</p>
                </div>
                <div className='container mt-5 mb-5'>
                    <div className='row g-5'>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', height: '28rem' }}>
                                    <Card.Img variant='top' src={require('../img/hands.jpg')} style={{ width: '100%', height: '200px' }}/>
                                    <Card.Body className='d-flex align-items-center'>
                                        <div>
                                            <Card.Title className='text-primary' style={{textAlign: 'center'}}>Шаг #1</Card.Title>
                                            <Card.Text className='text-primary' style={{textAlign: 'center'}}>После регистрации вы можете прислать нам фотографию своей родинки.</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', height: '28rem' }}>
                                    <Card.Img variant='top' src={require('../img/cloud.jpg')} style={{ width: '100%', height: '200px' }}/>
                                    <Card.Body className='d-flex align-items-center'>
                                        <div>
                                            <Card.Title className='text-primary' style={{textAlign: 'center'}}>Шаг #2</Card.Title>
                                            <Card.Text className='text-primary' style={{textAlign: 'center'}}>Ваша фотография будет сохранена в базе данных.  Обрабатывая из неё фотографии, наша нейросеть учится давать более точные результаты.</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
                                <Card style={{ width: '18rem', height: '28rem' }}>
                                    <Card.Img variant='top' src={require('../img/ai.jpg')}  style={{ width: '100%', height: '200px' }}/>
                                    <Card.Body className='d-flex align-items-center'>
                                        <div>
                                            <Card.Title className='text-primary' style={{textAlign: 'center'}}>Шаг #3</Card.Title>
                                            <Card.Text className='text-primary' style={{textAlign: 'center'}}>Нейросеть обработает фотографию и даст оценку вероятности наличия у вас злокачественной опухоли. На данный момент точность результата составляет 70%.</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div> 
    );
};

export default Home;