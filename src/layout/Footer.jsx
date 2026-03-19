import { Link } from "react-router-dom"
import NewsletterForm from "../components/NewsletterForm"
import { Linkedin, Instagram, Youtube } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-[#F3EEE8] border-t border-stone-200 mt-20">

      <div className="max-w-6xl px-6 py-12 mx-auto">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center text-xs font-bold text-white w-30 h-18">
                <img
                  src="/images/tnxc.png"
                  alt="TNX"
                />
              </div>
            </div>

            <p className="text-sm leading-relaxed text-stone-500">
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


          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-[#5A524A] mb-3">
              Stay Connected
            </h4>

            <p className="mb-4 text-sm leading-relaxed text-stone-500">
              Receive weekly insights, reflections, and intentional
              guidance for raising confident and emotionally healthy children.
            </p>

            <NewsletterForm />
          </div>


          {/* Contact + Social */}
          <div>
            <h4 className="text-sm font-semibold text-[#5A524A] mb-3">
              Contact Us
            </h4>

            <p className="mb-2 text-sm text-stone-500">
              Have questions or need support? Reach out to us.
            </p>

            <Link
              to="/contact"
              className="text-sm text-[#C9B38C] hover:underline"
            >
              Get in Touch
            </Link>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-stone-500">

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C9B38C]"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C9B38C]"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#C9B38C]"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="pt-6 mt-10 text-xs text-center border-t border-stone-200 text-stone-400">
          © {new Date().getFullYear()} The Next Chapter. All rights reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer