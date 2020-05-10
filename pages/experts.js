import ReactDOMServer from 'react-dom/server';
import Layout from '../components/BaseLayout';
import SearchBar from '../components/SearchBar';
import Link from 'next/link';
import ExpertCard from '../components/ExpertCard';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

class Index extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/scripts/experts.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => { reactLoad(); }
    }
    render() {
        return (
            <Layout>
                <NoScript />
                <main>
                    <div className="row page-top-margin">
                        <div className="row">
                            <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                                <SearchBar />
                                <h1 className="text-color-primary bold center-align">ALL EXPERTS</h1>
                                <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCard expert="Julie Maxwell" title="Architect" image="/images/placeholders/square-1.webp" current="false" /></a></Link>
                                <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCard expert="Maya Parker" title="Painter" image="/images/placeholders/square-2.webp" current="false" /></a></Link>
                                <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCard expert="Hadiya Hussein" title="Actress" image="/images/placeholders/square-3.webp" current="false" /></a></Link>
                                <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCard expert="Devika Patel" title="Physicist" image="/images/placeholders/square-4.webp" current="false" /></a></Link>
                                <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCard expert="Aisha Malhotra" title="Photographer" image="/images/placeholders/square-5.webp" current="false" /></a></Link>
                                <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCard expert="Julie Maxwell" title="Architect" image="/images/placeholders/square-1.webp" current="false" /></a></Link>
                                <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCard expert="Maya Parker" title="Painter" image="/images/placeholders/square-2.webp" current="false" /></a></Link>
                                <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCard expert="Hadiya Hussein" title="Actress" image="/images/placeholders/square-3.webp" current="false" /></a></Link>
                                <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCard expert="Devika Patel" title="Physicist" image="/images/placeholders/square-4.webp" current="false" /></a></Link>
                                <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCard expert="Aisha Malhotra" title="Photographer" image="/images/placeholders/square-5.webp" current="false" /></a></Link>
                                <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCard expert="Julie Maxwell" title="Architect" image="/images/placeholders/square-1.webp" current="false" /></a></Link>
                                <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCard expert="Maya Parker" title="Painter" image="/images/placeholders/square-2.webp" current="false" /></a></Link>
                                <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCard expert="Hadiya Hussein" title="Actress" image="/images/placeholders/square-3.webp" current="false" /></a></Link>
                                <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCard expert="Devika Patel" title="Physicist" image="/images/placeholders/square-4.webp" current="false" /></a></Link>
                                <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCard expert="Aisha Malhotra" title="Photographer" image="/images/placeholders/square-5.webp" current="false" /></a></Link>
                                <Link href="/expert/julie-maxwell"><a rel="noreferrer" title="Julie Maxwell" aria-label="Julie Maxwell" className="black-text"><ExpertCard expert="Julie Maxwell" title="Architect" image="/images/placeholders/square-1.webp" current="false" /></a></Link>
                                <Link href="/expert/maya-parker"><a rel="noreferrer" title="Maya Parker" aria-label="Maya Parker" className="black-text"><ExpertCard expert="Maya Parker" title="Painter" image="/images/placeholders/square-2.webp" current="false" /></a></Link>
                                <Link href="/expert/hadiya-hussein"><a rel="noreferrer" title="Hadiya Hussein" aria-label="Hadiya Hussein" className="black-text"><ExpertCard expert="Hadiya Hussein" title="Actress" image="/images/placeholders/square-3.webp" current="false" /></a></Link>
                                <Link href="/expert/devika-patel"><a rel="noreferrer" title="Devika Patel" aria-label="Devika Patel" className="black-text"><ExpertCard expert="Devika Patel" title="Physicist" image="/images/placeholders/square-4.webp" current="false" /></a></Link>
                                <Link href="/expert/aisha-malhotra"><a rel="noreferrer" title="Aisha Malhotra" aria-label="Aisha Malhotra" className="black-text"><ExpertCard expert="Aisha Malhotra" title="Photographer" image="/images/placeholders/square-5.webp" current="false" /></a></Link>
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