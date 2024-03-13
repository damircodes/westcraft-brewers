import Image from "next/image";

import { Roboto } from "next/font/google";
import blog1 from "../../public/blog-1.jpg";
import blog2 from "../../public/blog-2.jpg";
import blog3 from "../../public/blog-3.jpg";

import { FadeIn } from "./FadeIn";

import la from "../../public/venice.jpg";

const stats = [
  {
    label: "20% Of Our Profits Go To Homelessness",
    value: "2 Million Donated To Shelters",
  },
  {
    label: "We Help Individuals Transition Off The Streets",
    value: "1500 Individuals Saved",
  },
  {
    label:
      "Counseling and rehabilitation sessions to empower individuals to break free from addiction.",
    value: "5,000 Counselling Sessions Provided",
  },
];
const values = [
  {
    name: "Building community",
    description:
      "We believe in cultivating relationships that inspire and support. From our team members to our customers, from local nonprofits to individuals battling homelessness and addiction, we strive to foster a sense of belonging and unity. We are dedicated to creating a vibrant, diverse, and compassionate community, where each voice matters and every member contributes to our collective impact.",
  },
  {
    name: "Share knowledge and experience",
    description:
      "At WestCraft, we believe that knowledge is a catalyst for change. Our approach is rooted in open-hearted transparency, inviting everyone to learn about our craft, our mission, and our shared responsibility. We strive to illuminate the realities of homelessness and addiction, to spark conversations, and to empower our community with the knowledge to make a difference.",
  },
  {
    name: "Always learning",
    description:
      "We at WestCraft are perpetual students, forever riding the wave of discovery. We recognize that mastery is an ongoing journey, whether it's in perfecting our craft, understanding complex social issues, or exploring innovative ways to create impact. Our thirst for knowledge keeps us agile, inventive, and always ready to adapt in our quest for solutions. Our humility in learning fuels our audacity in action.",
  },
  {
    name: "Be supportive",
    description:
      "our spirit of support goes far beyond our team—it extends to our community, our customers, and those we aim to help. We are dedicated to building a culture of empathy, where understanding and kindness are our cornerstones. We stand alongside those battling homelessness and addiction, offering not only resources but also unwavering encouragement and hope. We strive to uplift each other, because we know that every wave we ride, we ride together.",
  },
  {
    name: "Take responsibility",
    description:
      "There lies an unwavering commitment to own our actions and their impact. We recognize that we are not just creators of premium spirits, but stewards of our community. This translates into a keen sense of responsibility towards the societal issues we confront. We don't just voice concerns, we act on them, dedicating our resources and efforts to effect tangible change. For us, taking responsibility means being a part of the solution, leading with action, and inspiring others to do the same.",
  },
  {
    name: "Enjoy downtime",
    description:
      "we understand that the most compelling ideas often come in moments of rest. We celebrate downtime, cherishing it as a source of inspiration, balance, and rejuvenation. Whether we're catching a wave, cruising on a skateboard, or simply savoring the taste of our carefully crafted spirits, we recognize the importance of taking a step back to recharge. We are advocates of work-life balance, knowing that our mission is a marathon, not a sprint, and that enjoying downtime fuels our rebellious spirit and sustains our journey towards change.",
  },
];

const blogPosts = [
  {
    id: 1,
    title:
      "Crafting Spirits, Crafting Homes: WestCraft’s Mission to Fight Homelessness in LA",
    href: "",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: blog1,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title:
      "Breaking Waves, Making Change: How Surf Culture Influences WestCraft's Philanthropy",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: blog3,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title:
      "The Rebel's Guide to Giving Back: WestCraft's Unconventional Approach to Combatting Addiction",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: blog2,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

  // More posts...
];

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  style: "normal",
  display: "swap",
});

