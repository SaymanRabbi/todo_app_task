import { create } from "zustand";
import { TaskTypes } from "../Types";
interface taskInterface {
    task:TaskTypes[];
    addTask:(task:TaskTypes)=>void;
    deleteTask:(id:string)=>void;
    updateTask:(id:string,task:TaskTypes)=>void;
    success: boolean;
    error: boolean;
    successMessage: string;
    errorMessage: string;
    clearMessage:()=>void;
   completeTask:(id:string)=>void;
}

export const useTaskStore = create<taskInterface>((set) => ({
    task: [],
    success: false,
    error: false,
    successMessage: "",
    errorMessage: "",
    addTask: (task) => set((state) => ({ task: [...state.task, task],
     success: true,
     error: false,
     successMessage: "Task added successfully",
     errorMessage: ""
    })),
    deleteTask: (id) => set((state) => ({ task: state.task.filter((task) => task.id !== id), success: true, error: false, successMessage: "Task deleted successfully", errorMessage: ""
    })),
    updateTask: (id) => set((state) => ({ task: state.task.map((task) => (task.id === id ? { ...task, ...task } : task)),
        success: true,
        error: false,
        successMessage: "Task updated successfully",
        errorMessage: ""
})),
    clearMessage: () => set(() => ({ success: false, error: false, successMessage: "", errorMessage: "" })),
    completeTask: (id) => set((state) => ({ task: state.task.map((task) => (task.id === id ? { ...task, status: "Completed" } : task)), success: true, error: false, successMessage: "Task completed successfully", errorMessage: ""
    })),
}));
