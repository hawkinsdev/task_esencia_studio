export type TaskStatus = "pending" | "in-progress" | "completed"

export interface Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
}

export interface TaskDefault {
    userId: number
    id: number,
    title: string
    completed: boolean 
}