export default function Landing() {
  return (
    <FadeIn>
      <div className="bg-slate-400">
        <main className="isolate">
          {/* Hero section */}

          {/* Content section */}
          <div className="mx-auto -mt-12 pt-40 pb-10 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl  tracking-tight text-gray-900 sm:text-6xl mb-10">
                Our Mission
              </h2>
              <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                  <p
                    className={`${roboto.className} text-md leading-8 text-gray-700`}
                  >
                    We carve our own path at WestCraft California and are
                    redefining the beverage industry. Our ethos, much like our
                    spirits, is bold, daring, and unapologetically Californian.
                    Born in venice beach among friends and a lifestyle of
                    freedom, our brant goes beyond sharing drinks with good
                    friends. We&apos;re flipping the script on the social
                    challenges that gnaw at the golden state - homelessness and
                    addiction. We see them, we acknowledge them, and we&apos;re
                    here to do something fix the issue.
                  </p>
                  <div
                    className={`${roboto.className} mt-10 max-w-xl text-base leading-7 text-gray-700`}
                  >
                    <p>
                      We&apos;re driven by the gut-wrenching contrast of the LA
                      we love - a paradise of waves and concrete, scarred by the
                      shadows of the overlooked crises. We want our city of
                      angels back the way it was. We aim to provide a safe space
                      to crash, and the resources to fight personal problems. A
                      portion of every WestCraft bottle sold fuels this mission,
                      pushing forward our commitment to those struggling on the
                      streets and battling addiction. We&apos;re standing tall
                      with local non-profits and grassroots organizations who
                      grind daily against these issues, offering them our
                      rebellious spirit and unwavering support.
                    </p>
                    <p className="mt-10">
                      We&apos;re raising awareness, rallying resources, and
                      instigating change. Our fight? A more inclusive, safer,
                      and empathetic Los Angeles, we&apos;re not just about
                      crafting world-class beverages, we&apos;re about crafting
                      change in the beautiful costal paradise of California.
                    </p>
                  </div>
                </div>
                <div className="lg:flex lg:flex-auto lg:justify-center">
                  <dl className="w-64 space-y-8 xl:w-80">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col-reverse gap-y-4"
                      >
                        <dt
                          className={`${roboto.className} text-base leading-7 text-gray-600`}
                        >
                          {stat.label}
                        </dt>

                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                          {stat.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Image section */}
          <div className="mt-32 sm:mt-40">
            <Image
              src={la}
              alt=""
              className="aspect-[5/2] w-full object-cover xl:rounded-lg"
            />
          </div>

          {/* Values section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
                Our values
              </h2>
              <p
                className={`${roboto.className} mt-6 text-lg leading-8 text-gray-600`}
              >
                We understand the transformative power of knowledge, championing
                transparency and openness as we strive to effect change. We
                approach our craft and our mission with the humility of lifelong
                learners, fueled by curiosity and resilience. Our culture is
                steeped in support and empathy, as we stand shoulder to shoulder
                with our community and those we aim to uplift. We see
                responsibility not as a burden but as an honor, willingly
                embracing our role as agents of change. Recognizing the rhythm
                of life, we value the harmony between intensity and downtime,
                savoring those moments of reprieve that renew our spirits. And
                at our core, we are community builders, weaving a tapestry of
                diverse voices and shared passions. These are the guiding
                principles that shape our journey - a relentless pursuit of
                quality, impact, and camaraderie.
              </p>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {values.map((value) => (
                <div key={value.name}>
                  <dt className="font-normal text-2xl text-gray-900">
                    {value.name}
                  </dt>
                  <dd className={`${roboto.className} mt-8 text-gray-600`}>
                    {value.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Blog section */}
          <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Articles
              </h2>
              <p
                className={`${roboto.className} mt-8 text-lg leading-8 text-gray-600`}
              >
                Our articles span the breadth of our journey, from the
                intricacies of our craft to the heart of our mission. Here,
                you&apos;ll dive into our learnings, triumphs, challenges, and
                the people who make it all possible. So, whether you&apos;re
                seeking insights into our distilling process, the stories behind
                our community initiatives, or just looking for a dose of
                inspiration, you&apos;re in the right place. Let&apos;s embark
                on this journey together, one article at a time. Welcome to the
                WestCraft narrative.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <Image
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </main>
      </div>
    </FadeIn>
  );
}
