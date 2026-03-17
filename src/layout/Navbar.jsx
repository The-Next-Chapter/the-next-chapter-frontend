import { NavLink } from "react-router-dom"
import { useState } from "react"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#5A524A] font-medium"
      : "text-stone-500 hover:text-[#5A524A]"

  return (
    <header className="bg-[#F3EEE8] border-b border-stone-200">
      <div className="flex items-center justify-between max-w-6xl px-6 py-4 mx-auto">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2">

          {/* Logo Placeholder */}
          <div className="flex justify-center w-40 h-20 text-white rounded-md text-font-bold items-white center ">
           <img
            src="/images/tnxc.png"
            alt="TNX"
            className=""
          />
          </div>


        </NavLink>


        {/* Desktop Navigation */}
        <nav className="items-center hidden gap-8 text-sm md:flex">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/start-here" className={linkClass}>
            Start Here
          </NavLink>

          <NavLink to="/resources" className={linkClass}>
            Resources
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

        </nav>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#5A524A]"
        >
          ☰
        </button>

      </div>


      {/* Mobile Menu */}
     {menuOpen && (
  <div className="md:hidden border-t border-stone-200 px-6 py-4 flex flex-col gap-4 text-sm bg-[#F3EEE8]">

    <NavLink to="/" className={linkClass} onClick={closeMenu}>
      Home
    </NavLink>

    <NavLink to="/start-here" className={linkClass} onClick={closeMenu}>
      Start Here
    </NavLink>

    <NavLink to="/resources" className={linkClass} onClick={closeMenu}>
      Resources
    </NavLink>

    <NavLink to="/about" className={linkClass} onClick={closeMenu}>
      About
    </NavLink>

    <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
      Contact
    </NavLink>

  </div>
)}

    </header>
  )
}

export default Navbar