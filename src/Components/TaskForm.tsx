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
        <Container className="pt-[200px] h-[100%] ">
        <div className=" flex flex-wrap mx-[15px] lg:px-14">
          <div className=" grid grid-cols-12 w-[100%] pt-[40px]">
            <div className=" col-span-12 xl:col-span-6 md:col-span-10">
                {/* task submit form */}
              <form className="bg-bgPrimary md:px-[40px] py-[40px] rounded-[20px] px-[20px]"></form>
                {/* task submit form */}
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
          </div>
        </div>
      </Container>
    );
};

export default TaskForm;