import React from 'react';

import {ParallaxHeroStyle1, SectionTitle} from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <section id="features" className={"grey-bg bg-full-features"}>
                    <div className="container-fluid no-padding">
                        <div className="row">
                            <div className="col-lg-6">
                                <ParallaxHeroStyle1
                                    bgImage={"/assets/images/bg/07.jpg"}
                                    className="d-inline-block w-100 h-100 iq-parallax jarallax"
                                >

                                </ParallaxHeroStyle1>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-mtb-100">
                                    <h2 className="iq-tw-6 iq-mb-25">Software Features</h2>
                                    <p className="iq-font-15">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                                    </p>
                                    <p className="iq-font-15">
                                        It has survived not only five centuries, but also the leap into electronic type setting.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Index;
