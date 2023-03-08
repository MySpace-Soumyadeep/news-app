
import {Bars3Icon} from "@heroicons/react/24/solid"
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from "./SearchBox"

function Header() {
  return (
    <header>
        <div className='grid grid-cols-3 p-3 items-center'>
            <Bars3Icon className='h-8 w-8 cursor-pointer'/>
            <Link href="/" prefetch={false}>
            <h1 className='font-serif text-3xl text-center'>The{" "}
            <span className='underline decoration-6 decoration-orange-400'>TIMES</span> News</h1>
            </Link>

            <div className='flex items-center justify-end space-x-2'>
                {/* Dark mode button */}

                <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-2 rounded-full dark:bg-slate-800'> 
                {/* by default classnames it will be mobile first and then if there is a break point then followed by large screen (lg) or med screen it will apply the styles   */}
                Subscribe Now</button>
            </div>
        </div>

        <NavLinks/>

        {/* searchbox */}
        <SearchBox/>

    </header>
  )
}

export default Header