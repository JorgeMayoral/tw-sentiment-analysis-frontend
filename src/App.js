import React, { useState } from "react";
import axios from "axios";

import Emoji from "./components/Emoji";
import Header from "./components/Header";
import Tweet from "./components/Tweet";
import "./styles.css";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormGroup from "@material-ui/core/FormGroup";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import Switch from "@material-ui/core/Switch";

// Images
import angry from "./img/angry.svg";
import sad from "./img/sad.svg";
import neutral from "./img/neutral.svg";
import happy from "./img/happy.svg";
import veryHappy from "./img/veryHappy.svg";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [score, setScore] = useState(0);
  const [emoji, setEmoji] = useState(neutral);
  const [language, setLanguage] = useState("en");
  const [allTweets, setAllTweets] = useState([{}]);
  const [showTweets, setShowTweets] = useState(false);

  const selectEmoji = (score) => {
    if (score === 0) {
      setEmoji(neutral);
    } else if (score < 0 && score >= -0.5) {
      setEmoji(sad);
    } else if (score < -0.5 && score >= -1) {
      setEmoji(angry);
    } else if (score > 0 && score <= 0.5) {
      setEmoji(happy);
    } else if (score > 0.5 && score <= 1) {
      setEmoji(veryHappy);
    } else {
      setEmoji(neutral); // Shouldn't occur, just in case
    }
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleRestart = () => {
    setSearchTerm("");
    setIsLoading(false);
    setIsSended(false);
    setScore(0);
  };

  const handleSend = async () => {
    setIsSended(true);
    setIsLoading(true);
    const scoreReceived = await axios.post("/api/analyze", {
      searchTerm: searchTerm,
      language: language,
    });
    await setIsLoading(false);
    const scoreShown = scoreReceived.data.score;
    selectEmoji(scoreReceived.data.score);
    await setScore(scoreShown);
    setAllTweets(scoreReceived.data.tweets);
    //console.log(scoreReceived.data.tweets[0]);
  };

  return (
    <div>
      <Header />
      <div>
        {isSended ? (
          isLoading ? (
            <div className="container">
              <CircularProgress size={100} />
            </div>
          ) : (
            <div className="container">
              <Card className="card">
                <CardContent className="cardContent">
                  <Typography variant="h5">
                    {searchTerm} has a sentiment score of {score.toFixed(2)} on
                    Twitter.
                  </Typography>
                  <Typography variant="subtitle1" className="hint">
                    The score is value between -1 and 1, this value determines
                    how negative or possitive are the 100 tweets analyzed
                    respect to the given search term.
                  </Typography>
                  <br />
                  <Emoji emoji={emoji} />
                  <FormGroup className="container">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleRestart}
                      className="button"
                    >
                      Restart
                    </Button>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={showTweets}
                          onChange={() => setShowTweets(!showTweets)}
                          color="primary"
                        />
                      }
                      label="Show Tweets"
                    />
                  </FormGroup>
                </CardContent>
              </Card>
              {showTweets ? (
                allTweets.map((tweet, i) => (
                  <Tweet
                    text={tweet.text}
                    user={tweet.user}
                    created_at={tweet.created_at}
                    tweetId = {tweet.id_str}
                    key={i}
                  />
                ))
              ) : (
                <div />
              )}
            </div>
          )
        ) : (
          <Card className="card container">
            <CardContent className="cardContent">
              <FormGroup>
                <FormControl fullWidth className="form">
                  <TextField
                    placeholder="Write the term you want to analyze"
                    onChange={handleSearchTermChange}
                    className="textField"
                    label="Search term"
                    variant="outlined"
                    fullWidth
                  />
                  <FormControl>
                    <InputLabel>Language</InputLabel>
                    <Select
                      onChange={handleLanguageChange}
                      defaultValue="en"
                      label="Language"
                      className="select"
                      fullWidth
                    >
                      <MenuItem value="en">English</MenuItem>
                      <MenuItem value="es">Spanish</MenuItem>
                    </Select>
                  </FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSend}
                    className="button"
                    fullWidth
                  >
                    Send
                  </Button>
                </FormControl>
              </FormGroup>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
