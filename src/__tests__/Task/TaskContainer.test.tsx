
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskContainer } from '../../containers/Task';
import { Provider } from 'jotai';
import '@testing-library/jest-dom';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

//mocked la simulación de la respuesta del endpoint
const server = setupServer(
  http.get('https://jsonplaceholder.typicode.com/todos', () => {
    return HttpResponse.json([
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ])
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('TaskContainer', () => {
  it('debería renderizar las tareas correctamente', async () => {
    render(
      <Provider>
        <TaskContainer />
      </Provider>
    );

    // Simula hacer clic en "Cargar tareas"
    fireEvent.click(screen.getByText('Cargar tareas'));

    // Espera a que se carguen las tareas
    await screen.findByText('Task 1');

    // Verifica que las tareas estén en pantalla
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('debería mostrar los botones de editar y eliminar', async () => {
    render(
      <Provider>
        <TaskContainer />
      </Provider>
    );

    // Simula hacer clic en "Cargar tareas"
    fireEvent.click(screen.getByText('Cargar tareas'));

    // Espera a que se carguen las tareas
    await screen.findByText('Task 1');

    // Verifica que los botones están presentes
    expect(screen.getAllByText('Editar')).toHaveLength(2);
    expect(screen.getAllByText('Eliminar')).toHaveLength(2);
  });

  it('debería cargar tareas desde localStorage', () => {
    const mockTasks = [
      { id: 1, title: 'Task 1', description: 'Task description', status: 'pending' },
      { id: 2, title: 'Task 2', description: 'Another task', status: 'completed' }
    ];
  
    // Simula la persistencia en localStorage
    localStorage.setItem('tasks', JSON.stringify(mockTasks)); 
  
    render(
      <Provider>
        <TaskContainer />
      </Provider>
    );
  
    // Verifica que las tareas se han cargado correctamente
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
});
});