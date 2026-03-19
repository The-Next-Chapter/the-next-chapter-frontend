// src/pages/ResourceDetailPage.jsx

import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { ArticleContainer, SectionHeading, Card } from "../components/ui"


/* --------------------------
   ID GENERATOR
--------------------------- */
const generateId = (text) => {
  return String(text)
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-")
}


/* --------------------------
   SAFE TEXT EXTRACTION
--------------------------- */
const extractText = (node) => {
  if (typeof node === "string") return node
  if (Array.isArray(node)) return node.map(extractText).join("")
  if (node?.props?.children) return extractText(node.props.children)
  return ""
}


function ResourceDetailPage() {

  const { slug } = useParams()
  const [activeId, setActiveId] = useState(null)
  const [resource, setResource] = useState(null)
  const [relatedResources, setRelatedResources] = useState([])
  const [toc, setToc] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const fetchData = async () => {

      try {

        const articleResponse = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/resources/${slug}`
        )

        const listResponse = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/resources`
        )

        const article = articleResponse.data
        setResource(article)

        /* ---------- SAFE TOC BUILD ---------- */
        const headings = (article.content || "")
          .split("\n")
          .filter(line => line.trim().startsWith("## "))
          .map(line => {
            const text = line.replace("## ", "").trim()
            return {
              text,
              id: generateId(text)
            }
          })

        setToc(headings)

        const filtered = listResponse.data
          .filter(r => r.slug !== slug)
          .slice(0, 3)

        setRelatedResources(filtered)

      } catch (err) {
        setError("Failed to load resource")
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [slug])

  useEffect(() => {

  const handleScroll = () => {

    const headings = document.querySelectorAll("h2[id]")

    let current = null

    headings.forEach((heading) => {
      const rect = heading.getBoundingClientRect()

      if (rect.top <= 120) {
        current = heading.id
      }
    })

    setActiveId(current)
  }

  window.addEventListener("scroll", handleScroll)

  return () => window.removeEventListener("scroll", handleScroll)

}, [])


  if (loading) {
    return (
      <ArticleContainer>
        <p className="text-center text-stone-500">Loading article...</p>
      </ArticleContainer>
    )
  }

  if (error) {
    return (
      <ArticleContainer>
        <p className="text-center text-red-500">{error}</p>
      </ArticleContainer>
    )
  }


  return (

    <ArticleContainer>

      {/* HERO */}

      <header className="text-center mb-14">

        <h1 className="text-3xl font-semibold md:text-4xl text-text">
          {resource.title}
        </h1>

        <div className="w-16 h-0.5 bg-gold mx-auto mt-4"></div>

      </header>


      {/* TOC */}

      {toc.length > 0 && (

        <div className="mx-auto mb-12 max-w-180">

          <div className="p-6 rounded-lg bg-wood/30">

            <h3 className="mb-4 font-semibold text-text">
              On this page
            </h3>

            <ul className="space-y-2 text-sm">

              {toc.map((item) => (

                <li key={item.id}>

                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault()

                      const el = document.getElementById(item.id)

                      if (el) {
                        const yOffset = -80
                        const y = el.getBoundingClientRect().top + window.scrollY + yOffset

                        window.scrollTo({
                          top: y,
                          behavior: "smooth"
                        })
                      }
                    }}
                    className={`transition ${
  activeId === item.id
    ? "text-gold font-medium"
    : "text-stone-600 hover:text-gold"
}`}
                  >
                    {item.text}
                  </a>

                </li>

              ))}

            </ul>

          </div>

        </div>

      )}


      {/* ARTICLE */}

      <article className="mx-auto max-w-180">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{

            h2: ({ children, ...props }) => {

              const text = extractText(children)
              const id = generateId(text)

              return (
                <h2
                  id={id}
                  className="pb-2 mt-10 mb-4 text-2xl font-semibold border-b border-wood text-text scroll-mt-28"
                  {...props}
                >
                  {children}
                </h2>
              )
            },

            h3: ({node, ...props}) => (
              <h3 className="mt-8 mb-3 text-xl font-semibold text-text" {...props}/>
            ),

            p: ({node, ...props}) => (
              <p className="mb-5 leading-relaxed text-stone-700" {...props}/>
            ),

            ul: ({node, ...props}) => (
              <ul className="pl-6 mb-5 space-y-2 list-disc text-stone-700" {...props}/>
            ),

            ol: ({node, ...props}) => (
              <ol className="pl-6 mb-5 space-y-2 list-decimal text-stone-700" {...props}/>
            ),

            blockquote: ({node, ...props}) => (
              <blockquote className="pl-4 my-6 italic border-l-4 border-gold text-stone-600" {...props}/>
            )

          }}
        >
          {resource.content}
        </ReactMarkdown>

      </article>


      {/* RELATED */}

      <section className="mt-20">

        <SectionHeading className="mb-10 text-center">
          Related Resources
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">

          {relatedResources.map((item) => (

            <Card key={item.slug}>

              <h3 className="mb-2 font-semibold text-text">
                {item.title}
              </h3>

              <p className="mb-4 text-sm text-stone-600">
                {item.summary}
              </p>

              <Link
                to={`/resources/${item.slug}`}
                className="text-sm font-medium text-gold hover:underline"
              >
                Read Article →
              </Link>

            </Card>

          ))}

        </div>

      </section>

    </ArticleContainer>

  )

}

export default ResourceDetailPage