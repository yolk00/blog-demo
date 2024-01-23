import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer--container">
      <h2>Learn more with Blog Title</h2>
      <p>
        Get tips, exclusive offers, and endless inspiration sent to your inbox.
      </p>
      <div className="footer--form">
        <input type="email" placeholder="Email" />
        <input type="submit" value="&#8594;" />
      </div>

      <div className="footer--sns--container">
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="xl" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faBandcamp} size="xl" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faYoutube} size="xl" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="xl" />
        </a>
      </div>
    </footer>
  );
}
