import Link from "next/link";

const TopicCardMini = ({ topic, icon, expert, image, id }) => (
    <div>
        <Link href={'/expert/' + id}>
            <a rel="norefererr" title={expert} aria-label={expert}>
                <div className={'col s12 m12 l2 xl2' + (expert === 'Julie Maxwell' ? ' offset-l1 offset-xl1' : '')}>
                    <div className="card z-depth-3">
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
                </div>
            </a>
        </Link>
    </div >
);

export default TopicCardMini;