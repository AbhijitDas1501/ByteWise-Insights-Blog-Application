import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2 '>
      <Link to='/' className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'> ByteWise </span>
        Insights
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color='gray' >
        <AiOutlineSearch/>
      </Button>
      <div className="flex gap-2 md:order-2">
        <button className="w-12 h-10 hidden sm:inline" color="gray" >
          <FaMoon />
        </button>
        <Link to='/sign-in'>
          <Button gradientDuoTone='greenToBlue' >Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className={`${path === '/' ? 'active' : ''}`}>
          <Link to='/'>Home</Link>
        </div>
        <div className={`${path === '/about' ? 'active' : ''}`}>
          <Link to='/about'>About</Link>
        </div>
        <div className={`${path === '/projects' ? 'active' : ''}`}>
          <Link to='/projects'>Projects</Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}