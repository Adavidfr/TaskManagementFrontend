import { Avatar } from '@mui/material'
import React from 'react'
import image1 from './image1.png'; 

const Sidebar = () => {
  return (
    <div className='min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
        <div className='space-y-5 h-full'>
            <div className='flex justify-center'>
                <Avatar
                sx={{width:"8rem", height:"8rem"}}
                className='border-2 border-[#c24dd0]'
                    src='https://tr.rbxcdn.com/99efe2b347ba56c51881a79627ca0602/420/420/Hat/Webp' />

            </div>

        </div>
      
    </div>
  )
}

export default Sidebar
