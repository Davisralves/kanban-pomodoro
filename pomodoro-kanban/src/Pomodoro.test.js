import { render, screen } from '@testing-library/react';
import App from './App';
import PomodoroTimer from './Components/PomodoroTimer';

describe('Testa cronometro pomodoro', () => {
  
  test('Testa se existe titulo Pomodoro Timer', () => {
    render(<PomodoroTimer />);
    const title = screen.getByRole('heading', {name: 'Pomodoro Timer'});
    expect(title).toBeInTheDocument();
  });
  test('Testa se existe um contador', () => {
    render(<PomodoroTimer />);
    const timer = screen.getByTestId('Timer');
    expect(timer).toBeInTheDocument();
  });
})

