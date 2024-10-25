import React from 'react'

const TaskListNumbers=() =>{
    return (
        <div className='flex mt-10  justify-between gap-5screen'> 
        
        <div className='rounded-xl w-[45%]  py-6 px-9 bg-orange-400'>

            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
</div>

        <div className='rounded-xl w-[45%]  py-6 px-9 bg-lime-500'>

             <h2 className='text-3xl font-semibold'>3</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
 </div>

        <div className='rounded-xl w-[45%]  py-6 px-9 bg-blue-500'>

           <h2 className='text-3xl font-semibold'>0</h2>
          <h3 className='text-xl font-medium'>Accepted</h3>
</div>


        <div className='rounded-xl w-[45%]  py-6 px-9 bg-pink-500'>

       <h2 className='text-3xl font-semibold'>1</h2>
        <h3 className='text-xl font-medium'>Failed</h3>
</div>
        
        </div>
    )
}

export default TaskListNumbers