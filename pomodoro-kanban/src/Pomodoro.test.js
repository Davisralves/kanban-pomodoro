import { fireEvent, render, screen } from '@testing-library/react';
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
  test('testa se o botão de start funciona corretamente', async () => {
    render(<PomodoroTimer/>);
    const button = screen.getByRole('button', {name: 'Start'});
    expect(button).toBeInTheDocument();

    fireEvent(button, new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }));
    expect(button.textContent).toBe('Stop');
  })
})

