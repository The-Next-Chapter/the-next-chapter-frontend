import { Link } from "react-router-dom"
import { Button } from "../components/ui"

function StartHerePage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 space-y-12">

      {/* Page Heading */}

      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#5A524A]">
          Your Gentle Guide to Support
        </h1>

        <p className="text-stone-600 max-w-xl mx-auto">
          Welcome to The Next Chapter. We understand that every journey
          is unique. Here's a simple guide to help you get started and
          make the most of our supportive resources.
        </p>
      </div>

      {/* Steps */}

      <div className="space-y-6">

        {/* Step 1 */}

        <div className="bg-white border border-stone-200 rounded-lg p-6 flex gap-4 items-start shadow-sm">

          <div className="bg-[#C9B38C] text-white w-8 h-8 flex items-center justify-center rounded-full font-medium">
            1
          </div>

          <div>
            <h3 className="font-semibold text-[#5A524A]">
              Understand Your Needs
            </h3>

            <p className="text-stone-600 mt-1 text-sm leading-relaxed">
              Begin by reflecting on your unique journey. Are you a
              parent seeking specific advice, a caregiver needing
              emotional support, or an educator looking for new tools?
              Understanding your starting point helps us guide you
              better.
            </p>
          </div>

        </div>

        {/* Step 2 */}

        <div className="bg-white border border-stone-200 rounded-lg p-6 flex gap-4 items-start shadow-sm">

          <div className="bg-[#C9B38C] text-white w-8 h-8 flex items-center justify-center rounded-full font-medium">
            2
          </div>

          <div>
            <h3 className="font-semibold text-[#5A524A]">
              Explore Our Resources
            </h3>

            <p className="text-stone-600 mt-1 text-sm leading-relaxed">
              Our curated library offers articles, guides, and tools
              designed to support you. Browse topics like child
              development, positive parenting, self-care for caregivers,
              and educational strategies. Each resource is crafted with
              care and empathy.
            </p>
          </div>

        </div>

        {/* Step 3 */}

        <div className="bg-white border border-stone-200 rounded-lg p-6 flex gap-4 items-start shadow-sm">

          <div className="bg-[#C9B38C] text-white w-8 h-8 flex items-center justify-center rounded-full font-medium">
            3
          </div>

          <div>
            <h3 className="font-semibold text-[#5A524A]">
              Connect and Grow
            </h3>

            <p className="text-stone-600 mt-1 text-sm leading-relaxed">
              Beyond articles, The Next Chapter is about growth. We
              encourage you to engage with the content, apply what you
              learn, and discover new perspectives. Your journey is
              unique, and we’re here to walk alongside you.
            </p>
          </div>

        </div>

      </div>

      {/* CTA Button */}

      <div className="text-center pt-4">

        <Link to="/resources">
          <Button>
            Explore Our Resources
          </Button>
        </Link>

      </div>

    </div>
  )
}

export default StartHerePage