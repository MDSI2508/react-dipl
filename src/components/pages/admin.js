import React from 'react';
import './admin.css';


const Admin = () => {

    return (
        <div className="admin-st">
            <h1 className="headers">Дом 1</h1>
            <div className="section">
                <div className="item-g">
                    <div className="new">
                        <img className="gang"
                             src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"/>
                        <textarea className="area"  placeholder="тело новости">asdadasdasdad</textarea>
                        <textarea className="area" placeholder="заголовок"/>
                    </div>
                    <div className="btn-g">
                        <button className="bt-d">удалить</button>
                        <button className="bt-d">изменить</button>
                    </div>
                </div>
                <div className="item-g">
                    <div className="new">
                        <img className="gang"
                             src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"/>
                        <textarea className="area" placeholder="тело новости"/>
                        <textarea className="area" placeholder="заголовок"/>
                    </div>
                    <div className="btn-g">
                        <button className="bt-d">удалить</button>
                        <button className="bt-d">изменить</button>
                    </div>
                </div>
                <div className="item-g">
                    <div className="new">
                        <img className="gang"
                             src="https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-boy.jpg"/>
                        <textarea className="area" placeholder="тело новости"/>
                        <textarea className="area" placeholder="заголовок"/>
                    </div>
                    <div className="btn-g">
                        <button className="bt-d">удалить</button>
                        <button className="bt-d">изменить</button>
                    </div>
                </div>
            </div>


            <h1 className="headers">Дом 2</h1>
            <h1 className="headers">Дом 3</h1>
        </div>
    );
};

export default Admin;