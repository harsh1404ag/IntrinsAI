import 'boxicons/css/boxicons.min.css';

const Header = () => {
  //simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    // Get the mobile menu element
    const mobileMenu = document.getElementById('mobileMenu');

    // if it has the 'hidden' class, remove it. otherwise add it.
    if(mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
  } 
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light m-0">
            IntrinsAI
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
            <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        COMPANY
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        FEATURES
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        RESOURCES
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        DOCS
        </a>
</nav>

<button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
    SIGNIN
</button>

{/* Mobile Navigation */}
<button onClick={toggleMobileMenu}
className="md:hidden text-3xl p-2 z-50"> 
    <i className='bx bx-menu'></i>
</button>

{/* Mobile Menu*/}
<div id='mobileMenu'className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
    <nav className='flex flex-col gap-6 items-center'>
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        COMPANY
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        FEATURES
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        RESOURCES
        </a>
    
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">
        DOCS
        </a> 
    </nav>
</div>
    
    </header>
  )
}

export default Header