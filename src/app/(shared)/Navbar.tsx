import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { Home, ShoppingBag, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const navLinks = <>
    <NavigationMenuItem className='flex gap-1 items-center group'>
      <Home size={18}></Home>
      <Link href={'/'} className='border-b-2 border-transparent group-hover:text-slate-300 group-hover:border-slate-400 transition-colors duration-300'>Home</Link>
    </NavigationMenuItem>
    <NavigationMenuItem className='flex gap-1 items-center group'>
      <ShoppingBag size={18}></ShoppingBag>
      <Link href={'/products'} className='border-b-2 border-transparent group-hover:text-slate-300 group-hover:border-slate-400 transition-colors duration-300'>Products</Link>
    </NavigationMenuItem>
  </>

  return (
    <header className='w-full bg-slate-800 text-white p-4 shadow-md'>
      <div className='flex items-center justify-between relative'>

        <div className='flex gap-2 items-center flex-1'>
          <h1 className='text-3xl font-bold bg-gradient-to-r from-slate-300 via-slate-100 to-slate-600 bg-clip-text text-transparent'>
            NextStore
          </h1>
          <ShoppingCart size={28} />
        </div>

        <div className='flex-1 flex justify-center'>
          <NavigationMenu>
            <NavigationMenuList className='flex gap-4'>
              {navLinks}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex-1 flex justify-end'>
          <Button className='bg-blue-900 hover:cursor-pointer hover:bg-blue-700 transition-colors duration-300'>Login</Button>
        </div>
      </div>
    </header>

  );
};

export default Navbar;