import React from 'react';
import {Form, Button, Container, Row, Col} from 'react-bootstrap';

export default function Prayer(){
    return(
        <div className='prayer'>


                <div className='prayer-form'>
                    <Container>
                        <Row>
                            <Col md={12} xl={12} lg={12} sm={12}>
                                <Form>
                                    <p className='form-text'>Калі вы хочаце, каб мы памаліліся ў вашай інтэнцыі, напішыце нам.<br/>
                                        Вашы просьбы не будуць апублікаваны ў інтэрнэце.</p>
                                    <Form.Group className="mb-3">
                                        <Form.Control className='prayer-n' type="name" placeholder="Введите имя" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                        <Form.Control as="textarea" className='prayer-m' type="text" placeholder="Введите сообщение..." />
                                    </Form.Group>
                                    <Button className='btn-send' type="submit">
                                        Адправіць
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>




        </div>
    )
}