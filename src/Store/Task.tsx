import { create } from "zustand";
import { TaskTypes } from "../Types";
interface taskInterface {
    task:TaskTypes[];
    addTask:(task:TaskTypes)=>void;
    deleteTask:(id:string)=>void;
    updateTask:(id:string)=>void;
    success: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    clearMessage:()=>void;
   completeTask:(id:string)=>void;
   loading:boolean;
   completeUpdate:(id:string,task:TaskTypes)=>void;
}
// Load tasks from localStorage
const savedTasks = localStorage.getItem("tasks");
const initialTasks = savedTasks ? JSON.parse(savedTasks) : [];
export const useTaskStore = create<taskInterface>((set) => ({
    task: initialTasks,
    success: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    loading:false,
    addTask: (task) =>
      set((state) => {
        const newTasks = [...state.task, task];
        // Save tasks to localStorage
        localStorage.setItem("tasks", JSON.stringify(newTasks));

        return {
          task: newTasks,
          success: true,
          error: false,
          successMessage: "Task added successfully",
          errorMessage: "",
        };
      }),
      deleteTask: (id) =>
      set((state) => {
        const newTasks = state.task.filter((task) => task.id !== id);
        // Save tasks to localStorage
        localStorage.setItem("tasks", JSON.stringify(newTasks));

        return {
          task: newTasks,
          success: true,
          error: false,
          successMessage: "Task deleted successfully",
          errorMessage: "",
        };
      }),
    updateTask: (id) => set((state) => ({ task: state.task.map((task) => (task.id === id ? { ...task,status:"Loading"
     } : task)),
        success: true,
        error: false,
        successMessage: "Task updated successfully",
        errorMessage: ""
})),
    clearMessage: () => set(() => ({ success: false, error: false, successMessage: "", errorMessage: "" })),
    completeTask: (id) => set((state) =>{
        const newTasks = state.task.map((task) =>
            task.id === id ? { ...task, status: "Completed" } : task
        );
        // Save tasks to localStorage
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    
        return {
            task: newTasks,
            success: true,
            error: false,
            successMessage: "Task completed successfully",
            errorMessage: "",
        };
    }),
    completeUpdate: (id, updatedTask) =>
    set((state) => {
      const newTasks = state.task.map((task) =>
        task.id === id ? { ...task, ...updatedTask, status: "Active" } : task
      );
      // Save tasks to localStorage
      localStorage.setItem("tasks", JSON.stringify(newTasks));

      return {
        task: newTasks,
        success: true,
        error: false,
        successMessage: "Task updated successfully",
        errorMessage: "",
      };
    }),
}));
