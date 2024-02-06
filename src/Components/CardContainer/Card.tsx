import Container from "../Container/Container";


const Card = () => {
    return (
        <Container className="py-10 w-[85%] mx-auto">
             <div className=" grid grid-cols-12 gap-4">
                   <div className="bg-bgPrimary  py-[20px] rounded-[5px] xl:px-[20px] px-[10px] w-[100%] col-span-4">
                      {/* Tittle */}
                      <h2></h2>
                      {/* Tittle */}
                   </div>
             </div>
        </Container>
    );
};

export default Card;