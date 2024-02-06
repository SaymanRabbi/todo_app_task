import { useTaskStore } from "../../Store/Task";


const TaskCounter = () => {
    const {task} = useTaskStore((state)=>state);
    return (
        <div className=' fixed top-4 right-4 w-[300px] h-[64px] bg-gradient-to-r from-rgbFrom to-rgbTo z-[10] rounded-[10px]'>
            <div className='flex justify-center text-white font-bold pt-3'>
                <h2>Task Counter</h2>
            </div>
            <div className=" flex gap-2 text-gray-300 font-bold justify-center">
                  <h2>Total: {
                        task.length
                    }</h2>
                    <h2>Active: {
                        task.filter((t)=>t.status==='Active').length
                        }</h2>
                    <h2>Completed: {
                        task.filter((t)=>t.status==='Completed').length
                        }</h2>
            </div>
        </div>
    );
};

export default TaskCounter;