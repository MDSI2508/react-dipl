import React, {useEffect, useState} from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import img_7 from "../../images/img_7.png";
import img_2 from "../../images/img_2.png";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/all";
import axios from 'axios';

export default function House() {
    const [modalActive, setModalActive] = useState({

        model1: false,
        model2: false,
        model3: false

    });
    // const [data,setData] = useState()
    // useEffect(()=>{
    //     axios.get('boo').then(res=>setData(res));
    // },[]);

    return (
        <div className='house'>
            <Container className='add-space'>
                <Row className='add-space'>
                    {/*{*/}
                    {/*    data.map(item=>)*/}
                    {/*}*/}
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_2} className='image7' alt="imagePapa"/>
                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model1 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model1: !modalActive.model1
                                    })}>{
                                        modalActive.model1
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>

                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_7} className='image7' alt="imagePapa"/>

                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model2 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model2: !modalActive.model2
                                    })}>{
                                        modalActive.model2
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>

                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_7} className='image7' alt="imagePapa"/>

                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model3 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model3: !modalActive.model3
                                    })}>{
                                        modalActive.model3
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col >

                </Row>
                <Row className='add-space'>
                    {/*{*/}
                    {/*    data.map(item=>)*/}
                    {/*}*/}
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_7} className='image7' alt="imagePapa"/>
                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model1 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model1: !modalActive.model1
                                    })}>{
                                        modalActive.model1
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>

                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_7} className='image7' alt="imagePapa"/>

                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model2 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model2: !modalActive.model2
                                    })}>{
                                        modalActive.model2
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12} className='news-card'>
                        <div className='news'>
                            <Row>

                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-img'>
                                        <img src={img_7} className='image7' alt="imagePapa"/>

                                    </div>
                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-text'>
                                        <h3>Заснавальніца Кангрэгацыі - Францішка Сядліская</h3>
                                        <p>
                                            Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                            1842
                                            года.

                                        </p>
                                    </div>
                                </Col>

                                <Col>
                                    {modalActive.model3 &&
                                    <p className='drop-dt'>Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай
                                        Волі 12 лістапада 1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.Францішка Сядліская нарадзілася на Мазавеччыне ў Рашковай Волі 12 лістапада
                                        1842
                                        года.</p>}
                                    <button className='btn-ic' onClick={() => setModalActive({
                                        ...modalActive,
                                        model3: !modalActive.model3
                                    })}>{
                                        modalActive.model3
                                            ? <IoIosArrowUp/>
                                            : <IoIosArrowDown/>
                                    }</button>

                                </Col>
                                <Col md={12} xl={12} lg={12} sm={12}>
                                    <div className='news-date'>Data:12.03.2022</div>
                                </Col>
                            </Row>
                        </div>
                    </Col >

                </Row>
            </Container>
        </div>
    )
}