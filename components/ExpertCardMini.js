const ExpertCardMini = ({ expert, title, image, current }) => (
    <div className={current === 'true' ? 'hidethis' : ''}>
        <div className={'col s12 m12 l2 xl2' + (expert === 'Julie M.' ? ' offset-l1 offset-xl1' : '')}>
            <div className="card double-padded z-depth-3">
                <div className="center-align"><img alt="BestoCon" className="lazyload resonsive-img circle expert-img-mini z-depth-3" data-src={image}></img></div>
                <h4 className="text-color-primary center-align">{expert}</h4>
                <h5 className="text-color-primary-dark center-align">{title}</h5>
                <p className="center-align">I'm an expert in a field. I can do expert things. My bio has the word expert <b>three times</b> in it.</p>
            </div>
        </div>
    </div >
);

export default ExpertCardMini;