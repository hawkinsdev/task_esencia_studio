import React from 'react';
import { Modal, Form, Input, Select, Button } from 'antd';
import { FormInstance } from 'antd/es/form';
import { Task } from '../../types/Task';

interface Props {
  form: FormInstance;
  addTask: (task: Task) => void;
  visible: boolean; 
  onClose: () => void; 
  taskToEdit?: Task | null
}

const TaskForm: React.FC<Props> = ({
  form,
  addTask,
  visible,
  onClose,
  taskToEdit,
}) => {

  return (
    <Modal
      title={taskToEdit ? 'Editar Tarea' : 'Nueva Tarea'}
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={addTask}>
        <Form.Item
          label="Título"
          name="title"
          rules={[{ required: true, min: 5}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripción"
          name="description"
          rules={[{ required: true, min: 10 }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Estado"
          name="status"
          rules={[{ required: true }]}
        >
          <Select>
            <Select.Option value="pending">Pendiente</Select.Option>
            <Select.Option value="in-progress">En progreso</Select.Option>
            <Select.Option value="completed">Completada</Select.Option>
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {taskToEdit ? 'Actualizar' : 'Agregar'}
        </Button>
      </Form>
    </Modal>
  );
};

export default TaskForm;
