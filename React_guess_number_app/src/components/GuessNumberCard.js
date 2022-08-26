import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Alert from "@mui/material/Alert";



let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

const GuessNumberCard = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const [results, setResult] = useState("");

  const onClick = () => {
    // check users guess against random number
    const userGuess = value;
    // do not set to strictly equal, input will not work if string number is passed
    if (userGuess == randomNumber)
      setResult(
        <Alert severity="success">
          Congratulations! You got it right! <span>😊</span>
        </Alert>
      );
    else if (userGuess > randomNumber)
      setResult(
        <Alert severity="error">
          Too high, guess again <span>😵</span>
        </Alert>
      );
    else if (userGuess < randomNumber)
      setResult(
        <Alert severity="warning">
          Too low, guess again <span>😟</span>
        </Alert>
      );
    else setResult("");
  };

  return (
    <div className="cardContainer">
      <Card sx={{ minWidth: 275 }}>
        <CardContent style={{ backgroundColor: "teal" }}>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            Guess The Number
          </Typography>

          <Typography variant="body2">
            We have selected a random number between 1 and 10. We'll tell you if
            your guess was too high or too low.
          </Typography>
          <h4 className="h5">
            {" "}
            Enter a guess
            <input value={value} type="number" onChange={onChange} />
            <button type="submit" onClick={onClick}>
              Guess
            </button>
          </h4>
          <br />
          <br />
          {results}
        </CardContent>
      </Card>
    </div>
  );
};

export default GuessNumberCard;
