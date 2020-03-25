import React from 'react';

const MobileView = () => {
    return (
    <div className="columns">
        <div className="column">
            <p className="box is-info">1</p>
            <div className="columns is-mobile">
                <div className="column">
                    <p className="box is-info">3</p>
                </div>
                <div className="column">
                    <p className="box is-info">4</p>
                </div>
            </div>
            <p className="box is-info">2</p>
            <p className="box is-info">7</p>
            <div className="columns is-mobile">
                <div className="column">
                    <p className="box is-info">5</p>
                </div>
                <div className="column">
                    <p className="box is-info">8</p>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column">
                    <p className="box is-info">6</p>
                </div>
                <div className="column">
                    <p className="box is-info">9</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default MobileView;