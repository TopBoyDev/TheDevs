import React from 'react';
import { ParallaxHeroStyle1 } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1
                    ids="iq-home"
                    bgImage={"/assets/images/bg/01.jpg"}
                    className={"iq-banner overview-block-pt iq-bg-over iq-over-blue-90 iq-parallax jarallax"}
                >
                    <div className="container-fluid">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="text-uppercase iq-font-white iq-tw-3">
                                        We are building <b className="iq-tw-7">software</b> to help
                                    </h1>
                                    <p className="iq-font-white iq-pt-15 iq-mb-40">
                                        We are a company boutique for digital transformation and software development that offers state-of - the-art engineering solutions, helping businesses and business customers untangle complicated problems.
                                    </p>
                                    <div className="waves-box">
                                        <a href="http://www.youtube.com/watch?v=kzyFmrFky7Y"
                                           className="iq-video popup-youtube">
                                            <i className="ion-ios-play-outline" /></a>
                                        <div className="iq-waves">
                                            <div className="waves wave-1" />
                                            <div className="waves wave-2" />
                                            <div className="waves wave-3" />
                                        </div>
                                    </div>
                                  
                                </div>
                                <div className="col-lg-6">
                                    <img className="banner-img" src="/assets/images/banner/01.png" alt="drive" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="banner-objects">
                        <span className="banner-objects-01" data-bottom="transform:translatey(50px)" data-top="transform:translatey(-50px);">
                            <img src="/assets/images/drive/03.png" alt="drive02" />
                        </span>
                        <span className="banner-objects-02 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                        <span className="banner-objects-03 iq-fadebounce">
                            <span className="iq-round" />
                        </span>
                    </div>
                </ParallaxHeroStyle1>

            </>
        );
    }

}

export default Index;