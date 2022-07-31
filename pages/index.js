import React from 'react';
import Head from 'next/head';
// Import asset...

// Import Components...
import Home from '../components/landing-page1/home';
import About from '../components/landing-page1/about';
import Services from '../components/landing-page1/services';
import Specialities from '../components/landing-page1/specialities';
import Counter from '../components/landing-page1/counter';
import Testimonial from '../components/landing-page1/testimonial';
import Pricing from '../components/landing-page1/pricing';
import Team from '../components/landing-page1/team';
import CompareService from '../components/landing-page1/compareService';
import Faq from '../components/landing-page1/faq';
import Blog from '../components/landing-page1/blog';
import Clients from '../components/landing-page1/clients';
import Contact from '../components/landing-page1/contact';
import FooterSection from '../components/landing-page1/footerSection';
import logoImg from '../public/assets/images/logo.png';

// Import for the custom plugins...
import { index } from '../config/plugins';
import { subHeader } from '../constants/menu';


// Import for the sofbox components...
import { Loader, HeaderStyle1, ParallaxHeroStyle1,ScrollTop, ColorCustomizer } from '../components/sofbox';

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menu: [
                { href: '#iq-home', title: 'Home',
                    _is_active : true,
                    active: true,
                    children: true,
                    child: subHeader
                },
                { href: '#how-it-works', title: 'About' },
                { href: '#software-features', title: 'Service' },
                { href: '#pricing', title: 'Pricing'},
                { href: '#team', title: 'Team' },
                { href: '#blog', title: 'Blog' },
                { href: '#contact', title: 'Contact' }
            ]
        };
    }

    componentDidMount(props) {

        setTimeout( () => {
            index();
        }, 500);

    }

    render() {
        const { menu } = this.state;
        return (
            <>
                {/* Heading section */}
                <Head>
                    <title>The Developers</title>
                    <meta name="keywords" content="HTML5 Template" />
                    <meta name="description" content="The Developers" />
                    <meta name="author" content="http://iqonic.design/" />
                    <link rel="shortcut icon" href="/assets/images/favicon.ico" />
                </Head>

                {/* Loader section */}
                <Loader />

                {/* header section*/}
                <HeaderStyle1
                    className={""}
                    navItems={menu}
                    logoImg={logoImg}
                    styledLogo={false}
                   
                />

                {/* Home section*/}
                <Home />


                <div className="main-content">

                    {/* About section */}
                    <About />

                    {/* Services section */}
                    <Services />

                    {/* Specialities section */}
                    <Specialities />

                    {/* Counter section */}
                    <Counter />

                    {/* Testimonial section */}
                    <Testimonial />

                    {/* Pricing section */}
                    <Pricing />

                    {/* Team section */}
                    <Team />

                    {/* CompareService section */}
                    <CompareService />

                    {/* FAQ section */}
                    <Faq />

                    {/* Blog section */}
                    <Blog />

                    {/* Client section */}
                    <Clients />
                </div>

                <footer>
                    <ParallaxHeroStyle1
                        className="iq-ptb-100 iq-newsletter iq-bg-over iq-over-blue-90 jarallax"
                        bgImage="/assets/images/bg/01.jpg"
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="heading-title white iq-mb-40">
                                        <h3 className="title iq-tw-7">Subscribe Our Newsletter</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-7">
                                    <form className="form-inline">
                                        <input type="text" name="email" autoComplete="email"
                                               style={{ display: 'none' }}/>
                                        <div className="form-group">
                                            <label htmlFor="inputPassword2" className="sr-only">Password</label>
                                            <input type="password" className="form-control" id="inputPassword2"
                                                   placeholder="Enter your email" autoComplete="new-password" />
                                        </div>
                                        <a className="button bt-black iq-ml-25" href="#">subscribe</a>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ParallaxHeroStyle1>


                    {/* Contact section */}
                    <Contact />

                    {/* Footer section */}
                    <FooterSection />
                </footer>


                {/* Scroll top */}
                <ScrollTop />

                {/* Color customizer */}
                <ColorCustomizer />
            </>
        );
    }

}

export default Index;