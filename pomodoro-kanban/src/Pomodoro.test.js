import { render, screen } from '@testing-library/react';
import App from './App';

describe('Testa cronometro pomodoro', () => {
  
  test('Testa se existe titulo Pomodoro Timer', () => {
    render(<App />);
    const title = screen.getByRole('heading', {value: 'Pomodoro timer'});
    expect(title).toBeInTheDocument();
  });
})

