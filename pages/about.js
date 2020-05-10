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
        script.src = "/scripts/about.js";
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
                            <h2 className="text-color-primary bold center-align">What is BestoCon?</h2>
                            <div className="row valign-wrapper">
                                <div className="col s12 m12 l6 xl6">
                                    <p className="single-and-half">
                                        Growth in Career or Life in general, not just requires the right skills but also a Mentor or a Life coach who can show the right path enabling quick growth and progress.<br /><br />BestoCon brings the best of experts from various fields who will put you on the best path and make climbing the ladder of success and happiness faster and easier.
                                    </p>
                                    <br />
                                    <Link href="/topics"><a rel="noreferrer" title="View all our topics" aria-label="View all our topics" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">View all our topics<i className="material-icons right">arrow_forward</i><i className="material-icons right">title</i></a></Link>
                                    <br />
                                    <br />
                                    <Link href="/experts"><a rel="noreferrer" title="View all our experts" aria-label="View all our experts" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">View all our experts<i className="material-icons right">arrow_forward</i><i className="material-icons right">how_to_reg</i></a></Link>
                                </div>
                                <div className="col s12 m12 l6 xl6 center-align">
                                    <img alt="BestoCon" className="lazyload responsive-img circle" data-src="/images/placeholders/square-6.webp"></img>
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