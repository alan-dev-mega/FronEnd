import React from 'react';
import { useWindowDimensions } from '../WindowDimensionsProvider';

const getRelative = (row, height) => {
    return {height: getHeight(row, height).height * .33};
}

const getHeight = (row, height) => {
    switch (row) {
        case 1:
            height = height * .60;
            break;
        case 2:    
            height = height * .40;
            break;
        default:
            break;
    }
    return {height:  height };
}
 
const DesktopView = () => {

    const { height } = useWindowDimensions()
  
    return (
    <div>
        <div className='tile is-ancestor' style={getHeight(1, height)}>
            <div className="tile is-6" >
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">1</p>
                    </article>
                </div>
            </div>
            <div className="tile is-vertical is-6">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">2</p>
                    </article>
                </div>
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">3</p>
                        </article>
                    </div>
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title">4</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div className='tile is-ancestor' style={getHeight(2, height)}>
            <div className="tile is-4" >
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child box" >
                        <p className="title">5</p>
                        <div className="content" style={getRelative(2, height)}>
                        </div>
                    </article>
                    <article className="tile is-child box">
                        <p className="title">6</p>
                    </article>
                </div>
            </div>
            <div className="tile is-vertical is-4">
                <div className="tile is-parent">
                    <article className="tile is-child box">
                        <p className="title">7</p>
                    </article>
                </div>
            </div>
            <div className="tile is-vertical is-4">
                <div className="tile is-parent is-vertical">
                    <article className="tile is-child box">
                        <p className="title">8</p>
                    </article>
                    <article className="tile is-child box">
                        <p className="title">9</p>
                        <div className="content" style={getRelative(2, height)}>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </div>
    );
}

export default DesktopView;