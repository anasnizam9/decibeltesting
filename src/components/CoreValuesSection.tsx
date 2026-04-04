"use client";

interface Value {
  title: string;
  description: string;
  image: string;
}

const values: Value[] = [
  {
    title: "Innovation",
    description:
      "We prioritize creativity, innovation, and staying ahead of industry trends. We embrace change, take calculated risks, and continuously improve. Our commitment to ongoing learning, exploring new ideas, and identifying growth opportunities drives our success.",
    image: "/images/inovation.png",
  },
  {
    title: "Commitment",
    description:
      "We prioritize ownership, team alignment, and collaboration, demonstrating dedication to our mission and business goals. Our commitment to delivering on promises, following through on commitments, and being dependable underscores our reliability and consistency in achieving our objectives.",
    image: "/images/comit.png",
  },
  {
    title: "Excellence",
    description:
      "We place the customer first, emphasizing quality and working smartly. Our pursuit of perfection is directed toward delivering exceptional quality and performance. We prioritize ongoing improvement, attention to detail, and a commitment to learning and growth.",
    image: "/images/excellence.png",
  },
  {
    title: "Integrity",
    description:
      "We uphold unwavering honesty, credibility, and ethics in our actions and beliefs. Doing what is right, even in challenging or unpopular situations, is our commitment. We prioritize truthfulness, following through on promises, and treating others with respect and fairness.",
    image: "/images/integrity.png",
  },
  {
    title: "Empathy",
    description:
      "We possess empathy, valuing the ability to connect with others. Actively listening, understanding different perspectives, and providing support are core to our approach. Meeting the developmental needs of our team and employees, and ensuring support is our commitment.",
    image: "/images/empathy.png",
  },
];

export default function CoreValuesSection() {
  return (
    <section className="bg-[#f5f5f5] py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-5 text-4xl font-extrabold text-[#1f9f45] md:text-5xl">
            Rediscover the core of who we are
          </h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-[#3f4d5b] md:text-base">
            We have defined the following values to build a culture of trust, dependability, agility, and
            adaptability that helps us build strong relationships with colleagues, customers, and stakeholders while
            fostering purpose in our work.
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
            >
              <div className={index % 2 === 1 ? "md:order-last" : ""}>
                <h3 className="mb-4 text-3xl font-bold text-[#1b8f3f] md:text-4xl">
                  {value.title}
                </h3>
                <p className="max-w-xl text-sm leading-relaxed text-[#3f4d5b] md:text-base">
                  {value.description}
                </p>
              </div>

              <div className={`flex items-center justify-center ${index % 2 === 1 ? "md:order-first" : ""}`}>
                <div className="relative h-48 w-full max-w-[300px] md:h-56 md:max-w-[360px]">
                  <img
                    src={value.image}
                    alt={value.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
