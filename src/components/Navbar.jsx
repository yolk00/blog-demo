import Media from "react-media";

import gobiLogo from "../images/gobi_logo_1.png";
import NavMenu from "./NavMenu";
import BurgerNav from "./BurgerNav";
import { Fragment } from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <a href="#" className="nav--logo--wrapper">
          <img src={gobiLogo} alt="cobeau-gobi-logo" />
        </a>
      </div>
      <Media
        queries={{
          tablet: "(max-width: 1199px)",
          desktop: "(min-width: 1200px)",
        }}
      >
        {(matches) => (
          <Fragment>
            {matches.tablet && <BurgerNav />}
            {matches.desktop && <NavMenu />}
          </Fragment>
        )}
      </Media>
    </nav>
  );
}
