import React, { useState } from 'react';
import {Container, Card, Form, Button} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import {sendPhoto} from '../http/photoAPI';

const Photo = () => {
    const [photo, setPhoto] = useState(null);
    const [result, setResult] = useState('');
    const [hideResult, setHideResult] = useState(true);

    const selectedFile = e => {
        setPhoto(e.target.files[0]);
    }

    const preparePhotoForSending = () =>{
        if(!photo) return alert('Вы должны выбрать фото.');
        let userId = jwt_decode(localStorage.getItem('token')).id;
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('photo', photo);
        sendPhoto(formData)
        .then(result => {alert('Фото успешно отправлено.'); setResult(result); setHideResult(false);})
        .catch(() => alert('Ошибка при отправке фото.'));
    }

    return (
        <Container className='d-flex justify-content-center align-items-center' style={{height: window.innerHeight - 104}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto text-primary'>Выберите фото родинки</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control className='mt-3' placeholder='Выберите фото' type='file' onChange={selectedFile} accept='.png,.jpg,.jpeg'/>
                    <Button variant={'outline-primary'} className='mt-3' onClick={preparePhotoForSending}>Отправить фото</Button>
                </Form>
                {result < 30? 
                            <div className='mt-3'>
                                <h2 className='m-auto text-primary mt-4 text-success' style={{textAlign:'center'}} hidden={hideResult}>{`Результат: ${result}%`}</h2>
                                <p className='m-auto text-primary text-success' style={{textAlign:'center'}} hidden={hideResult}>Низкая вероятность злокачественной опухоли.</p>
                            </div>
                            
                        : result < 60? 
                            <div className='mt-3'>
                                <h2 className='m-auto text-primary mt-4 text-warning' style={{textAlign:'center'}} hidden={hideResult}>{`Результат: ${result}%`}</h2>
                                <p className='m-auto text-primary text-warning' style={{textAlign:'center'}} hidden={hideResult}>Существует вероятность злокачественной опухоли. Возможно, вы выбрали неудачную фотографию.</p>
                            </div>
                        : 
                            <div className='mt-3'>
                                <h2 className='m-auto text-primary mt-4 text-danger' style={{textAlign:'center'}} hidden={hideResult}>{`Результат: ${result}%`}</h2>
                                <p className='m-auto text-primary text-danger' style={{textAlign:'center'}} hidden={hideResult}>Высокая вероятность злокачественной опухоли. Стоит обратиться к врачу.</p>
                            </div>
                }  
            </Card>   
        </Container>
    );
};

export default Photo;