import React from 'react';

import { SectionStyle1, SectionStyle2, SectionTitle, CardStyle5 } from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props); 
    }

    
    render() {
        return (
            <>
                <section id="how-it-works" className="overview-block-ptb it-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title="What is The Developers ?"
                                    subTitle="sofbox is a sleek, clean and powerful landing page template."
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-lg-4">
                                <CardStyle5 step={1} media={"/assets/images/services/icon1.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Easy to Customize</h5>
                                    <p>The Developers allows easily to customize the template as per your business needs. Also it makes easy to tailor-made.</p>
                                </CardStyle5>
                            </div>

                            <div className="col-md-12 col-lg-4 r-mt-30">
                                <CardStyle5 step={2} media={"/assets/images/services/icon2.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Multipurpose layout</h5>
                                    <p>Choose the layout that suits your needs, customize the sections, headers choose from pre-made elements.</p>
                                </CardStyle5>
                            </div>

                            <div className="col-md-12 col-lg-4 r-mt-30">
                                <CardStyle5 step={3} media={"/assets/images/services/icon3.png"}>
                                    <h5 className="iq-tw-7 iq-mt-25 iq-mb-15">Unique Design</h5>
                                    <p>The Developers's harmonious design and super clean looks will make your website look beautiful and elegant.</p>
                                </CardStyle5>
                            </div>
                        </div>
                    </div>
                </section>

                <SectionStyle1 id={"what_can_do"} rowReverse={true}>

                    <div className="col-lg-6 align-self-center">
                        <img className="iq-works-img pull-right img-fluid" src="/assets/images/drive/01.png"
                             alt="drive01" />
                    </div>
                    <div className="col-lg-6">
                        <div className="heading-title left text-left">
                            <h3 className="iq-tw-7 iq-mb-25 title">What can The Developers do ?</h3>
                        </div>
                        <p>With The Developers you can create beautiful and elegant websites that suits your business.</p>
                        <p className="iq-mt-20">You can fully customize the template with ease. Every page is fully responsive and retina ready which makes your creation look good on any device.</p>
                        <h6 className="iq-tw-6 iq-mb-15 iq-mt-25">Discover our best ever services.</h6>
                        <a href="#" className="button iq-mt-20">Click Here</a>
                    </div>

                </SectionStyle1>

            </>
        );
    }

}

export default Index;