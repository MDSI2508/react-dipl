import React from 'react';

import "./Card.css"

const Card = ({img}) => {
    return (
        <div className="card-c">
            <div className="card-i">
                <img src={img} className='image2' alt="imagePapa"/>
            </div>
            <div className="card-text">
                <p>asdassafdfssdfs<br/>
                    asdassafdfssdfs<br/>
                    asdassafdfssdfs<br/>
                </p>
                <button className="card-b"><svg  width="70%" height="70%" viewBox="0 0 69 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.0607 13.0607C68.6464 12.4749 68.6464 11.5251 68.0607 10.9393L58.5147 1.39339C57.9289 0.807606 56.9792 0.807606 56.3934 1.39339C55.8076 1.97918 55.8076 2.92893 56.3934 3.51471L64.8787 12L56.3934 20.4853C55.8076 21.0711 55.8076 22.0208 56.3934 22.6066C56.9792 23.1924 57.9289 23.1924 58.5147 22.6066L68.0607 13.0607ZM1.31134e-07 13.5L67 13.5L67 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="white"/>
                </svg>
                </button>
            </div>
        </div>
    );
};

export default Card;