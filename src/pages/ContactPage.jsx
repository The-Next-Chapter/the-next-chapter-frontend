import { useState } from "react"
import {
  Button,
  InputField,
  TextareaField,
  SectionHeading
} from "../components/ui"
import { sendContactMessage } from "../services/api"
import PageWrapper from "../components/PageWrapper"

function ContactPage() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(null)
  const [error, setError] = useState(null)

  /* --------------------------
     HANDLE INPUT CHANGE
  --------------------------- */
  const handleChange = (e) => {
    const { name, value } = e.target

    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  /* --------------------------
     HANDLE SUBMIT
  --------------------------- */
  const handleSubmit = async (e) => {
    e.preventDefault()

    setLoading(true)
    setError(null)
    setSuccess(null)

    try {

      await sendContactMessage(form)

      setSuccess("Your message has been sent successfully.")
      setForm({
        name: "",
        email: "",
        message: ""
      })

    } catch (err) {

      setError(err.message || "Something went wrong")

    } finally {

      setLoading(false)

    }
  }

  return (
    <div className="max-w-xl mx-auto space-y-8">
      <PageWrapper>

      <SectionHeading>
        Contact Us
      </SectionHeading>

      <form onSubmit={handleSubmit} className="space-y-4">

        <InputField
          label="Your Name"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />

        <InputField
          label="Your Email"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />

        <TextareaField
          label="Your Message"
          name="message"
          placeholder="How can we help you?"
          value={form.message}
          onChange={handleChange}
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>

      </form>

      {/* --------------------------
          FEEDBACK
      --------------------------- */}

      {success && (
        <p className="text-sm text-center text-green-600">
          {success}
        </p>
      )}

      {error && (
        <p className="text-sm text-center text-red-500">
          {error}
        </p>
      )}
      </PageWrapper>
    </div>
  )
}

export default ContactPage