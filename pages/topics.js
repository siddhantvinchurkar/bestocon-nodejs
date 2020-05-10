import ReactDOMServer from 'react-dom/server';
import Layout from '../components/BaseLayout';
import TopicCard from '../components/TopicCard';
import SearchBar from '../components/SearchBar';

function NoScript(props) {
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(props.children)
    return <noscript dangerouslySetInnerHTML={{
        __html: "Unfortunately, your browser does not support javascript. Either that or it's disabled. Maybe try to enable it? Privacy centric browsers like Tor or Brave tend to do this more often than you think. Don't worry. We respect your privacy and will never collect personal data from you without your explicit consent."
    }} />
}

class Index extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/scripts/topics.js";
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
                                <h1 className="text-color-primary bold center-align">ALL TOPICS</h1>
                                <div className="row cards-container">
                                    <div className="grid-sizer" />
                                    <TopicCard icon="house" topic="Architecture" expert="Julie Maxwell" image="/images/placeholders/architecture-1.webp" expertId="julie-maxwell" />
                                    <TopicCard icon="brush" topic="Painting" expert="Maya Parker" image="/images/placeholders/painting-1.webp" expertId="maya-parker" />
                                    <TopicCard icon="movie_filter" topic="Acting" expert="Hadiya Hussein" image="/images/placeholders/acting-1.webp" expertId="hadiya-hussein" />
                                    <TopicCard icon="functions" topic="Physics" expert="Devika Patel" image="/images/placeholders/physics-1.webp" expertId="devika-patel" />
                                    <TopicCard icon="linked_camera" topic="Photography" expert="Aisha Malhotra" image="/images/placeholders/photography-1.webp" expertId="aisha-malhotra" />

                                    <TopicCard icon="house" topic="Architecture" expert="Julie Maxwell" image="/images/placeholders/architecture-2.webp" expertId="julie-maxwell" />
                                    <TopicCard icon="brush" topic="Painting" expert="Maya Parker" image="/images/placeholders/painting-2.webp" expertId="maya-parker" />
                                    <TopicCard icon="movie_filter" topic="Acting" expert="Hadiya Hussein" image="/images/placeholders/acting-2.webp" expertId="hadiya-hussein" />
                                    <TopicCard icon="functions" topic="Physics" expert="Devika Patel" image="/images/placeholders/physics-2.webp" expertId="devika-patel" />
                                    <TopicCard icon="linked_camera" topic="Photography" expert="Aisha Malhotra" image="/images/placeholders/photography-2.webp" expertId="aisha-malhotra" />

                                    <TopicCard icon="house" topic="Architecture" expert="Julie Maxwell" image="/images/placeholders/architecture-3.webp" expertId="julie-maxwell" />
                                    <TopicCard icon="brush" topic="Painting" expert="Maya Parker" image="/images/placeholders/painting-3.webp" expertId="maya-parker" />
                                    <TopicCard icon="movie_filter" topic="Acting" expert="Hadiya Hussein" image="/images/placeholders/acting-3.webp" expertId="hadiya-hussein" />
                                    <TopicCard icon="functions" topic="Physics" expert="Devika Patel" image="/images/placeholders/physics-3.webp" expertId="devika-patel" />
                                    <TopicCard icon="linked_camera" topic="Photography" expert="Aisha Malhotra" image="/images/placeholders/photography-3.webp" expertId="aisha-malhotra" />

                                    <TopicCard icon="house" topic="Architecture" expert="Julie Maxwell" image="/images/placeholders/architecture-4.webp" expertId="julie-maxwell" />
                                    <TopicCard icon="brush" topic="Painting" expert="Maya Parker" image="/images/placeholders/painting-4.webp" expertId="maya-parker" />
                                    <TopicCard icon="movie_filter" topic="Acting" expert="Hadiya Hussein" image="/images/placeholders/acting-4.webp" expertId="hadiya-hussein" />
                                    <TopicCard icon="functions" topic="Physics" expert="Devika Patel" image="/images/placeholders/physics-4.webp" expertId="devika-patel" />
                                    <TopicCard icon="linked_camera" topic="Photography" expert="Aisha Malhotra" image="/images/placeholders/photography-4.webp" expertId="aisha-malhotra" />
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