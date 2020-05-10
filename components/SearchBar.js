import Link from "next/link";

const SearchBar = () => (
    <div>
        <div className="card z-depth-3">
            <div className="double-padded">
                <div className="section row valign-wrapper">
                    <div className="col s12 m12 l10 xl10 input-field">
                        <i className="material-icons prefix">search</i>
                        <input placeholder="Search" id="topics_page_search" type="text" className="validate" />
                        {/*<label htmlFor="topics_page_search">Search</label>*/}
                        <span className="helper-text" data-success="Perfect.">For you, we can find anything.</span>
                    </div>
                    <di className="col s12 m12 l2 xl2">
                        <Link href=""><a rel="noreferrer" title="Search" aria-label="Search" className="btn-large z-depth-3 color-primary-dark full-width">Search<i className="material-icons right">search</i></a></Link>
                    </di>
                </div>
            </div>
        </div>
    </div>
);

export default SearchBar;