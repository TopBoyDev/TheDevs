import React from 'react';

import { SectionStyle3, SectionTitle } from '../../sofbox';

import OwlCarousel from 'react-owl-carousel2';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let faq_list=[
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
            {
                title:'Lorem Ipsum is simply dummy text of the printing ?',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s'
            },
        ];
        return (
            <>
                <section className="overview-block-pt it-works grey-bg" id="iq-faq">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <SectionTitle
                                    title={"Frequently Asked Questions"}
                                    subTitle={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                                />
                            </div>
                        </div>
                        <div className="row">
                            {faq_list.map(faq => (
                                <div className="col-lg-6">
                                    <SectionStyle3 title={faq.title} className={"iq-font-blue iq-tw-6 iq-pb-10 iq-pt-20"} description={faq.description} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <img alt="" className="img-fluid" src="/assets/images/drive/item.png" />
                </section>
            </>
        );
    }
}

export default Index;
