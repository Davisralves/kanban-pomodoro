export const createSecondsArray = (): string[] => {
  const secondsArray = [];
  for (let index = 59; index >= 0; index -= 1) {
    if (index >= 10) {
      secondsArray.unshift(index.toString());
    } else secondsArray.unshift("0" + index.toString());
  } return secondsArray;
}

export const createMinutesArray = (minutes = 25): string[] => {
  const minutesArray = [];
  for (let index = minutes; index >= 0; index -= 1) {
    if (index >= 10) {
      minutesArray.unshift(index.toString())
    } else minutesArray.unshift("0" + index.toString());
  } return minutesArray;
}
