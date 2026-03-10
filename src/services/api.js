const API_BASE = "http://localhost:5000/api"

export async function fetchResources() {
  const res = await fetch(`${API_BASE}/resources`)

  if (!res.ok) {
    throw new Error("Failed to fetch resources")
  }

  return res.json()
}

export async function fetchResourceBySlug(slug) {
  const res = await fetch(`${API_BASE}/resources/${slug}`)

  if (!res.ok) {
    throw new Error("Resource not found")
  }

  return res.json()
}