export const workData = {
  ourWorkHero: {
    eyebrow: "Our Work",
    headingLine1: "Creating opportunities.",
    headingLine2: "Strengthening families.",
    description:
      "Two focused initiatives that create dignified livelihoods and safe, nurturing families.",
    image: {
      // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/hero.jpg")
      src: "/images/our-work/hero-placeholder.svg",
      imageAlt:
        "Young people smiling together outdoors in a park, representing the families and communities Catalyst India works with",
    },
  },

  initiatives: {
    heading: "Our Current Initiatives",
    items: [
      {
        id: "entrepreneurship",
        title: "Entrepreneurship Development",
        description:
          "Equipping individuals with opportunities, practical business skills and resources to build dignified and sustainable livelihoods.",
        icon: "sprout",
        // later: confirm slug from the SRS slug registry
        href: "/work/entrepreneurship-development",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/entrepreneurship.jpg")
          src: "/images/our-work/initiative-entrepreneurship-placeholder.svg",
          imageAlt:
            "A woman working at a sewing machine in a training workshop, representing entrepreneurship and livelihood skills",
        },
      },
      {
        id: "foster-care",
        title: "Development of Foster Care Initiatives",
        description:
          "Strengthening and supporting safe, nurturing family-based care through awareness, family identification and training, with ongoing support.",
        icon: "users",
        // later: confirm slug from the SRS slug registry
        href: "/work/foster-care-initiatives",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/foster-care.jpg")
          src: "/images/our-work/initiative-foster-care-placeholder.svg",
          imageAlt:
            "An adult and a child sharing a warm moment outdoors, representing safe and nurturing family-based care",
        },
      },
    ],
  },
    howWeWork: {
    heading: "How we work",
    steps: [
      {
        id: "challenge",
        title: "Challenge",
        description: "Identify real needs in our cities.",
        icon: "binoculars",
      },
      {
        id: "response",
        title: "Catalyst response",
        description: "Bring people, resources and solutions together.",
        icon: "lightbulb",
      },
      {
        id: "outcome",
        title: "Stronger communities",
        description: "People and families with greater opportunities.",
        icon: "users",
      },
    ],
  },
    legacy: {
    heading: "A legacy of transformation",
    badge: "Archive / Not current",
    description:
      "Past initiatives that have contributed to city transformation. Details and dates are subject to verification.",
    items: [
      {
        id: "tgis",
        title: "TGIS",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-tgis.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the TGIS initiative",
        },
      },
      {
        id: "diversion",
        title: "Diversion",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-diversion.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the Diversion initiative",
        },
      },
      {
        id: "horizon",
        title: "Horizon",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-horizon.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the Horizon initiative",
        },
      },
      {
        id: "a-place-to-call-home",
        title: "A Place to Call Home",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-home.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the A Place to Call Home initiative",
        },
      },
      {
        id: "c3",
        title: "C3",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-c3.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the C3 initiative",
        },
      },
      {
        id: "youthlight",
        title: "YouthLight",
        image: {
          // later: swap to the real, consent-cleared photo (e.g. "/images/our-work/legacy-youthlight.jpg")
          src: "/images/our-work/legacy-placeholder.svg",
          imageAlt: "Archive photo representing the YouthLight initiative",
        },
      },
    ],
  },
      cta: {
    title: "Support the work.",
    primaryCta: { label: "Donate", href: "/donate" },
    secondaryCta: { label: "Partner With Us", href: "/get-involved" },
  },

  // next sections get added here as new keys, one per section
};