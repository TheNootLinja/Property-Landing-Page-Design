import Link from 'next/link'

const Header = () => {
  return (
    <div className='flex justify-between py-10 text-[#100d47] font-sans'>
      <nav className="flex justify-between gap-11 items-center">
        <Link href="/about" passHref>    
          <h1 className="text-3xl font-semibold">Walter</h1>
        </Link>
        <Link href="/about" passHref>
          <a>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>Our Offices</a>
        </Link>
        <Link href="/about" passHref>
          <a>Our Consultants</a>
        </Link>
        <Link href="/about" passHref>
          <a>Open Office</a>
        </Link>
      </nav>
      <div className="flex items-center">
        <div className="flex mr-5 items-center">
          <select name="select-country" id="" className='form-select font-bold appearance-none z-10 pr-6 bg-transparent'>
            <option value="UK">UK</option>
            <option value="UK">US</option>
            <option value="UK">CAN</option>
          </select>
          <div className="w-4 h-4 -ml-5 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.64 16.34"><g id="Layer_2" data-name="Layer 2"><polygon points="31.44 0.5 16.31 15.63 1.21 0.53 31.44 0.5" fill="#231f20"/><polygon points="1.21 0.53 16.31 15.63 31.44 0.5 1.21 0.53" fill="none" stroke="#231f20" stroke-miterlimit="10"/></g></svg>
          </div>
        </div>
        <button className="bg-[#100d47] hover:bg-blue-700 text-white font-bold py-4 px-14 rounded-xl">Contact</button>
      </div>
    </div>
  )
}

export default Header