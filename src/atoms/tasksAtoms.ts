import { atomWithStorage } from "jotai/utils";
import { Task } from "../types/Task";

export const tasksAtom = atomWithStorage<Task[]>("tasks", []);
export const tasksLoaded = atomWithStorage<boolean>("tasksLoaded", false);