import React from 'react';
import flower1 from '../img/flower1.jpg';

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>Your <span>dreams</span>come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>
                </div>
                <p>Contact us for any photography ideas and special interest. 
                We have professionals with amazing skills.</p>
                <button>Contact us</button>
                <div className="image">
                    <img src={flower1} alt="black and grey flower" />
                </div>
                </div>

    );
};

export default AboutSection