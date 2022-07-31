import React from 'react'

import { ParallaxHeroStyle1,Wave } from '../../sofbox';


class index extends React.Component {

    componentDidMount(props) {
    }

    render() {
        return (
            <>
                <ParallaxHeroStyle1
                    ids="iq-home"
                    bgImage={"/assets/images/bg/09.jpg"}
                    className={"iq-banner-07 overview-block-ptb iq-bg-over iq-parallax"}
                >
                    <div className="container">
                        <div className="banner-text">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <h1 className="iq-font-black text-uppercase iq-tw-5">
                                        <b>We are <span className="iq-font-blue">Building Software</span> to Help</b>
                                    </h1>
                                    <p className="iq-pt-15 iq-mb-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                    <Wave
                                        btnLink={"http://www.youtube.com/watch?v=0O2aH4XLbto"}
                                        className={"popup-youtube"}
                                    />
                                    <a href="#" className="button iq-mt-5 iq-ml-40">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ParallaxHeroStyle1>
            </>
        )
    }
}

export default index;
