import React from 'react';
import Link from 'next/link';
import Home from '../page';
import { tasks } from '../tasks/page';
export const Navbar = () => {
  return (
    <div className="navbar bg-slate-900 h-[4rem] w-full">
      <nav className='flex h-full px-5 items-center justify-between'>
        <Link href='/home'>
          <a className='text-2xl text-orange-500 font-bold'>TODO</a>
        </Link>
        <ul className='flex gap-2'>
          <li className='hover:text-orange-200'>
            <Link href='/home'>Home</Link>
          </li>
          <li className='hover:text-orange-200'>
            <Link href='/tasks'>Tasks</Link>
          </li>
          <li className='hover:text-orange-200'>
            <Link href='/add-task'>Add Task</Link>
          </li>
        </ul>
        <Link href='/login'>
          <a className='hover:text-orange-200'>Login</a>
        </Link>
      </nav>
    </div>
  );
};
