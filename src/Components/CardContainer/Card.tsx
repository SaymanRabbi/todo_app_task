import { useTaskStore } from "../../Store/Task";
import { TaskTypes } from "../../Types";
import Button from "../Button/Button";
import Container from "../Container/Container";
import DynamicHeading from "../DynamicHeading";
import Modal from "../Modal/Modal";
const Card = () => {
    const {task,deleteTask,completeTask,openModal,modal} = useTaskStore((state)=>state);
    const handleDelete = (id:string)=>{
        deleteTask(id);
    }
    const handleUpdate = ()=>{
        openModal();
        

    }
    const handleComplete = (id:string)=>{
        completeTask(id);
    }
    // short the task based on priority
    const sortedTasks = task.sort((a:any, b:any) => {
        const priorityOrder = { low: 2, medium: 1, high: 0, complete: 3 };
      
        const getPriorityIndex = (task :TaskTypes) => {
          if (task.status === 'Completed') {
            return priorityOrder.complete;
          }
      
          if ('priority' in task && task.priority && priorityOrder[task.priority] !== undefined) {
            return priorityOrder[task.priority];
          }
      
          return 3; // default to low priority
        };
      
        const priorityA = getPriorityIndex(a);
        const priorityB = getPriorityIndex(b);
      
        return priorityA - priorityB;
      });
    return (
        <Container className="py-10 w-[85%] mx-auto ">
             <div className=" grid grid-cols-12 gap-4 ">
                 {
                       task.length > 0 ?sortedTasks.map((task)=>(  <div className="bg-bgPrimary  py-[20px] rounded-[5px] xl:px-[20px] px-[10px] w-[100%]  md:col-span-4 col-span-12 shadow-2xl relative" key={task.id}>
                        
                       <div className={`absolute bg-gradient-to-r from-gray-100 to-gray-200 mb-[15px] top-0 w-[100px] h-[25px] right-0 flex justify-center  ${ task.status ==='Active'?'':"text-success"}`}>
                          <h2 className=" font-bold">{
                                task.status
                          }</h2>
                       </div>
                                {/* Tittle */}
                                <DynamicHeading className={`!text-[14px] text-start py-0 !leading-[10px]  !pb-1 mt-4 ${task.status ==="Completed"?" text-gray-400 line-through":""}`}>
                                   {
                                        task.name
                                   }
                                </DynamicHeading>
                                {/* Tittle */}
                                  {/* Description */}
                                  <div className={`text-start text-[13px] leading-[18px] text-textSecondary mt-[3px] font-[300] ${task.status ==="Completed"?" text-gray-400 line-through":""}`}>
                                        {
                                            task.description
                                        }
                                  </div>
                                  {/* Description */}
                                  {/* modal */}
                                    {
                                        modal && <Modal id={task.id} name={task.name} description={task.description} priority={task.priority}/>
                                    }
                                  {/* modal */}
                                  {/* Priority */}
                                  <div className={`text-start text-[13px] leading-[18px] mt-[3px]   bg-gray-700 w-fit px-[5px] py-[3px] rounded-[2px] font-bold ${task.status ! ==="Active"? task.priority === 'medium'?"text-[#FFD700]": task.priority === 'high'?"text-[#FF6347] ":task.priority ==='low'?
                                  "text-[#32CD32]":"":" text-gray-400"}`}>
                                      Priority: {task.priority}
                                      </div>
                                      <div className=" flex gap-x-4">
                                          <Button className="bg-rgbFrom text-[#fff] mt-4 w-[100%] py-2 rounded-[5px]"
                                            onClick={()=>handleUpdate()}
                                          >Edit</Button>
                                          <Button className="bg-error text-[#fff] mt-4 w-[100%] py-2 rounded-[5px]"
                                            onClick={()=>handleDelete(task.id)}
                                          >Delete</Button>
                                          <Button className = {` text-[#fff] mt-4 w-[100%] py-2 rounded-[5px] ${task.status ==="Completed"?"bg-gray-400":"bg-success"}`}
                                            onClick={()=>handleComplete(task.id)}
                                            disabled={task.status ==="Completed"}
                                          >Complete</Button>
                                      </div>
                             </div>)) : <div className="col-span-12 text-center text-error font-bold text-[22px]">No Task Available</div>
                 }
             </div>
             
        </Container>
    );
};

export default Card;