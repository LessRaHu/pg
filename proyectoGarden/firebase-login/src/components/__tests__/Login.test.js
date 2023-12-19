import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Login } from '../components/Login/Login.jsx';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {jest} from '@jest/globals'

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

describe('Login component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should handle successful authentication', async () => {
    render(<Login />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'lessiel.rh@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'Contraseña válida' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'less@gmail.com',
        'Contraseña válida'
      );
    });

  });

  it('should handle incorrect password error', async () => {
    signInWithEmailAndPassword.mockRejectedValue({
      code: 'auth/wrong-password',
      message: 'Contraseña incorrecta',
    });

    render(<Login />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'less@gmail.com' },
    });
    fireEvent.change(screen.getByLabelText('Contraseña'), {
      target: { value: 'Contraseña incorrecta' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        expect.anything(),
        'less@gmail.com',
        'Contraseña incorrecta'
      );
      expect(screen.getByText('Contraseña incorrecta')).toBeInTheDocument();
    });
  });

  

});
