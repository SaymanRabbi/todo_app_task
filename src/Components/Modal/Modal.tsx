import { useForm } from "react-hook-form";

import { useEffect, useState } from "react";
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
import Button from '../Button/Button';
import { useTaskStore } from "../../Store/Task";
interface Props {
     id:string;
     name?:string;
        description?:string;
        priority?:string;
        status?:string;
}

const Modal:React.FC<Props> = ({
     id,name,description,priority
}) => {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormData>();
    const {clearMessage,successMessage,completeUpdate,openModal} = useTaskStore((state)=>state);
    console.log(successMessage);
    const onSubmit = (data: FormData) => {
        setLoading(true);
        const task = {
            name: data.name,
            description: data.description,
            priority: data.priority,
            status: "Active",
            id: id,
          };
          completeUpdate(id,task);
    };
    const CloseModal = ()=>{
        openModal();
    }
    useEffect(() => {
        setTimeout(() => {
            if(successMessage==='Task updated successfully'){
                reset();
                setLoading(false);
                openModal();
                clearMessage();
            }
       }, 1000);
    }, [successMessage]);
    return (
        <div className=' fixed top-0 left-0 bottom-0 right-0 w-[100%] h-[100vh] bg-gray-900 z-50 flex justify-center items-center'>
             {/* Card for update data */}
      <div className=" max-w-[480px] relative">
        <p className=" absolute right-[10px] top-0 text-gray-100 text-[24px] font-bold  cursor-pointer"
        onClick={CloseModal}
        >X</p>
      <form className="bg-bgPrimary  py-[25px] rounded-[20px] xl:px-[20px] px-[10px] w-[480px]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                <div className=" grid grid-cols-12 w-[100%] pt-[20px]  xl:gap-5 gap-2">
                      {/* task submit form */}
                  <div className=" col-span-12   relative">
                      {/* Task Tittle */}
                  <input
                  defaultValue={name}
                type="text"
                placeholder="Tittle"
                className="primary_input !py-[15px] !mb-[5px]"
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
                  <div className=" col-span-12  relative">
                  <input
                 defaultValue={description}
                type="text"
                placeholder="Description"
                className="primary_input !py-[15px] !mb-[5px]"
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
                      <div className=" col-span-12 ">
                      <select
                    defaultValue={priority}
                  className="primary_input  px-4 !py-[15px] !mb-[5px]"
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
                      <div className="col-span-12  flex items-center" >
                          <Button  
                          type="submit"
                          className="bg-gradient-to-r from-rgbFrom to-rgbTo mb-[15px] text-[20px]"
                          disabled={loading}
                          >
                             {
                                  loading?'...':'Update'
                             }
                          </Button>
                      </div>
                      {/* submit button */}
                </div>
                      </form>
      </div>
             {/* Card for update data */}
        </div>
    );
};

export default Modal;