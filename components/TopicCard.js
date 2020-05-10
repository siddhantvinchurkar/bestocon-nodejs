import Link from "next/link";

const TopicCard = ({ icon, topic, expert, image, expertId }) => (
    <div>
        <div className="col s12 m12 l3 xl3">
            <Link href={'expert/' + expertId}>
                <div className="card z-depth-5">
                    <div className="card-content">
                        <div className="card-image">
                            <img alt="BestoCon" className="lazyload responsive-img" data-src={image}></img>
                            <div className="card-title">
                                <div className="card-title-content">
                                    <h5 className="valign-wrapper"><i className="text-color-primary-dark material-icons left">{icon}</i>{topic}</h5>
                                    <h6 className="valign-wrapper"><i className="text-color-primary-dark material-icons left">how_to_reg</i>{expert}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
);

export default TopicCard;