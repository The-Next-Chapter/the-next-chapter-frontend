import { Card } from "../components/ui"
import { Link } from "react-router-dom"

const resources = [
  {
    title: "Understanding Childhood Milestones",
    slug: "understanding-childhood-milestones",
    summary:
      "Understanding developmental milestones helps adults support children appropriately at each stage of growth."
  },
  {
    title: "The Power of Play-Based Learning",
    slug: "power-of-play-based-learning",
    summary:
      "Exploring how play supports children’s intellectual, emotional, and social development."
  },
  {
    title: "Effective Communication with Teens",
    slug: "effective-communication-with-teens",
    summary:
      "Strategies for building trust and maintaining open communication with teenagers."
  },
  {
    title: "Gentle Parenting Techniques",
    slug: "gentle-parenting-techniques",
    summary:
      "Guiding children with empathy, respect, and clear boundaries while helping them understand their emotions."
  },
  {
    title: "Navigating Sibling Rivalry",
    slug: "navigating-sibling-rivalry",
    summary:
      "Helping siblings manage conflict in healthy ways while building stronger relationships."
  },
  {
    title: "Supporting Emotional Regulation in Children",
    slug: "supporting-emotional-regulation",
    summary:
      "Helping children recognize, understand, and manage their emotions."
  },
  {
    title: "Building Resilience in Children",
    slug: "building-resilience-in-children",
    summary:
      "Helping children develop perseverance and the ability to cope with challenges."
  },
  {
    title: "Creating a Positive Learning Environment",
    slug: "creating-positive-learning-environment",
    summary:
      "How adults can create environments where children feel safe, supported, and motivated to learn."
  }
]

function ResourcesPage() {
  return (
    <div className="space-y-12">

      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#C9B38C]">
          Explore Our Resources
        </h1>

        <p className="mt-4 text-stone-600">
          Here you’ll find a curated collection of articles and guides
          designed to support parents, caregivers, and educators.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {resources.map((resource) => (
          <Card key={resource.slug}>

            <h3 className="font-semibold text-[#5A524A] mb-2">
              {resource.title}
            </h3>

            <p className="mb-4 text-sm text-stone-600">
              {resource.summary}
            </p>

            <Link
              to={`/resources/${resource.slug}`}
              className="text-sm text-[#C9B38C] font-medium hover:underline"
            >
              Read More →
            </Link>

          </Card>
        ))}

      </div>

    </div>
  )
}

export default ResourcesPage