import React from 'react';
import { Task } from '../../types/Task';
import { Table, Button } from 'antd';

interface Props {
  tasks: Task[]
  handleEditTask: (task: Task) => void;
  handleDeleteTask: (taskId: number) => void;
}

const TaskList: React.FC<Props> = ({
  tasks,
  handleEditTask,
  handleDeleteTask
}) => {

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Descripción',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Estado',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_: any, task: Task) => (
        <div className="flex space-x-2">
          <Button onClick={() => handleEditTask(task)} type="primary">Editar</Button>
          <Button onClick={() => handleDeleteTask(task.id)} type='primary' danger>Eliminar</Button>
        </div>
      ),
    },
  ];

  return <Table dataSource={tasks} columns={columns} rowKey="id" />;
};

export default TaskList;
