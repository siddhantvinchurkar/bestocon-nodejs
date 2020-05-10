import { Helmet } from 'react-helmet';
import Headdie from './Headdie';
import Header from './Header';
import Footer from './Footer';

const Layout = props => (
    <div id="rootDiv">
        <Headdie />
        <Header />
        <Helmet>
            <html lang="en-IN" />
        </Helmet>
        {props.children}
        <Footer />
    </div>);

export default Layout;