export const impactData ={
    impactHero : {
  eyebrow: "Impact & Stories",
  headlineStart: "Change is measured in lives, relationships and",
  headlineAccent: "opportunity.",
  text: "Real stories, verified impact and a journey of transformation since 2008.",
  cta: { label: "Explore Stories", href: "#featured-story" }, // set id="featured-story" on the next section
  // later: replace with a consented photo, e.g. /images/impact-stories/hero.jpg
  image: "/images/impact-stories/hero-placeholder.svg",
  imageAlt: "Young people laughing together in a park",
},
impactStats: {
  heading: "Our Impact",
  items: [
    {
      id: "people",
      icon: "users",
      label: "People reached",
      // later: add a verified figure, e.g. value: "…", then remove the status line
      value: "" as string,
      status: "Verified figures coming soon",
    },
    {
      id: "communities",
      icon: "handshake",
      label: "Communities engaged",
      // later: add a verified figure
      value: "" as string,
      status: "Verified figures coming soon",
    },
    {
      id: "initiatives",
      icon: "sprout",
      label: "Initiatives supported",
      // later: add a verified figure (the source lists five projects)
      value: "" as string,
      status: "Verified figures coming soon",
    },
    {
      id: "figures",
      icon: "book",
      label: "Impact figures",
      // later: add a verified figure or a short confirmed statement
      value: "" as string,
      status: "Coming soon",
    },
  ],
},
impactJourney : {
  heading: "Our Journey Since 2008",
  milestones: [
    {
      id: "research",
      year: "2007",
      text: "Research on Delhi & NCR begins",
    },
    {
      id: "launch",
      year: "2008",
      text: "Catalyst formally launched",
    },
    {
      id: "initiatives",
      year: "",
      text: "A growing journey of initiatives", // confirm with Catalyst (from mockup)
    },
    {
      id: "partnerships",
      year: "",
      text: "Expanding partnerships and impact", // confirm with Catalyst (from mockup)
    },
    {
      id: "communities",
      year: "",
      text: "Strengthening communities and people", // confirm with Catalyst (from mockup)
    },
  ],
},
featuredStory : {
  eyebrow: "Featured Story",
  title: "Pooja’s Journey", // confirm spelling: source uses both "Puja" and "Pooja"
  text: "Pooja is now employed at Cross Stitch as a factory in-charge. She has two of her younger brothers living with her so they can pursue full-time education, and she has cleared her Bachelor’s Preparatory Program and is now pursuing her graduation.",
  cta: { label: "Read the Full Story", href: "/impact-stories/poojas-journey" }, // later: build from stories.ts
  // later: replace with a consented photo, e.g. /images/impact-stories/featured-story.jpg
  image: "/images/impact-stories/featured-story-placeholder.svg",
  imageAlt: "Portrait of a young woman smiling outdoors",
},
moreStories : {
  heading: "More Stories & Updates",
  viewAll: { label: "View All Stories", href: "/impact-stories/all" }, // later: set the real listing URL
  items: [
    {
      id: "babli",
      type: "Story",
      title: "Babli’s Story", // confirm: real, changed or anonymised name
      meta: "",
      href: "/impact-stories/babli-story", // later: build from stories.ts
      // later: replace with a consented photo, e.g. /images/impact-stories/story-babli.jpg
      image: "/images/impact-stories/story-babli-placeholder.svg",
      imageAlt: "Illustration placeholder for Babli’s story",
    },
    {
      id: "reboot",
      type: "Story",
      title: "Re-Boot in Action", // my label, confirm with Catalyst
      meta: "",
      href: "/impact-stories/re-boot-in-action", // later: build from stories.ts
      // later: replace with a consented photo, e.g. /images/impact-stories/story-reboot.jpg
      image: "/images/impact-stories/story-reboot-placeholder.svg",
      imageAlt: "Illustration placeholder for the Re-Boot story",
    },
    {
      id: "volunteer",
      type: "Update",
      title: "An Impact in India",
      meta: "May 2015",
      href: "/impact-stories/an-impact-in-india", // later: build from stories.ts
      // later: replace with a consented photo, e.g. /images/impact-stories/story-volunteer.jpg
      image: "/images/impact-stories/story-volunteer-placeholder.svg",
      imageAlt: "Illustration placeholder for the volunteer story",
    },
  ],
},
lfNetwork : {
  heading: "Leadership Foundations Network",
  text: "Catalyst India works alongside Leadership Foundations, a global network of connected leaders and organisations working for the social and spiritual renewal of cities.", // confirm wording with Catalyst
  // later: set the official Leadership Foundations URL (the link stays hidden while this is empty)
  link: { label: "Visit Leadership Foundations", href: "" },
  // later: replace with the official logo, e.g. /images/impact-stories/leadership-foundations-logo.svg
  logo: "/images/impact-stories/lf-logo-placeholder.svg",
  logoAlt: "Leadership Foundations logo",
},
reportsUpdates : {
  heading: "Reports & Updates",
  // later: set the reports listing URL (the link stays hidden while empty)
  viewAll: { label: "View All Reports", href: "" },
  items: [
    {
      id: "annual",
      icon: "file",
      title: "Annual Reports",
      text: "Organisation updates and financial information", // confirm with Catalyst that these exist
      // later: add the report page or PDF URL, then the "Coming soon" tag disappears
      href: "",
    },
    {
      id: "impact",
      icon: "clipboard",
      title: "Impact Reports",
      text: "Programme highlights and learnings", // confirm with Catalyst that these exist
      // later: add the report page or PDF URL
      href: "",
    },
    {
      id: "updates",
      icon: "news",
      title: "Latest Updates",
      text: "News, stories and announcements",
      href: "#more-stories", // later: point to a news listing if one is built
    },
  ],
},
closingCta : {
  heading: "Be part of building a great city.",
  text: "We collaborate with key groups who have a passion for the transformation of Delhi.",
  primary: { label: "Give Today", href: "/get-involved" }, // later: set the real donation route
  secondary: { label: "Partner With Us", href: "/get-involved" }, // later: set the partner enquiry route
},
};