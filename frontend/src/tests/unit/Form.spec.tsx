import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Form from '../../pages/Form';

describe('Componente Form', () => {
  it('should be able to see the input "título da imagem"', () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputTitle = getByTestId('input-title');
    expect(inputTitle).toBeInTheDocument();
  });

  it('should be possible to write in the input "titulo da imagem"', async () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputTitle = getByTestId('input-title');

    expect(inputTitle).toHaveValue('');
    await userEvent.type(inputTitle, 'titulo da imagem');
    expect(inputTitle).toHaveValue('titulo da imagem');
  });

  it('should be able to see the input "seu nome"', () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputName = getByTestId('input-name');
    expect(inputName).toBeInTheDocument();
  });

  it('should be possible to write in the input "seu nome"', async () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputName = getByTestId('input-name');

    expect(inputName).toHaveValue('');
    await userEvent.type(inputName, 'nome do autor');
    expect(inputName).toHaveValue('nome do autor');
  });

  it('should be able to see the file input', () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputFile = getByTestId('image');
    expect(inputFile).toBeInTheDocument();
  });

  it('should be able to upload an image', async () => {
    const { getByTestId } = render(<Form />, { wrapper: BrowserRouter });
    const inputFile = getByTestId('image');
    const fakeFile = new File(['meow'], 'bat.png', { type: 'image/png' });

    await userEvent.upload(inputFile, fakeFile);

    const path = JSON.stringify('C:\fakepath\bat.png').replace(/"/g, '');
    expect(inputFile).toHaveValue(path);
  });
});
