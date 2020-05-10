import Link from 'next/link';

const Footer = () => (
    <div>
        <footer className="page-footer z-depth-3">
            <div className="row">
                <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                    <div className="row valign-wrapper">
                        <div className="col s12 m12 l6 xl6">
                            <Link href="/"><a rel="noreferrer" title="Bestocon" aria-label="Bestocon" ><img alt="Bestocon" className="lazyload responsive-img" data-src="/images/icons/logo/206x55.webp"></img></a></Link>
                            <h4 className="black-text">Connect with the right people.</h4>
                            <h5 className="black-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet dictum est, at gravida felis.</h5>
                        </div>
                        <div className="col s12 m12 l6 xl6">
                            <div className="row top-offset-quadruple">
                                <div className="col s12 m12 l6 xl6">
                                    <ul>
                                        <li><Link href="/topics"><a rel="noreferrer" title="Our Topics" aria-label="Our Topics" className="valign-wrapper footer-link"><i className="material-icons left">title</i>Our Topics</a></Link></li>
                                        <li><Link href="/experts"><a rel="noreferrer" title="Our Experts" aria-label="Our Experts" className="valign-wrapper footer-link"><i className="material-icons left">how_to_reg</i>Our Experts</a></Link></li>
                                        <li><Link href="/about"><a rel="noreferrer" title="About Us" aria-label="About Us" className="valign-wrapper footer-link"><i className="material-icons left">supervised_user_circle</i>About Us</a></Link></li>
                                    </ul>
                                </div>
                                <div className="col s12 m12 l6 xl6">
                                    <ul>
                                        <li><Link href="/contact"><a rel="noreferrer" title="Contact Us" aria-label="Contact Us" className="valign-wrapper footer-link"><i className="material-icons left">contacts</i>Contact Us</a></Link></li>
                                        <li><Link href="//docs.bestocon.wildscript.tech/"><a target="_blank" rel="noreferrer" title="Documentation" aria-label="Documentation" className="valign-wrapper footer-link"><i className="material-icons left">description</i>Documentation</a></Link></li>
                                        <li><Link href="/privacy"><a target="_blank" rel="noreferrer" title="Privacy Policy and ToS" aria-label="Privacy Policy and ToS" className="valign-wrapper footer-link"><i className="material-icons left">gavel</i>Privacy Policy and ToS</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container black-text">
                    &copy; <span id="footerYear">2020</span> <Link href="/"><a rel="noreferrer" title="Bestocon, Inc." aria-label="Bestocon, Inc." className="footer-footer-link bold">Bestocon, Inc.</a></Link>
                    <Link href="/privacy"><a rel="noreferrer" title="Privacy Policy and ToS" aria-label="Privacy Policy and ToS" className="valign-wrapper right footer-footer-link"><i className="material-icons left">gavel</i>Privacy Policy and ToS</a></Link>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
