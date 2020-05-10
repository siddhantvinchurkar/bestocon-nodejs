const ExpertCard = ({ expert, title, image, current }) => (
    <div className={current === 'true' ? 'hidethis' : ''}>
        <div className="col s12 m12 l3 xl3">
            <div className="card double-padded z-depth-3">
                <div className="center-align"><img alt="BestoCon" className="lazyload resonsive-img circle expert-img z-depth-3" data-src={image}></img></div>
                <h4 className="text-color-primary center-align">{expert}</h4>
                <h5 className="text-color-primary-dark center-align">{title}</h5>
                <p className="center-align">I'm an expert in a field. I can do expert things. My bio has the word expert <b>three times</b> in it.</p>
            </div>
        </div>
    </div >
);

export default ExpertCard;