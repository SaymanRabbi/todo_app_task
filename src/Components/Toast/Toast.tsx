import React from 'react';
interface Props {
    message:string;
    type:string
}
const Toast:React.FC<Props> = ({
    message,type
}) => {
    return (
        <div className=' fixed bottom-4 right-4 z-[999999]'>
            {
                type==='success'? <div className='bg-success text-white p-2 rounded-md font-bold'>{message}</div>:
                <div className='bg-error text-white p-2 rounded-md font-bold'>{message}</div>
            }
        </div>
    );
};

export default Toast;