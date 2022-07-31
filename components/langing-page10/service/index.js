import React from 'react';

import {ParallaxHeroStyle1, SectionStyle3,SectionTitle, ListStyle1} from '../../sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let services=[{
                            title:"Simply dummy text of the printing and typesetting industry.",
                            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        },
                        {
                            title:"Simply dummy text of the printing and typesetting industry.",
                            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        },
                        {
                            title:"Simply dummy text of the printing and typesetting industry.",
                            description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                        }];

        let software_features=[
                                "Simply dummy text of the Lorem Ipsum is printing and type setting industry.",
                                "Simply dummy text of the Lorem Ipsum is printing and type setting industry.",
                                "Simply dummy text of the Lorem Ipsum is printing and type setting industry."
                            ];
        return (
            <>
                <section id="services" className={"overview-block-pt how-works r-mt-40 "}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2 className="iq-tw-6 iq-mb-25 ">Easy to Work Mail</h2>
                                {services.map(service => (
                                    <SectionStyle3 title={service.title} className={"iq-font-blue iq-tw-6"} pClassName={"iq-font-15"} description={service.description} />
                                ))}
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <img alt="drive01" className="iq-works-img" src="/assets/images/drive/19.png" />
                            </div>
                        </div>
                    </div>
                </section>

                {/*-------------------------------------------------------------------------------------------------*/}

                <section className={"grey-bg bg-full-features"}>
                    <div className="container-fluid no-padding">
                        <div className="row">
                            <div className="col-lg-6">
                                <ParallaxHeroStyle1
                                    bgImage={"/assets/images/bg/02.jpg"}
                                    className="d-inline-block w-100 h-100 iq-parallax jarallax"
                                >

                                </ParallaxHeroStyle1>
                            </div>
                            <div className="col-lg-4">
                                <div className="iq-mtb-100">
                                    <h2 className="iq-tw-6 iq-mb-25">Software Features</h2>
                                    <p className="iq-font-15">
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
                                    </p>
                                    <p className="iq-font-15">
                                        It has survived not only five centuries, but also the leap into electronic type setting.
                                    </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*-------------------------------------------------------------------------------------------------------*/}

                <ParallaxHeroStyle1
                    className="overview-block-ptb  text-center iq-screenshots iq-bg-over iq-over-blue-80 jarallax"
                    bgImage="/assets/images/bg/04.jpg"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title={"sofbox is Porfect for U"}
                                    subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."}
                                    className={"white iq-font-white"}
                                />
                                <a className="button bt-black" href="#">Let's Started</a></div>
                        </div>
                    </div>
                </ParallaxHeroStyle1>

                {/*----------------------------------------------------------------------------------------------------------*/}

                <section className="overview-block-ptb how-works r-mt-40 " id="how-works">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title={"About Us"}
                                    subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's."}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="iq-pt-40">
                                    <h2 className="iq-tw-6 iq-mb-25">Software Features</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                </div>
                                <ul className="iq-mt-40 iq-list">
                                    {software_features.map(features => (
                                        <ListStyle1 details={features} />
                                    ))}
                                </ul>
                            </div>
                            <div className="col-lg-6 align-self-center">
                                <img alt="drive01" className="iq-works-img" src="/assets/images/drive/16.png" />
                            </div>
                        </div>
                    </div>
                </section>

            </>
        );
    }
}

export default Index;
