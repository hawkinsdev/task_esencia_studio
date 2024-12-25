import React, { useState, useEffect } from "react";
import { Button, Form } from 'antd';
import { useAtom } from "jotai";
import TaskTable from "../../components/Task/TaskTable";
import TaskForm from "../../components/Task/TaskForm";
import { Task, TaskDefault } from "../../types/Task";
import { tasksAtom, tasksLoaded } from "../../atoms/tasksAtoms";

export const TaskContainer: React.FC = () => {
  const [tasks, setTasks] = useAtom(tasksAtom);
  const [taskLoaded, setTaskLoaded] = useAtom(tasksLoaded);
  const [openModal, setOpenModel] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<Task | null>(null);
  const [form] = Form.useForm<Task>();

  useEffect(() => {
    if (taskToEdit) {
      form.setFieldsValue(taskToEdit);
      return
    }
    
    form.resetFields();
  }, [taskToEdit, form]);

  const handleOpenModal = () => {
    setOpenModel(!openModal);
    setTaskToEdit(null);
  };

  const handleFetchTasks = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      if (!response.ok) {
        throw new Error(`Error al obtener las tareas: ${response.statusText}`);
      }

      const data: TaskDefault[] = await response.json();
      const tasks: Task[] = data.map(task => ({
        id: task.id,
        title: task.title,
        description: "Tarea importada",
        status: task?.completed ? "completed" : "pending"
      }));

      setTasks(tasks.slice(0, 5));
      setTaskLoaded(true)
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
    }
  };

  const addTask = () => {
    form.validateFields().then((values) => {
      if (taskToEdit) {
        const updatedTasks = tasks.map(task =>
          task.id === taskToEdit.id ? { ...task, ...values } : task
        );
        setTasks(updatedTasks);
      } else {
        setTasks([
          ...tasks,
          {
            ...values,
            id: Date.now(),
          },
        ]);
      }
      setOpenModel(false);
      form.resetFields()
    });
  };

  const handleEditTask = (task: Task) => {
    setTaskToEdit(task);
    setOpenModel(true);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task: Task) => task.id !== id));
  };

  return (
    <div>

      <div className="flex gap-2 justify-end">
        {
          (!taskLoaded) && 
          <Button onClick={handleFetchTasks} className="mb-2 bg-slate-500" type="primary" color="default">Cargar tareas</Button>
        }
        <Button onClick={handleOpenModal} className="mb-2 bg-green-500" type="primary" >Nuevo +</Button>
      </div>

      <TaskTable 
        tasks={tasks}
        handleEditTask={handleEditTask} 
        handleDeleteTask={deleteTask} 
      />

      <TaskForm
        form={form}
        visible={openModal} 
        taskToEdit={taskToEdit} 
        addTask={addTask}
        onClose={handleOpenModal} 
      />
    </div>
  );
};
