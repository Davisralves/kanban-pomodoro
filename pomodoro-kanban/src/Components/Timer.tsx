import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const secondsArray: string[] = [];
for(let index = 59; index >= 0; index -= 1) {
  if(index >= 10) {
    secondsArray.unshift(index.toString());
  } else secondsArray.unshift('0' + index.toString())
}
const defaultMinutes = 25;
const minutesArray = secondsArray.filter((number) => defaultMinutes >= parseInt(number));


export default function Timer() {
	const [time, setTime] = useState({minutes: 0, seconds: 10});
	const [button, setButton] = useState(false);

  const endTimer = () => {
    setButton(false);
    return {minutes: 0, seconds: 0};
  }

	const timer = () => {
		let interval: NodeJS.Timer = null;
		const oneSecond = 1000;
		if (button) {
			interval = setInterval(
				() => {
					setTime(({minutes, seconds}) => {
            console.log(minutes, seconds);
            if(seconds > 0) {
              return {minutes, seconds: seconds - 1}
            } else {
              if(minutes > 0) return {minutes: minutes - 1, seconds: 59}
              else return endTimer();
            }
          })
  
        },
				oneSecond
			);
		}
		return () => clearInterval(interval);
	};

	useEffect(timer, [button]);
	return (
		<section id="TimerSection">
			<div className="flexbox">
				<h1 data-testid="Timer">{`${minutesArray[time.minutes]}:${secondsArray[time.seconds]}`}</h1>
			</div>
			<Button
				id="Start"
				onClick={() => setButton(!button)}
				variant="danger"
				size="lg"
			>
				{button ? "Stop" : "Start"}
			</Button>
		</section>
	);
}
