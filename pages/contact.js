import ReactDOMServer from 'react-dom/server';
import Layout from '../components/BaseLayout';
import Link from 'next/link';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

class Index extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/scripts/contact.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => { reactLoad(); }
    }
    render() {
        return (
            <Layout>
                <NoScript />
                <main>
                    <div className="section row">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <h2 className="text-color-primary bold center-align">Contact Us</h2>
                            <div className="row valign-wrapper">
                                <div className="col s12 m12 l6 xl6">
                                    <div className="row">
                                        <div className="col s12 m12 l6 xl6 input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input placeholder="First Name *" id="contact_us_first_name" type="text" className="validate" required />
                                            {/*<label htmlFor="contact_us_first_name">Name *</label>*/}
                                            <span className="helper-text" data-error="This is a required field" data-success="Perfect.">It doesn't have to be your real name.</span>
                                        </div>
                                        <div className="col s12 m12 l6 xl6 input-field">
                                            <i className="material-icons prefix">account_circle</i>
                                            <input placeholder="Last Name *" id="contact_us_last_name" type="text" className="validate" required />
                                            {/*<label htmlFor="contact_us_last_name">Name *</label>*/}
                                            <span className="helper-text" data-error="This is a required field" data-success="Perfect.">Because last names are cool.</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 m12 l6 xl6 input-field">
                                            <i className="material-icons prefix">email</i>
                                            <input placeholder="Email *" id="contact_us_email" type="email" className="validate" pattern="[a-z0-9._%+-]+@+[a-z]+.+[a-z]" required />
                                            {/*<label htmlFor="contact_us_email">Email *</label>*/}
                                            <span className="helper-text" data-error="Please enter a valid email address" data-success="Perfect.">We will use this to get in touch with you.</span>
                                        </div>
                                        <div className="col s12 m12 l6 xl6 input-field">
                                            <i className="material-icons prefix">phone</i>
                                            <input placeholder="Phone Number *" data-length="10" id="contact_us_phone" type="number" min="6000000000" max="9999999999" maxLength="10" pattern="^\d{10}$" className="validate" required />
                                            {/*<label htmlFor="contact_us_phone">Phone Number *</label>*/}
                                            <span className="helper-text" data-error="Please enter a valid phone number" data-success="Perfect.">Please enter a 10-digit phone number.</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col s12 m12 l12 xl12 input-field">
                                            <i className="material-icons prefix">chat</i>
                                            <input placeholder="Message *" id="contact_us_message" type="text" className="validate" required />
                                            {/*<label htmlFor="contact_us_message">Name *</label>*/}
                                            <span className="helper-text" data-error="This is a required field" data-success="Perfect.">We understand modern texting lingo.</span>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="center-align"><Link href=""><a rel="noreferrer" title="Stay in touch" aria-label="Stay in touch" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">Stay in touch<i className="material-icons right">arrow_forward</i><i className="material-icons right">info</i></a></Link></div>
                                </div>
                                <div className="col s12 m12 l6 xl6 center-align">
                                    <img alt="BestoCon" className="lazyload responsive-img circle" data-src="/images/placeholders/square-7.webp"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <script type="text/javascript" src="/scripts/jquery.min.js" defer></script>
                <script type="text/javascript" src="/scripts/materialize-plm.min.js" defer></script>
                <script type="text/javascript" src="/scripts/nouislider.min.js" defer></script>
                <script type="text/javascript" src="/scripts/masonry.pkgd.min.js" defer></script>
                <script type="text/javascript" src="/scripts/lazysizes.min.js" async></script>
                <script type="text/javascript" src="/scripts/sweetalert2.js" defer></script>
            </Layout>
        );
    }
}

export default Index;