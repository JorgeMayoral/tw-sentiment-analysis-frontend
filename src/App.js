import React, { useState } from "react";

// Material UI imports
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

// Icons

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [language, setLanguage] = useState("en")
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false)
  const [score, setScore] = useState(0)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  }

  const handleSend = () => {
    setIsSended(true)
    setIsLoading(true)
  }

  return (
    <div>
      <Typography variant="h1">Twitter Sentiment Analysis</Typography>
      <form noValidate autoComplete="off">
        <TextField placeholder="Search term" onChange={handleSearchTermChange} />
        <FormControl component="fieldset">
          <FormLabel component="legend">Language</FormLabel>
          <RadioGroup aria-label="language" name="languageSelect" onChange={handleLanguageChange}>
            <FormControlLabel value="en" control={<Radio />} label="English" />
            <FormControlLabel value="es" control={<Radio />} label="Spanish" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" onClick={handleSend}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default App;
