import {
  Target,
  Users,
  TrendingUp,
  Brain,
  MessageCircle,
  Flag,
  ShieldCheck
} from "lucide-react"

function AboutPage() {

  const values = [
    {
      icon: Target,
      title: "Intentionality Over Assumption",
      text:
        "We do not leave character development to chance. We approach child development with clarity, purpose, and strategy."
    },
    {
      icon: Users,
      title: "Shared Responsibility",
      text:
        "Parents, teachers, caregivers, mentors, and communities all play a role in shaping a child’s development."
    },
    {
      icon: TrendingUp,
      title: "Growth for Adults and Children",
      text:
        "As children grow, the adults around them must grow too. Reflection and self-awareness are essential."
    },
    {
      icon: Brain,
      title: "Emotional Intelligence Matters",
      text:
        "Strength is not the absence of emotion. It is the ability to understand, manage, and communicate wisely."
    },
    {
      icon: MessageCircle,
      title: "Safe & Honest Conversations",
      text:
        "We create spaces where adults can ask questions, share struggles, and grow without judgment."
    },
    {
      icon: Flag,
      title: "Leadership Begins at Home and Beyond",
      text:
        "Homes, classrooms, and communities are training grounds for future leaders."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Accountability",
      text:
        "We value character over image and responsibility over convenience."
    }
  ]

  return (
    <div className="space-y-24">

      {/* STORY */}

      <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">

        <div className="space-y-6">

          <h2 className="text-3xl font-semibold text-[#5A524A]">
            Our Story
          </h2>

          <p className="text-stone-600 leading-relaxed">
            The Next Chapter was born from a deep personal conviction.
            As a mother of two boys, I began reflecting on the kind of
            men they would become.
          </p>

          <p className="text-stone-600 leading-relaxed">
            Not just academically successful, but emotionally intelligent.
            Not just confident, but kind. Not just assertive, but respectful.
          </p>

          <p className="text-stone-600 leading-relaxed">
            Raising a child is not the responsibility of parents alone.
            Teachers shape minds. Caregivers influence behaviour.
            Mentors guide identity. Communities reinforce values.
          </p>

          <p className="text-stone-600 leading-relaxed">
            The Next Chapter is about building a collaborative village
            around every child.
          </p>

        </div>

        <div>
          <img
            src="/images/about.jpg"
            alt="Parent supporting a child"
            className="rounded-xl shadow-md w-full object-cover"
          />
        </div>

      </section>


      {/* PURPOSE BAND */}

      <section className="bg-[#F3EEE8] py-16">

        <div className="max-w-4xl mx-auto px-4 bg-white rounded-xl shadow-md p-8">

          <h2 className="text-3xl font-semibold text-[#5A524A] mb-4">
            Our Purpose
          </h2>

          <p className="text-stone-600 leading-relaxed mb-4">
            Our purpose is to create a supportive ecosystem that helps
            raise children who are intentional, confident, kind,
            assertive, resilient, and emotionally aware.
          </p>

          <ul className="list-disc pl-6 text-stone-600 space-y-2">

            <li>Equip parents with practical tools and structured guidance</li>
            <li>Support teachers and caregivers with growth-focused resources</li>
            <li>Create safe spaces for honest conversations</li>
            <li>Encourage reflection and development for adults and children</li>
            <li>Connect families to trusted professionals for deeper support</li>

          </ul>

          <p className="text-stone-600 mt-4">
            We are not raising children just for today.
            We are raising adults for tomorrow.
          </p>

        </div>

      </section>


      {/* VALUES */}

      <section className="max-w-6xl mx-auto px-4 space-y-10">

        <h2 className="text-3xl font-semibold text-[#5A524A]">
          Our Values
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {values.map((value, index) => {
            const Icon = value.icon

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition flex gap-4"
              >

                <div className="flex items-start pt-1">
                  <Icon size={26} className="text-[#C9B38C]" />
                </div>

                <div>
                  <h3 className="font-semibold text-[#5A524A] mb-1">
                    {value.title}
                  </h3>

                  <p className="text-stone-600 leading-relaxed">
                    {value.text}
                  </p>
                </div>

              </div>
            )
          })}

        </div>

      </section>

    </div>
  )
}

export default AboutPage