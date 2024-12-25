import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from '../../components/Task/TaskForm';
import { Form } from 'antd';
import '@testing-library/jest-dom';
import { Task } from '../../types/Task';

describe('TaskForm', () => {
  const form = Form.useForm<Task>()[0];
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Form form={form} layout="vertical">
        <TaskForm form={form} addTask={jest.fn()} visible={true} onClose={jest.fn()} />
      </Form>
    );
  });

  it('debería mostrar los campos de título, descripción y estado', () => {
    expect(screen.getByLabelText('Título')).toBeInTheDocument();
    expect(screen.getByLabelText('Descripción')).toBeInTheDocument();
    expect(screen.getByLabelText('Estado')).toBeInTheDocument();
  });

  it('debería disparar validaciones al enviar un formulario inválido', async () => {
    fireEvent.click(screen.getByText('Agregar'));

    expect(await screen.findByText("'title' is required")).toBeInTheDocument();
    expect(await screen.findByText("'description' is required")).toBeInTheDocument();
  });
});
