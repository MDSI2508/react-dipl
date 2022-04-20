import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import img_6 from "../../images/img_6.png";
import img_7 from "../../images/img_7.png";

export default function Saints() {
    return (
        <div className='saints'>
            <Container>
                <Row>
                    <Col md={7} xl={7} lg={7} sm={12}>

                        <div className='saint1'>
                            <h4>Заснавальніца Кангрэгацыі - Францішка Сядліская</h4>
                            <p className='text-p'>
                                Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада 1842 года.
                                У родным доме Францішкі панавала прыдворная свецкая атмасфера, і сям’яне вельмі
                                цікавілася рэлігійнымі каштоўнасцямі. Але, як узгадвала сама Францішка, нягледзячы на
                                тое, што Езус не быў Гаспадаром у яе родным доме, яна з дзяцінства імкнулася пазнаваць і
                                любіць Хрыста.
                                Адказваючы на Божую ласку, у 1875 г. яна заснавала ў Рыме Кангрэгацыю Сясцёр
                                Найсвяцейшай Сям’і з Назарэта (сясцёр
                                назарэтанак). Як сведчанне асаблівай любові да
                            </p>
                        </div>

                    </Col>
                    <Col md={5} xl={5} lg={5} sm={12}>
                        <div>
                            <img src={img_6} className='image6' alt="imagePapa"/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={5} xl={5} lg={5} sm={12} className='text-center'>
                        <hr/>
                        <div >
                            <img src={img_7} className='image6'  alt="imagePapa"/>
                        </div>
                    </Col>
                    <Col md={7} xl={7} lg={7} sm={12}>
                        <div className='saint1'>
                            <h4>Заснавальніца Кангрэгацыі - Францішка Сядліская</h4>
                            <p className='text-p'>
                                Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада 1842 года.
                                У родным доме Францішкі панавала прыдворная свецкая атмасфера, і сям’яне вельмі
                                цікавілася рэлігійнымі каштоўнасцямі. Але, як узгадвала сама Францішка, нягледзячы на
                                тое, што Езус не быў Гаспадаром у яе родным доме, яна з дзяцінства імкнулася пазнаваць і
                                любіць Хрыста.
                                Адказваючы на Божую ласку, у 1875 г. яна заснавала ў Рыме Кангрэгацыю Сясцёр
                                Найсвяцейшай Сям’і з Назарэта (сясцёр
                                назарэтанак). Як сведчанне асаблівай любові да
                            </p>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={7} xl={7} lg={7} sm={12}>
                        <div className='saint1'>
                            <h4>Заснавальніца Кангрэгацыі - Францішка Сядліская</h4>
                            <p className='text-p'>
                                Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада 1842 года.
                                У родным доме Францішкі панавала прыдворная свецкая атмасфера, і сям’яне вельмі
                                цікавілася рэлігійнымі каштоўнасцямі. Але, як узгадвала сама Францішка, нягледзячы на
                                тое, што Езус не быў Гаспадаром у яе родным доме, яна з дзяцінства імкнулася пазнаваць і
                                любіць Хрыста.
                                Адказваючы на Божую ласку, у 1875 г. яна заснавала ў Рыме Кангрэгацыю Сясцёр
                                Найсвяцейшай Сям’і з Назарэта (сясцёр
                                назарэтанак). Як сведчанне асаблівай любові да
                            </p>
                        </div>

                    </Col>

                    <Col md={5} xl={5} lg={5} sm={12}>
                        <hr/>
                        <div>
                            <img src={img_6} className='image6' alt="imagePapa"/>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}