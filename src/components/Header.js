import React from "react";

// Material UI imports
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography'

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import MailIcon from "@material-ui/icons/Mail";
import WebIcon from "@material-ui/icons/Language";

function Header() {
  return (
    <header className="header">
      <a
        href="https://y0rch.com"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <IconButton>
          <WebIcon />
        </IconButton>
      </a>
      <a
        href="https://github.com/JorgeMayoral"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <IconButton>
          <GitHubIcon />
        </IconButton>
      </a>
      <a
        href="https://twitter.com/jomaal93"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </a>
      <a
        href="mailto:contacto@y0rch.com"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
      >
        <IconButton>
          <MailIcon />
        </IconButton>
      </a>
      <Typography variant="h2" className="title">Twitter Sentiment Analysis</Typography>
    </header>
  );
}

export default Header;
