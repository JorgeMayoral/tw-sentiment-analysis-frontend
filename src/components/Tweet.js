import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from '@material-ui/core/Avatar'

function Tweet(props) {
  const userProfileUrl = `https://twitter.com/${props.user.screen_name}`
  const tweetUrl = `https://twitter.com/${props.user.screen_name}/status/${props.tweetId}`;
  return (
    <div className="container">
      <Card className="card tweet">
        <CardContent className="cardContent">
          <Avatar
            alt="Twitter profile picture"
            src={props.user.profile_image_url}
          />
          <a href={userProfileUrl} target="_blank" rel="noopener noreferrer">
            <Typography variant="h5">{props.user.name}</Typography>
          </a>
          <Typography variant="h6">{props.text}</Typography>
          <Typography variant="subtitle1" className="hint">
            {props.created_at}
          </Typography>
          <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
            <Typography variant="subtitle2">Open tweet</Typography>
          </a>
        </CardContent>
      </Card>
      <br />
    </div>
  );
}

export default Tweet