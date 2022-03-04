import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export default function Timer() {
	const [counter, setCounter] = useState(10);
	const [button, setButton] = useState(false);

	const timer = () => {
		let interval: NodeJS.Timer = null;
		const oneSecond = 1000;
		if (button) {
			interval = setInterval(
				() => setCounter((counter) => (counter > 0 ? counter - 1 : 0)),
				oneSecond
			);
		}
		return () => clearInterval(interval);
	};

	useEffect(timer, [button]);

	return (
		<section id='TimerSection'>
      <div className="flexbox">
			<h1 data-testid="Timer">{counter}</h1>
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
