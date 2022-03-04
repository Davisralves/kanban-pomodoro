import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

const seconds: string[] = [];
for(let index = 59; index >= 0; index -= 1) {
  if(index >= 10) {
    seconds.unshift(index.toString());
  } else seconds.unshift('0' + index.toString())
}
const defaultMinutes = 25;
const minutes = seconds.filter((number) => defaultMinutes >= parseInt(number));
console.log(minutes, seconds);


export default function Timer() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
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
                  return minutes -1
                } else {
                  return endTimer();
                };
              })
              return 60;
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
				<h1 data-testid="Timer">{`${minutes}:${seconds}`}</h1>
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
