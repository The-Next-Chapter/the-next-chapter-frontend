import { Link } from "react-router-dom"
import { Button } from "../components/ui"
import PageWrapper from "../components/PageWrapper"

function HomePage() {
  return (
    <div className="space-y-35">
     <PageWrapper>
      {/* HERO SECTION */}

      <section className="grid items-center gap-10 md:grid-cols-2">

        {/* LEFT CONTENT */}

        <div>

          <h1 className="text-4xl md:text-5xl font-semibold text-[#5A524A] leading-tight">
            Guiding You Through <br /> Every New Beginning.
          </h1>

          <p className="max-w-lg mt-5 text-stone-600">
            A supportive space for parents, caregivers, and educators
            to explore curated resources, find compassionate guidance,
            and connect with a community that understands.
          </p>

          <div className="flex items-center gap-4 mt-6">

  <Link to="/start-here">
    <Button>
      Start Here
    </Button>
  </Link>

  <Link to="/resources">
    <Button variant="outline">
      Explore Resources
    </Button>
  </Link>

</div>

        </div>

        {/* HERO IMAGE */}

        <div>
          <img
            src="/images/hero.jpg"
            alt="hands holding apple"
            className="rounded-lg shadow-sm"
          />
        </div>

      </section>
       </PageWrapper>

      {/* PURPOSE SECTION */}

      <section className="max-w-3xl mx-auto mt-10 text-center">
   <PageWrapper>
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5A524A]">
          Our Purpose: Nurturing Growth and Understanding.
        </h2>

        <p className="mt-4 leading-relaxed text-stone-600">
          The Next Chapter is dedicated to empowering those who shape
          young lives. We believe in providing accessible,
          evidence-based content within a compassionate framework,
          fostering resilience and joy in the journey of raising and
          educating children. Our platform is a quiet retreat where
          you can find clarity, comfort, and practical tools to
          support yourself and the children in your care.
        </p>
  </PageWrapper>
      </section>

    </div>
  )
}

export default HomePage