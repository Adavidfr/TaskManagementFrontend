import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import "./Sidebar.css"
import { Button } from '@mui/material'

const menu = [
  {name:"Home", value:"Home", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
  {name:"DONE", value:"DONE", role:["ROLE_ADMIN", "ROLE_CUSTOMER"]},
  {name:"ASSIGNED", value:"ASSIGNED", role:["ROLE_ADMIN"]},
  {name:"NOT ASSIGNED", value:"PENDING", role:["ROLE_ADMIN"]},
  {name:"Create New Task", value:"", role:["ROLE_ADMIN"]},
  {name:"Notification", value:"NOTIFICATION", role:["ROLE_CUSTOMER"]}
]

const role = "ROLE_ADMIN"

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState ("DONE")
  const handleMenuChange = (item) => {
    setActiveMenu(item.name)
  }
  const handleLogout = ()=> {
    console.log("handle logout")
  }
  return (
    <div className='card min-h-[85vh] flex flex-col justify-center fixed w-[20vw]'>
        <div className='space-y-5 h-full'>
            <div className='flex justify-center'>
                <Avatar
                sx={{width:"8rem", height:"8rem"}}
                className='border-2 border-[#c24dd0]'
                    src='https://tr.rbxcdn.com/99efe2b347ba56c51881a79627ca0602/420/420/Hat/Webp' />

            </div>

            {
              menu.filter((item) => item.role.includes(role))
              .map((item) => <p onClick={()=>handleMenuChange(item)}
              className={`py-3 px-5 rounded-full text-center cursor-pointer ${activeMenu === item.name?"activeMenuItem":"menuItem"}`}>
                {item.name}
              </p>)
            }

            <Button onClick = {handleLogout} sx={{padding:".7rem", borderRadius:"2rem"}} fullWidth className = 'logoutButton'>
              logout
            </Button>

        </div>
      
    </div>
  )
}

export default Sidebar
