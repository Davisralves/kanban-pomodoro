import React, { useState, useEffect } from "react";

export default function Timer() {
	const [counter, setCounter] = useState(10);
	const [button, setButton] = useState(false);

	const timer = () => {
    let interval = null;
		const oneSecond = 1000;
		if (button) {
			interval = setInterval(() => setCounter((counter) => counter > 0 ? counter - 1 : 0), oneSecond);
		} return () => clearInterval(interval)
	};

	useEffect(timer, [button]);

	return (
		<section>
			<div data-testid="Timer">timer</div>
			<span>{counter}</span>
			<button onClick={() => setButton(!button)}>
				{button ? "Stop" : "Start"}
			</button>
		</section>
	);
}
