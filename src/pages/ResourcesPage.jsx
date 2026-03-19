import { useEffect, useState } from "react"
import { Card } from "../components/ui"
import { Link } from "react-router-dom"
import axios from "axios"
import PageWrapper from "../components/PageWrapper"

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

        const data = response.data

        // 🔐 Normalize response → ALWAYS array
        if (Array.isArray(data)) {
          setResources(data)
        } else if (Array.isArray(data?.data)) {
          setResources(data.data)
        } else {
          console.warn("Unexpected API response:", data)
          setResources([])
        }

      } catch (err) {

        console.error("Resource fetch error:", err)
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
    <PageWrapper>
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

          {Array.isArray(resources) && resources.length > 0 ? (
            resources.map((resource) => (
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
            ))
          ) : (
            <p className="col-span-2 text-center text-stone-500">
              No resources available at the moment.
            </p>
          )}

        </div>

      </div>
    </PageWrapper>
  )
}

export default ResourcesPage