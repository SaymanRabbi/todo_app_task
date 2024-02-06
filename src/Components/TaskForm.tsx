import { useForm } from "react-hook-form";
import Container from "./Container/Container";
interface FormData {
    name: string;
    description: string;
    priority: string;
}

const TaskForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    return (
        <Container className="h-[100%] w-[98%] mx-auto">
        <div className=" flex flex-wrap mx-[15px] lg:px-14">
            {/* task submission form */}
          <form className="bg-bgPrimary  py-[10px] rounded-[20px] px-[20px] w-[100%]">
          <div className=" grid grid-cols-12 w-[100%] pt-[20px] gap-5">
                {/* task submit form */}
            <div className=" col-span-12 xl:col-span-3 md:col-span-10 ">
                {/* Task Tittle */}
            <input
          type="text"
          placeholder="Tittle"
          className="primary_input"
          {...register("name", {
            required: "Tittle is required",
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Tittle should contain only alphabets",
            },
          })}
        />
          {errors.name && (
          <p className="text-error  text-base">{errors.name.message}</p>
        )}
                {/* Task Tittle */}
            </div>

         
                {/* Task Description */}
                <div className=" col-span-12 xl:col-span-5 md:col-span-10 ">
               
            <input
          type="text"
          placeholder="Description"
          className="primary_input"
          {...register("description", {
            required: "Description is required",
            minLength: {
                value: 10,
                message: "Description should be at least 10 characters long",
            }
           ,
          })}
        />
          {errors.description && (
          <p className="text-error  text-base">{errors.description.message}</p>
        )}
            </div>
                {/* Task Description */}
          </div>
                </form>
            
        </div>
      </Container>
    );
};

export default TaskForm;