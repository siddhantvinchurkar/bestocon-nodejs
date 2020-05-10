import Link from 'next/link';
import { withRouter } from 'next/router';

const Header = ({ router }) => (
    <div>
        <nav className="z-depth-3">
            <div className="nav-wrapper">
                <Link href=""><a rel="noreferrer" title="Menu" aria-label="Menu" className="sidenav-trigger hide-on-large-only black-text" data-target="sidenav"><i className="material-icons double">menu</i></a></Link>
                <Link href="/"><a rel="noreferrer" title="Bestocon" aria-label="Bestocon" className="brand-logo"><img alt="BestoCon" className="lazyload responsive-img" data-src="/images/icons/logo/206x55.webp"></img></a></Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={router.pathname == '/' ? 'active' : ''}><Link href="/"><a rel="noreferrer" title="Home" aria-label="Home" className={router.pathname == '/' ? 'text-color-primary-dark bold' : 'black-text bold'}><i className="material-icons left">home</i>Home</a></Link></li>
                    <li className={router.pathname == '/topics' ? 'active' : ''}><Link href="/topics"><a rel="noreferrer" title="Topics" aria-label="Topics" className={router.pathname == '/topics' ? 'text-color-primary-dark bold' : 'black-text bold'}><i className="material-icons left">title</i>Topics</a></Link></li>
                    <li className={router.pathname == '/experts' ? 'active' : ''}><Link href="/experts"><a rel="noreferrer" title="Experts" aria-label="Experts" className={router.pathname == '/experts' ? 'text-color-primary-dark bold' : 'black-text bold'}><i className="material-icons left">how_to_reg</i>Experts</a></Link></li>
                    <li className={router.pathname == '/about' ? 'active' : ''}><Link href="/about"><a rel="noreferrer" title="About Us" aria-label="About Us" className={router.pathname == '/about' ? 'text-color-primary-dark bold' : 'black-text bold'}><i className="material-icons left">supervised_user_circle</i>About Us</a></Link></li>
                    <li className={router.pathname == '/contact' ? 'active' : ''}><Link href="/contact"><a rel="noreferrer" title="Contact Us" aria-label="Contact Us" className={router.pathname == '/contact' ? 'text-color-primary-dark bold' : 'black-text bold'}><i className="material-icons left">contacts</i>Contact Us</a></Link></li>
                </ul>
            </div>
        </nav>
        <ul id="sidenav" className="sidenav hide-on-large-only">
            <li><div className="user-view">
                <div className="background">
                    <img alt="BestoCon" className="lazyload responsive-img" data-src="images/sidenav-backdrop.webp"></img>
                </div>
                <Link href=""><a><img alt="BestoCon" className="lazyload responsive-img circle" data-src="images/icons/favicon_96.png" /></a></Link>
                <Link href=""><a><span className="white-text name">John Doe</span></a></Link>
                <Link href=""><a><span className="white-text email">jdandturk@gmail.com</span></a></Link>
            </div></li>
            <li><Link href="/"><a rel="noreferrer" title="Home" aria-label="Home" className={router.pathname == '/' ? 'text-color-primary-dark bold waves-effect black-overlay' : 'black-text bold waves-effect'}><i className={router.pathname == '/' ? 'material-icons text-color-primary-dark bold left' : 'material-icons black-text bold left'}>home</i>Home</a></Link></li>
            <li><Link href="/topics"><a rel="noreferrer" title="Topics" aria-label="Topics" className={router.pathname == '/topics' ? 'text-color-primary-dark bold waves-effect black-overlay' : 'black-text bold waves-effect'}><i className={router.pathname == '/topics' ? 'material-icons text-color-primary-dark bold left' : 'material-icons black-text bold left'}>title</i>Topics</a></Link></li>
            <li><Link href="/experts"><a rel="noreferrer" title="Experts" aria-label="Experts" className={router.pathname == '/experts' ? 'text-color-primary-dark bold waves-effect black-overlay' : 'black-text bold waves-effect'}><i className={router.pathname == '/experts' ? 'material-icons text-color-primary-dark bold left' : 'material-icons black-text bold left'}>how_to_reg</i>Experts</a></Link></li>
            <li><Link href="/about"><a rel="noreferrer" title="About" aria-label="About" className={router.pathname == '/about' ? 'text-color-primary-dark bold waves-effect black-overlay' : 'black-text bold waves-effect'}><i className={router.pathname == '/about' ? 'material-icons text-color-primary-dark bold left' : 'material-icons black-text bold left'}>supervised_user_circle</i>About</a></Link></li>
            <li><Link href="/contact"><a rel="noreferrer" title="Contact Us" aria-label="Contact Us" className={router.pathname == '/contact' ? 'text-color-primary-dark bold waves-effect black-overlay' : 'black-text bold waves-effect'}><i className={router.pathname == '/contact' ? 'material-icons text-color-primary-dark bold left' : 'material-icons black-text bold left'}>contacts</i>Contact Us</a></Link></li>
        </ul>
    </div>
);

export default withRouter(Header);
