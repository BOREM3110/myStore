import React from 'react';
import { useDispatch } from 'react-redux';


export default function DropDownFile({signOutHandler}) {
  const dispatch = useDispatch();
  return (
    <div className="drop-down-file flex flex-col  absolute top-[2rem] right-[1.5rem] left-[26px] w-[70px] z-10 py-[90px] px-[80px] items-center content-center bg-gray-400 border before:absolute -inset-y-8 w-[25px] h-[25px]  right-[1.1rem] " >
      <ul className="flex flex-col -mt-20 list-none  gap-4  " >
        
            <li>Profile</li>
             <li>Settings</li>
             <hr className='text-black w-full' />
              <li onClick={()=> signOutHandler()} >Logout</li>
      
      </ul>
    </div>
  )
}
