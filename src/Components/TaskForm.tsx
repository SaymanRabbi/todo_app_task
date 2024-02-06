import { useForm } from "react-hook-form";
import Container from "./Container/Container";
import Button from "./Button/Button";
import { useTaskStore } from "../Store/Task";
interface FormData {
    name: string;
    description: string;
    priority: string;
}
const PriorityList = [
    { value: "high", label: "High" },
    { value: "medium", label: "Medium" },
    { value: "low", label: "Low" },
  ];

const TaskForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormData>();
    const {addTask,clearMessage,successMessage} = useTaskStore((state)=>state);
    const onSubmit = (data: FormData) => {
        const task = {
            name: data.name,
            description: data.description,
            priority: data.priority,
            status: "Active",
            id: Math.random().toString(36).substr(2, 9),
          };
         addTask(task);
    };
    setTimeout(() => {
         if(successMessage==='Task added successfully'){
            clearMessage();
            reset();
         }
    }, 1000);

    return (
        <Container className="h-[100%] w-[98%] mx-auto">
        <div className=" flex flex-wrap mx-[15px] lg:px-14">
            {/* task submission form */}
          <form className="bg-bgPrimary  py-[20px] rounded-[20px] xl:px-[20px] px-[10px] w-[100%]"
            onSubmit={handleSubmit(onSubmit)}
          >
          <div className=" grid grid-cols-12 w-[100%] pt-[20px]  xl:gap-5 gap-2">
                {/* task submit form */}
            <div className=" col-span-12 md:col-span-3  relative">
                {/* Task Tittle */}
            <input
          type="text"
          placeholder="Tittle"
          className="primary_input"
          {...register("name", {
            required: "Tittle is required",
            pattern: {
              value: /^[A-Za-z]/,
              message: "Tittle should contain only alphabets",
            },
          })}
        />
          {errors.name && (
          <span className="text-error  text-base absolute bottom-[-10px]">{errors.name.message}</span>
        )}
                {/* Task Tittle */}
            </div>         
                {/* Task Description */}
            <div className=" col-span-12 md:col-span-5   relative">
            <input
          type="text"
          placeholder="Description"
          className="primary_input"
          {...register("description", {
            required: "Description is required",
            minLength: {
                value: 10,
                message: "Description should be at least 10 characters long",
            },
            maxLength: {
                value: 30,
                message: "Description should not be greater than 30 characters",
            }
           ,
          })}
        />
          {errors.description && (
          <span className="text-error  text-base absolute bottom-[-10px]">{errors.description.message}</span>
        )}
            </div>
                {/* Task Description */}
                {/* List for priority */}
                <div className=" col-span-10 md:col-span-3  ">
                <select
            className="primary_input  px-4"
            {...register("priority", {  required: "Priority is required"}
            )}
            >
            {PriorityList.map((priority) => (
                <option key={priority.value} value={priority.value}>
                {priority.label}
                </option>
            ))}
            </select>
            {errors.priority && (
            <p className="text-error  text-base">{errors.priority.message}</p>
            )}
                </div>
                {/* List for priority */}
                {/* submit button */}
                <div className="col-span-2 md:col-span-1  flex items-center" >
                    <Button   
                    type="submit"
                    className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px] text-[20px]"
                    >
                        +
                    </Button>
                </div>
                {/* submit button */}
          </div>
                </form>
            
        </div>
      </Container>
    );
};

export default TaskForm;