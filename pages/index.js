import ReactDOMServer from 'react-dom/server';
import Layout from '../components/BaseLayout';
import Link from 'next/link';
import ExpertCardMini from '../components/ExpertCardMini';
import TopicCardMini from '../components/TopicCardMini';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

class Index extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/scripts/main.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => { reactLoad(); }
    }
    render() {
        return (
            <Layout>
                <NoScript />
                <main>

                    {/* Parallax Image 0 */}

                    <div className="parallax-container">
                        <div className="parallax">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/placeholders/0-sd.webp"></source>
                                <source media="(max-width: 1600px)" srcSet="/images/placeholders/0-hd.webp"></source>
                                <img className="lazyload responsive-img" data-src="/images/placeholders/0-fhd.webp" alt="BestoCon"></img>
                            </picture>
                        </div>
                    </div>

                    {/* Section 1 */}

                    <div className="section row z-depth-3">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <h2 className="text-color-primary bold center-align">What is BestoCon?</h2>
                            <div className="row valign-wrapper">
                                <div className="col s12 m12 l6 xl6">
                                    <p className="single-and-half">
                                        Growth in career or life in general, not just requires the right skills but also a Mentor or a Life coach who can show the right path enabling quick growth and progress.<br /><br />BestoCon brings the best of experts from various fields who will put you on the best path and make climbing the ladder of success and happiness faster and easier.
                                    </p>
                                    <br />
                                    <Link href="/about"><a rel="noreferrer" title="Learn more about us" aria-label="Learn more about us" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">Learn more about us<i className="material-icons right">arrow_forward</i><i className="material-icons right">supervised_user_circle</i></a></Link>
                                </div>
                                <div className="col s12 m12 l6 xl6 center-align">
                                    <img alt="BestoCon" className="lazyload responsive-img circle" data-src="/images/placeholders/square-6.webp"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parallax Image 1 */}

                    <div className="parallax-container">
                        <div className="parallax">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/placeholders/1-sd.webp"></source>
                                <source media="(max-width: 1600px)" srcSet="/images/placeholders/1-hd.webp"></source>
                                <img className="lazyload responsive-img" data-src="/images/placeholders/1-fhd.webp" alt="BestoCon"></img>
                            </picture>
                        </div>
                    </div>

                    {/* Section 2 */}

                    <div className="section row z-depth-3">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <div className="row">
                                <h2 className="text-color-primary bold center-align">Featured Topics</h2>
                                <br />
                                <TopicCardMini expert="Julie Maxwell" icon="house" topic="Architecture" image="/images/placeholders/vertical-1.webp" id="julie-maxwell" />
                                <TopicCardMini expert="Maya Parker" icon="brush" topic="Painting" image="/images/placeholders/vertical-2.webp" id="maya-parker" />
                                <TopicCardMini expert="Hadiya Hussein" icon="movie_filter" topic="Acting" image="/images/placeholders/vertical-3.webp" id="hadiya-hussein" />
                                <TopicCardMini expert="Devika Patel" icon="functions" topic="Physics" image="/images/placeholders/vertical-4.webp" id="devika-patel" />
                                <TopicCardMini expert="Aisha Malhotra" icon="linked_camera" topic="Photography" image="/images/placeholders/vertical-5.webp" id="aisha-malhotra" />
                            </div>
                            <br />
                            <div className="center-align"><Link href="/topics"><a rel="noreferrer" title="View all our topics" aria-label="View all our topics" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">View all our topics<i className="material-icons right">arrow_forward</i><i className="material-icons right">title</i></a></Link></div>
                            <br />
                        </div>
                    </div>

                    {/* Parallax Image 2 */}

                    <div className="parallax-container">
                        <div className="parallax">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/placeholders/2-sd.webp"></source>
                                <source media="(max-width: 1600px)" srcSet="/images/placeholders/2-hd.webp"></source>
                                <img className="lazyload responsive-img" data-src="/images/placeholders/2-fhd.webp" alt="BestoCon"></img>
                            </picture>
                        </div>
                    </div>

                    {/* Section 3 */}

                    <div className="section row z-depth-3">
                        <h2 className="text-color-primary bold center-align">Top Experts</h2>
                        <br />
                        <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCardMini expert="Julie M." title="Architect" image="/images/placeholders/square-1.webp" current="false" /></a></Link>
                        <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCardMini expert="Maya P." title="Painter" image="/images/placeholders/square-2.webp" current="false" /></a></Link>
                        <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCardMini expert="Hadiya H." title="Actress" image="/images/placeholders/square-3.webp" current="false" /></a></Link>
                        <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCardMini expert="Devika P." title="Physicist" image="/images/placeholders/square-4.webp" current="false" /></a></Link>
                        <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCardMini expert="Aisha M." title="Photographer" image="/images/placeholders/square-5.webp" current="false" /></a></Link>
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <div className="row">

                            </div>
                            <div className="center-align"><Link href="/experts"><a rel="noreferrer" title="View all our experts" aria-label="View all our experts" className="btn-large waves-effect waves-light color-primary-dark white-text bold z-depth-3">View all our experts<i className="material-icons right">arrow_forward</i><i className="material-icons right">how_to_reg</i></a></Link></div>
                            <br />
                        </div>
                    </div>

                    {/* Parallax Image 3 */}

                    <div className="parallax-container">
                        <div className="parallax">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/placeholders/3-sd.webp"></source>
                                <source media="(max-width: 1600px)" srcSet="/images/placeholders/3-hd.webp"></source>
                                <img className="lazyload responsive-img" data-src="/images/placeholders/3-fhd.webp" alt="BestoCon"></img>
                            </picture>
                        </div>
                    </div>

                    {/* Section 4 */}

                    <div className="section row z-depth-3">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <div className="section row valign-wrapper">
                                <div className="col s12 m12 l3 xl3 center-align">
                                    <h2 className="text-color-primary bold low-line-height">SUBSCRIBE</h2>
                                    <h5 className="grey-text text-darken-2 bold">TO OUR NEWSLETTER</h5>
                                </div>
                                <div className="col s12 m12 l7 xl7 input-field">
                                    <i className="material-icons prefix">email</i>
                                    <input placeholder="Email *" id="home_page_subscribe_email" type="email" className="validate" pattern="[a-z0-9._%+-]+@+[a-z]+.+[a-z]" required />
                                    {/*<label htmlFor="home_page_subscribe_email">Email *</label>*/}
                                    <span className="helper-text" data-error="Please enter a valid email address" data-success="Perfect.">We won't disappoint you!</span>
                                </div>
                                <div className="col s12 m12 l2 xl2">
                                    <Link href=""><a rel="noreferrer" title="Subscribe to our newsletter" aria-label="Subscribe to our newsletter" className="btn-large color-primary-dark white-text full-width z-depth-3">Subscribe<i className="material-icons right">subscriptions</i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Parallax Image 4 */}

                    <div className="parallax-container">
                        <div className="parallax">
                            <picture>
                                <source media="(max-width: 600px)" srcSet="/images/placeholders/4-sd.webp"></source>
                                <source media="(max-width: 1600px)" srcSet="/images/placeholders/4-hd.webp"></source>
                                <img className="lazyload responsive-img" data-src="/images/placeholders/4-fhd.webp" alt="BestoCon"></img>
                            </picture>
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