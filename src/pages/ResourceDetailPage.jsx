import { useParams } from "react-router-dom"
import { ArticleContainer, SectionHeading } from "../components/ui"

function ResourceDetailPage() {
  const { slug } = useParams()

  return (
    <ArticleContainer>

      <SectionHeading>
        Resource Title
      </SectionHeading>

      <p>
        This page will display the full content of the resource.
        Later it will fetch the resource from the backend using the slug:
      </p>

      <p className="text-sm text-stone-500 mt-4">
        Slug: {slug}
      </p>

      <p>
        In Sprint 4 Issue F5, we will connect this page to the API:
      </p>

      <code className="block bg-stone-100 p-3 rounded mt-3 text-sm">
        GET /api/resources/:slug
      </code>

    </ArticleContainer>
  )
}

export default ResourceDetailPage