import ReactDOMServer from 'react-dom/server';
import Layout from '../../components/BaseLayout';
import { getAllPostIds, getPostData } from '../../lib/expert.js';
import ExpertCard from '../../components/ExpertCard';
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
        script.src = "/scripts/expert.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => { reactLoad(); }
    }
    render() {
        const expertData = this.props.expertData;
        return (
            <Layout>
                <NoScript />
                <main>
                    <div className="section row page-top-margin">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <div className="section row">
                                <div className="col s12 m12 l12 xl12">
                                    <div className="card double-padded z-depth-3">
                                        <div className="section row valign-wrapper">
                                            <div className="col s12 m12 l3 xl3 center-align">
                                                <img alt="BestoCon" className="lazyload responsive-img circle z-depth-3 expert-img" data-src={expertData.image}></img>
                                            </div>
                                            <div className="col s12 m12 l9 xl9">
                                                <h1 className="text-color-primary bold">{expertData.first_name + ' ' + expertData.last_name}</h1>
                                                <h4 className="text-color-primary-dark bold">{expertData.title}</h4>
                                            </div>
                                        </div>
                                        <div className="section row">
                                            <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                                                <h2 className="text-color-primary bold">{'About ' + expertData.first_name + ' ' + expertData.last_name}</h2>
                                                <br />
                                                <h5>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis neque sed viverra varius. Ut ipsum ante, vulputate quis lacinia at, pulvinar quis odio. Sed aliquam varius mauris vel vulputate. Vivamus id arcu non enim ornare pulvinar. Fusce nunc diam, ultrices id arcu eu, varius ornare lorem. Nam eu lobortis odio. Curabitur ac convallis quam. Nullam scelerisque ligula sit amet odio porttitor ultricies. Ut finibus sem varius nunc ultrices tristique. Aenean egestas laoreet nulla, consectetur aliquet tellus mattis id. Quisque non diam vitae sem pharetra mattis. Vivamus tristique sollicitudin volutpat. In vitae lectus pretium, faucibus diam ac, pharetra lorem. Nam tincidunt finibus magna, at hendrerit eros. Pellentesque bibendum sodales ex lobortis fermentum. Donec dapibus leo dui.
                                                </h5>
                                                <br />
                                                <div className="center-align">
                                                    <Link href="">
                                                        <a rel="noreferrer" title={'Connect with ' + expertData.first_name + ' ' + expertData.last_name} aria-label={'Connect with ' + expertData.first_name + ' ' + expertData.last_name} className="btn-large z-depth-3 color-primary-dark">{'Connect with ' + expertData.first_name + ' ' + expertData.last_name}<i className="material-icons right">chat</i></a>
                                                    </Link>
                                                </div>
                                                <br />
                                                <h2 className="text-color-primary bold">Similar Experts</h2>
                                                <div className="section row">
                                                    <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCard expert="Julie M." title="Architect" image="/images/placeholders/square-1.webp" current={expertData.id === 'julie-maxwell' ? 'true' : 'false'} /></a></Link>
                                                    <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCard expert="Maya P." title="Painter" image="/images/placeholders/square-2.webp" current={expertData.id === 'maya-parker' ? 'true' : 'false'} /></a></Link>
                                                    <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCard expert="Hadiya H." title="Actress" image="/images/placeholders/square-3.webp" current={expertData.id === 'hadiya-hussein' ? 'true' : 'false'} /></a></Link>
                                                    <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCard expert="Devika P." title="Physicist" image="/images/placeholders/square-4.webp" current={expertData.id === 'devika-patel' ? 'true' : 'false'} /></a></Link>
                                                    <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCard expert="Aisha M." title="Photographer" image="/images/placeholders/square-5.webp" current={expertData.id === 'aisha-malhotra' ? 'true' : 'false'} /></a></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const expertData = getPostData(params.id)
    return {
        props: {
            expertData
        }
    }
}