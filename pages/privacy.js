import ReactDOMServer from 'react-dom/server';
import Layout from '../components/BaseLayout';
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
        script.src = "/scripts/privacy.js";
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => { reactLoad(); }
    }
    render() {
        return (
            <Layout>
                <NoScript />
                <main>
                    <div id="patos-tt" className="tap-target" data-target="patos-ttt">
                        <div className="tap-target-content">
                            <h6 className="bold">Download Privacy Policy and ToS</h6>
                            <p>Click here to download a copy of the Privacy Policy and Terms of Service as a text file.</p>
                        </div>
                    </div>
                    <div className="fixed-action-btn tooltipped" data-tooltip="Download as a text file" data-position="left">
                        <Link href="/patos.txt"><a id="patos-ttt" target="_blank" rel="noreferrer" title="Download as a text file" aria-label="Download as a text file" className="btn-floating btn-large color-primary-dark z-depth-5"><i className="large material-icons">get_app</i></a></Link>
                    </div>
                    <div className="row">
                        <div className="col s12 m12 l10 xl10 offset-l1 offset-xl1">
                            <h2>Privacy Policy</h2>
                            <p>Your privacy is important to us. It is Bestocon, Inc.'s policy to respect your privacy regarding any information we may collect from you across our website, <Link href="/"><a rel="noreferrer" title="Bestocon" aria-label="Bestocon" className="basic-link">https://bestocon.com/</a></Link>, and other sites we own and operate.</p>
                            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
                            <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.</p>
                            <p>We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                            <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
                            <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
                            <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
                            <p>This policy is effective as of 9 May 2020.</p>
                            <br />
                            <br />
                            <h2>Bestocon, Inc. Terms of Service</h2>
                            <h3>1. Terms</h3>
                            <p>By accessing the website at <Link href="/"><a rel="noreferrer" title="Bestocon" aria-label="Bestocon" className="basic-link">https://bestocon.com/</a></Link>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                            <h3>2. User Licence</h3>
                            <ol type="a">
                                <li>Permission is granted to temporarily download one copy of the materials (information or software) on Bestocon, Inc.'s website for personal, non-commercial transitory viewing only. This is the grant of a licence, not a transfer of title, and under this licence you may not:
   <ol type="i">
                                        <li>modify or copy the materials;</li>
                                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                        <li>attempt to decompile or reverse engineer any software contained on Bestocon, Inc.'s website;</li>
                                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                    </ol>
                                </li>
                                <li>This licence shall automatically terminate if you violate any of these restrictions and may be terminated by Bestocon, Inc. at any time. Upon terminating your viewing of these materials or upon the termination of this licence, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>
                            </ol>
                            <h3>3. Disclaimer</h3>
                            <ol type="a">
                                <li>The materials on Bestocon, Inc.'s website are provided on an 'as is' basis. Bestocon, Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
                                <li>Further, Bestocon, Inc. does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>
                            </ol>
                            <h3>4. Limitations</h3>
                            <p>In no event shall Bestocon, Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bestocon, Inc.'s website, even if Bestocon, Inc. or a Bestocon, Inc. authorised representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                            <h3>5. Accuracy of materials</h3>
                            <p>The materials appearing on Bestocon, Inc.'s website could include technical, typographical, or photographic errors. Bestocon, Inc. does not warrant that any of the materials on its website are accurate, complete or current. Bestocon, Inc. may make changes to the materials contained on its website at any time without notice. However Bestocon, Inc. does not make any commitment to update the materials.</p>
                            <h3>6. Links</h3>
                            <p>Bestocon, Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Bestocon, Inc. of the site. Use of any such linked website is at the user's own risk.</p>
                            <h3>7. Modifications</h3>
                            <p>Bestocon, Inc. may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                            <h3>8. Governing Law</h3>
                            <p>These terms and conditions are governed by and construed in accordance with the laws of Bengaluru, Karnataka, India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
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