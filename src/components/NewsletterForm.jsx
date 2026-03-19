import { useState } from "react"
import { subscribeNewsletter } from "../services/api"

function NewsletterForm() {

  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)
    setSuccess(null)

    try {

      await subscribeNewsletter({ email })

      setSuccess("You're subscribed.")
      setEmail("")

    } catch (err) {

      setError(err.message || "Subscription failed")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="space-y-3">

      {/* INPUT + BUTTON */}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-4 py-3 text-sm bg-white border rounded-md outline-none border-stone-300 focus:ring-2 focus:ring-gold"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-3 text-sm font-medium transition rounded-md shadow text-stone-500 bg-gold hover:opacity-90"
        >
          {loading ? "..." : "Subscribe"}
        </button>

      </form>

      {/* FEEDBACK */}

      {success && (
        <p className="text-xs text-green-600">
          {success}
        </p>
      )}

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}

    </div>
  )
}

export default NewsletterForm