import React from 'react'

import Typography from '@material-ui/core/Typography'

const Emoji = props => {
  return (
    <div>
      <img src={props.emoji} alt="emoji" className="emoji" />
      <Typography variant="subtitle2" className="footer">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/roundicons"
          title="Roundicons"
        >
          Roundicons
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          {" "}
          www.flaticon.com
        </a>
      </Typography>
    </div>
  );
}

export default Emoji