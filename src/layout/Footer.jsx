import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-[#F3EEE8] border-t border-stone-200 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">

              <div className="w-6 h-6 bg-[#C9B38C] rounded flex items-center justify-center text-white text-xs font-bold">
                TNC
              </div>

              

            </div>

            <p className="text-sm text-stone-500 leading-relaxed">
              A serene and supportive platform for parents,
              caregivers, and educators.
            </p>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-[#5A524A] mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-stone-600">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/start-here">Start Here</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>


          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-[#5A524A] mb-3">
              Resources
            </h4>

            <ul className="space-y-2 text-sm text-stone-600">
              <li>Articles</li>
              <li>Guides</li>
              <li>Tools</li>
            </ul>
          </div>


          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-[#5A524A] mb-3">
              Contact Us
            </h4>

            <p className="text-sm text-stone-500 mb-2">
              Have questions or need support? Reach out to us.
            </p>

            <Link
              to="/contact"
              className="text-sm text-[#C9B38C] hover:underline"
            >
              Get in Touch
            </Link>
          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-stone-200 mt-10 pt-6 text-center text-xs text-stone-400">

          © {new Date().getFullYear()} The Next Chapter. All rights reserved.

        </div>

      </div>

    </footer>
  )
}

export default Footer