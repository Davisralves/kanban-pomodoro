import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { createSecondsArray, createMinutesArray } from "../helpers/helpers";

const secondsArray: string[] = createSecondsArray();
const minutesArray: string[] = createMinutesArray();

export default function Timer() {
	const [time, setTime] = useState({ minutes: 0, seconds: 10 });
	const [button, setButton] = useState(false);

	const endTimer = () => {
		setButton(false);
		window.alert("Tempo finalizado");
		return { minutes: 0, seconds: 0 };
	};

	const timer = () => {
    let interval: NodeJS.Timer | null = null;
    const oneSecond = 1000;
		if (button) {
			interval = setInterval(() => {
				setTime(({ minutes, seconds }) => {
					if (seconds > 0) {
						return { minutes, seconds: seconds - 1 };
					} else {
						if (minutes > 0) return { minutes: minutes - 1, seconds: 59 };
						else return endTimer();
					}
				});
			}, oneSecond);
		}
    if(interval) return clearInterval(interval)
	};

	useEffect(timer, [button]);

	return (
		<section id="TimerSection">
			<div className="flexbox">
				<h1 data-testid="Timer">{`${minutesArray[time.minutes]}:${
					secondsArray[time.seconds]
				}`}</h1>
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
