import { useEffect, useState } from "react"
import { Card } from "../components/ui"
import { Link } from "react-router-dom"
import axios from "axios"

function ResourcesPage() {

  const [resources, setResources] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchResources = async () => {
      try {

        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/resources`
        )

        setResources(response.data)

      } catch (err) {

        setError("Failed to load resources")

      } finally {

        setLoading(false)

      }
    }

    fetchResources()

  }, [])

  if (loading) {
    return (
      <div className="text-center text-stone-500">
        Loading resources...
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        {error}
      </div>
    )
  }

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