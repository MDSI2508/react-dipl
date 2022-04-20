import './Carusel.css'
import {useEffect, useState, Children, cloneElement} from "react";
import {MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/all";

const PAGE_WIDTH = 250;


export const Carusel = ({children}) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const handleLeft = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset + PAGE_WIDTH;
            console.log(newOffset);
            return Math.min(newOffset, 0);
        })

        console.log('left')
    }
    const handleRight = () => {
        setOffset(currentOffset => {
            const newOffset = currentOffset - PAGE_WIDTH;

            const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
            console.log(newOffset, maxOffset);
            return Math.max(newOffset, maxOffset);
        })
        console.log('right')
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        width: `${PAGE_WIDTH}px`
                        // minWidth: `${PAGE_WIDTH}px`,
                        // maxWidth: `${PAGE_WIDTH}px`,
                        // backgroundColor:'red'

                    },
                })
            })
        )
    }, [])

    return (
        <div className="main-container">
            <button className="left" onClick={handleLeft}><MdArrowBackIosNew size={50}/></button>
            <div className="window">
                <div className="all-items" style={{
                    transform: `translateX(${offset}px)`
                }}>
                    {pages}
                </div>
            </div>
            <button className="right" onClick={handleRight}><MdArrowForwardIos size={50}/></button>
        </div>
    )
}