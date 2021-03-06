import React from 'react';
import {Row, Col, Container} from "react-bootstrap";
import {Carusel} from "../Carusel/Carusel";
import img_2 from './../../images/img_2.png';
import img_3 from './../../images/img_3.png';
import img_4 from './../../images/img_4.png';
import Card from "../CaCard/Card";


export default function History() {
    return (
        <div>

            <div className='history'>
                <Container >

                    <Row>
                        <Col className="add-space" md={12} xl={12} lg={12} sm={12}>
                            <Carusel>
                                <div className="item item-1">
                                    <Card img={img_2}/>
                                </div>
                                <div className="item item-2">
                                    <Card img={img_3}/>
                                </div>
                                <div className="item item-3">
                                    <Card img={img_4}/>
                                </div>
                                <div className="item item-4">
                                    <Card img={img_2}/>
                                </div>
                            </Carusel>
                        </Col>

                        <Col md={12} xl={12} lg={12} sm={12}>
                            <p className='text'>Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з Назарэту – гэта манаская сям’я,
                                якая
                                яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання
                                Хрыста
                                ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                                Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла,
                                асабліва
                                ў паслугу сем’ям.
                                Сясцёр назарэтанкі займаюцца катэхізацыяй пры парафіях, наведваюць школы і дзіцячыя
                                садкі,
                                праводзяць фармацыйныя сустрэчы для дзяцей і моладзі, малітоўныя сустрэчы і рэкалекцыі
                                для
                                сем’яў. Сёстры таксама нясуць паслугу ў сакрыстыі, доме для адзінокіх маці, у сталоўцы
                                для
                                бяздомных, апякуюцца хворымі ў шпіталі і хоспісе.Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з
                                Назарэту – гэта манаская сям’я, якая
                                яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання
                                Хрыста
                                ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                                Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла,
                                асабліва
                                ў паслугу сем’ям.Сёстры назарэтанкі займаюцца катэхізацыяй пры парафіях, наведваюць
                                школы і дзіцячыя садкі,
                                праводзяць фармацыйныя сустрэчы для дзяцей і моладзі, малітоўныя сустрэчы і рэкалекцыі
                                для
                                сем’яў. Сёстры таксама нясуць паслугу ў сакрыстыі, доме для адзінокіх маці, у сталоўцы
                                для
                                бяздомных, апякуюцца хворымі ў шпіталі і хоспісе.Кангрэгацыя Сясцёр Найсвяцейшай Сям’і з
                                Назарэту – гэта манаская сям’я, якая
                                яднае пакліканых да кансэкраванага жыцця і запрошаных Богам да асаблівага наследвання
                                Хрыста
                                ў Яго любові, беднасці і паслухмянасці. Удзельнічаючы ў місіі Езуса пашыраць Валадарства
                                Божай Любові, мы актыўна ўключаемся ў розныя формы апостальскай дзейснасці Касцёла,
                                асабліва
                                ў паслугу сем’ям.<br/>Сёстры назарэтанкі займаюцца катэхізацыяй пры парафіях, наведваюць
                                школы і дзіцячыя садкі,
                                праводзяць фармацыйныя сустрэчы для дзяцей і моладзі, малітоўныя сустрэчы і рэкалекцыі
                                для
                                сем’яў. Сёстры таксама нясуць паслугу ў сакрыстыі, доме для адзінокіх маці, у сталоўцы
                                для
                                бяздомных, апякуюцца хворымі ў шпіталі і хоспісе</p>
                        </Col>
                    </Row>

                </Container>
            </div>


        </div>
    )
}