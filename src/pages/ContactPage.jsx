import { Button, InputField, TextareaField, SectionHeading } from "../components/ui"

function ContactPage() {
  return (
    <div className="max-w-xl mx-auto space-y-8">

      <SectionHeading>
        Contact Us
      </SectionHeading>

      <form className="space-y-4">

        <InputField label="Your Name" placeholder="Enter your name" />

        <InputField
          label="Your Email"
          type="email"
          placeholder="Enter your email"
        />

        <TextareaField
          label="Your Message"
          placeholder="How can we help you?"
        />

        <Button type="submit">
          Send Message
        </Button>

      </form>

    </div>
  )
}

export default ContactPage