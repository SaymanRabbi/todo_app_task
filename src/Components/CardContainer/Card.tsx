import Container from "../Container/Container";
import DynamicHeading from "../DynamicHeading";


const Card = () => {
    return (
        <Container className="py-10 w-[85%] mx-auto ">
       
             <div className=" grid grid-cols-12 gap-4 ">
                   <div className="bg-bgPrimary  py-[20px] rounded-[5px] xl:px-[20px] px-[10px] w-[100%]  md:col-span-4 col-span-12 shadow-2xl relative">
             <div className=" absolute bg-gradient-to-r from-gray-100 to-gray-200 mb-[15px] top-0 w-[100px] h-[25px] right-0 flex justify-center text-success">
                <h2 className=" font-bold">Complete</h2>
             </div>
                      {/* Tittle */}
                      <DynamicHeading className="!text-[14px] text-start py-0 !leading-[10px]  !pb-1 mt-4">
                        This is my First Task
                      </DynamicHeading>
                      {/* Tittle */}
                        {/* Description */}
                        <div className="text-start text-[13px] leading-[18px] text-textSecondary mt-[3px] font-[300]">
                            This is the description of the task
                        </div>
                        {/* Description */}
                        {/* Priority */}
                        <div className="text-start text-[13px] leading-[18px] text-[#FF6347] mt-[3px]   bg-gray-100 w-fit px-[5px] py-[3px] rounded-[2px] font-bold">
                            Priority: High
                            </div>
                   </div>
             </div>
        </Container>
    );
};

export default Card;