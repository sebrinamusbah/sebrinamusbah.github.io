import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Sebrina Musbah — All Rights Reserved.
        </p>
        <p>
          Follow me:
          <a
            href="https://github.com/sebrinamusbah"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          |
          <a href="https://t.me/mzses" target="_blank" rel="noreferrer">
            {" "}
            Telegram{" "}
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
