import React from "react"

export default function Today(props) {
  const style = {
    ...props.style,
    textAlign: "center",
    color: "white",
    fontSize: "22px"
  };

  var d = new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday 🖖";
  weekday[1] = "Monday 💪😀";
  weekday[2] = "Tuesday 😜";
  weekday[3] = "Wednesday 😌☕️";
  weekday[4] = "Thursday 🤗";
  weekday[5] = "Friday 🍻";
  weekday[6] = "Saturday 😴";
  var n = weekday[d.getDay()];
  var randomWordArray = [
    "Oh my, it's ",
    "Whoop, it's ",
    "Happy ",
    "Seems it's ",
    "Awesome, it's ",
    "Have a nice ",
    "Happy fabulous ",
    "Enjoy your "
  ];
  var randomWord =
    randomWordArray[Math.floor(Math.random() * randomWordArray.length)];

  return <div style={style}>{randomWord + n}</div>;
}