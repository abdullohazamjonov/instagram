import React from 'react'

const Danger = (props) => {
    return (
        <div className='fixed inset-0 w-full h-screen bg-gray-500/50 left-0 top-0 backdrop-blur-sm z-50 flex items-center justify-center'>
            <div className='bg-white relative rounded-xl w-[90%] max-w-[350px] p-6 shadow-xl flex flex-col justify-between'>
                <div>
                    <p className='text-center text-xl font-semibold'>{props.title}</p>
                    <p className='text-center mt-2 text-gray-600 text-sm'>{props.para}</p>
                </div>
                
                <div className='flex gap-4 justify-center mt-6'>
                    <button 
                        className='bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 cursor-pointer transition' 
                        onClick={props.onConfirm}
                    >
                        Ha
                    </button>
                    <button 
                        className='border border-gray-300 py-2 px-6 rounded-md hover:bg-gray-100 cursor-pointer transition' 
                        onClick={props.onCancel}
                    >
                        Yo'q
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Danger