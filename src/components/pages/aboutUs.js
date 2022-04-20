import React from 'react';
import img from './../../images/img.png';
import img_1 from './../../images/img_1.png';
import img_5 from './../../images/img_5.png';
import twitter from './../../images/twitter.svg';
import skype from './../../images/skype.svg';
import inst from './../../images/inst.svg';
import facebook from './../../images/facebook.svg';
import {Row, Col, Container} from 'react-bootstrap';


export default function AboutUs() {
    return (
        <div className='about-as'>
            <Container className='add-space'>
                <Row>
                    <Col md={12} xl={12} lg={12} sm={12}>
                        <p className='text'>Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я, якая
                            яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання Хрыста
                            ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                            Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла, асабліва
                            ў паслугу сем’ям.
                        </p>
                        <p className='text'>Сёстры назарэтанкі займаюцца катэхізацыяй пры парафіях, наведваюць школы і дзіцячыя садкі,
                            праводзяць фармацыйныя сустрэчы для дзяцей і моладзі, малітоўныя сустрэчы і рэкалекцыі для
                            сем’яў. Сёстры таксама нясуць паслугу ў сакрыстыі, доме для адзінокіх маці, у сталоўцы для
                            бяздомных, апякуюцца хворымі ў шпіталі і хоспісе.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={4} xl={4} lg={4} sm={12}>
                        <div className='image1-'>
                            <img src={img} className='image1' alt="imagePapa"/>
                        </div>

                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12}>
                        <div className='image1-'>
                            <img src={img} className='image1' alt="imagePapa"/>
                        </div>

                    </Col>
                    <Col md={4} xl={4} lg={4} sm={12}>
                        <div className='image1-'>
                            <img src={img_1} className='image1' alt="imageMama"/>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={12} xl={12} lg={12} sm={12}>
                        <p className='text'>Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я, якая
                            яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання Хрыста
                            ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                            Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла, асабліва
                            ў паслугу сем’ям.Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я, якая
                            яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання Хрыста
                            ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                            Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла, асабліва
                            ў паслугу сем’ям.
                        </p>
                    </Col>
                </Row>
                <Row >
                    <Col md={5} xl={5} lg={5} sm={12}  >
                        <div className='add-spacing'>
                            <img src={img_5} className='image3' alt="imageMama"/>
                        </div>

                    </Col>
                    <Col md={7} xl={7} lg={7} sm={12}>
                        <p className='text'>Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я, якая
                            яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання Хрыста
                            ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                            Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла, асабліва
                            ў паслугу сем’ям.
                        </p>
                        <p className='text'>Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я, якая
                            яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання Хрыста
                            ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                            Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла, асабліва
                            ў паслугу сем’ям.
                        </p>
                    </Col>

                </Row >
                <hr/>
                <div className='footer'>
                    <h2 className='contact'>Контакты</h2>
                    <div className='contact-info'>
                        ГРОДНЕНСКИЙ ...<br/>
                        Республика Беларусь, 000000, г.Гродно, ул.Клокина,2<br/>
                        УНП 400252795 р/с BY74 BPSB 0000 0000 0000 0000 0000, S.W.I.F.T.: BPSBBY2X ОАО “Сбер Банк” г.
                        Гродно<br/>
                        Телефон канцелярии: +375 (232) 00-00-60<br/>
                        Телефон бухгалтерии: +375 (232) 00-00-00<br/>
                        e-mail: eparhia.grodno@mail.ru<br/>

                    </div>
                    <div className='net'>
                        <a href='https://twitter.com/?lang=ru' target="_blank"><img className='net-item' src={twitter}
                                                                                    alt="imageMama"/></a>
                        <a href='https://www.skype.com/' target="_blank"><img className='net-item' src={skype}
                                                                              alt="imageMama"/></a>
                        <a href='https://www.instagram.com/' target="_blank"><img className='net-item' src={inst}
                                                                                  alt="imageMama"/></a>
                        <a href='https://www.facebook.com/' target="_blank"><img className='net-item' src={facebook}
                                                                                 alt="imageMama"/></a>
                    </div>
                </div>
            </Container>


        </div>
    )
}