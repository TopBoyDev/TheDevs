import React from 'react';

import {SectionTitle, CardStyle4, AboutStyle1} from '../../sofbox';

import OwlCarousel from 'react-owl-carousel2';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id={"about-section"} className="overview-block-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="About Us"
                                    subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 align-self-center">
                                <h2 className="iq-tw-6 iq-mb-25">The Best Program UI</h2>
                                <p className="iq-font-15">Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                                <div className="media iq-mt-30">
                                    <img alt="Generic placeholder image" className="mr-3 rounded-circle align-self-center" src="/assets/images/testimonial/01.jpg" />
                                    <div className="media-body iq-pr-30 iq-pt-15">
                                        <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <img alt="drive01" className="img-fluid" src="/assets/images/drive/01.png" />
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
