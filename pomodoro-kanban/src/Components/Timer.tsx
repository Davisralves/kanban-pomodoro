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
console.log(minutesArray, secondsArray);


export default function Timer() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(25);
	const [button, setButton] = useState(false);

  const endTimer = (): number => {
    setButton(false);
    return 0;
  }

	const timer = () => {
		let interval: NodeJS.Timer = null;
		const oneSecond = 1000;
		if (button) {
			interval = setInterval(
				() =>
					setSeconds((seconds) => {
						if (seconds > 0) {
							return seconds - 1;
						}
						else {
              setMinutes((minutes) => {
                if(minutes > 0) {
                  return minutes - 1
                } else {
                  return endTimer();
                };
              })
              return 59;
            };
					}),
				oneSecond
			);
		}
		return () => clearInterval(interval);
	};

	useEffect(timer, [button]);
	return (
		<section id="TimerSection">
			<div className="flexbox">
				<h1 data-testid="Timer">{`${minutes}:${secondsArray[seconds]}`}</h1>
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
