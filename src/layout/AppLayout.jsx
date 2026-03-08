import Navbar from "./Navbar"
import Footer from "./Footer"

function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3EEE8]">

      <Navbar />

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        {children}
      </main>

      <Footer />

    </div>
  )
}

export default AppLayout