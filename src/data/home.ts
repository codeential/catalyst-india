
export const homeData = {

hero: {
  eyebrow: "CATALYST INDIA | EST. 2008",
  title: "Building Great Cities. Together.",
  description:
    "Since 2008, Catalyst India has brought people, institutions and possibilities together to build cities where everyone can flourish.",

  image: "/images/hero/hero-1.jpg",

  backgroundImages: [
    "/images/home/hero1.jpg",
    "/images/home/hero2.jpg",
    "/images/home/hero3.jpg",
    "/images/home/hero4.jpg",
    "/images/home/hero5.jpg",
    "/images/home/hero6.jpg",
  ],

  primaryCta: "Explore Our Work",
  primaryHref: "/work",

  secondaryCta: "Donate",
  secondaryHref: "/donate",
},
  sectionTwo: {
    heading: 'What makes a great city?',
    description:
      'A great city is one where children belong, families thrive, livelihoods are dignified and communities participate in shaping their future. We believe transformation happens when people work together across boundaries.',
    items: [
      { label: 'Belonging for children', icon: 'users' },
      { label: 'Thriving families', icon: 'leaf' },
      { label: 'Dignified livelihoods', icon: 'briefcase' },
      { label: 'Active communities', icon: 'building' },
    ],
  },

  approach: {
  title: 'How We Work',
  subtitle: 'Our Four Cs',
  backgroundImage: '/images/home/how-we-work-bg.jpg',
  items: [
    {
      label: 'Collaborate',
      icon: 'handshake',
      description:
        'Bring together communities, institutions, leaders and partners around shared challenges.',
    },
    {
      label: 'Create',
      icon: 'sprout',
      description:
        'Develop innovative, locally relevant responses that address root causes.',
    },
    {
      label: 'Connect',
      icon: 'users',
      description:
        'Build bridges across sectors and communities, linking people with resources and opportunities.',
    },
    {
      label: 'Celebrate',
      icon: 'star',
      description:
        'Recognise dignity, progress and collective achievement; share stories that inspire participation.',
    },
  ],
  // leadershipFoundations stays as it is
  leadershipFoundations: {
      title: 'Leadership Foundations',
      description:
        'As part of the Leadership Foundations network, Catalyst embraces a complementary approach to city transformation.',
      items: [
        {
          label: 'Engage Leaders',
          description:
            'Engage leaders of good faith and goodwill around the common good.',
        },
        {
          label: 'Build Capacity',
          description:
            'Build the capacity of people and organisations to lead sustainable change.',
        },
        {
          label: 'Develop Initiatives',
          description:
            'Develop joint initiatives that turn shared vision into collaborative action.',
        },
      ],
    },
},
  ourWork: {
    title: 'Our Work Today',
    description:
      'We connect people, strengthen communities and create practical solutions to social challenges.',
    items: [
      {
        title: 'Entrepreneurship Development',
        image: '/images/home/IMG_8150.jpg',
        href: '/work/entrepreneurship-development',
      },
      {
        title: 'Foster Care Initiatives',
        image: '/images/home/Dave-Hillis.jpg',
        href: '/work/foster-care-initiatives',
      },
    ],
  },

  legacy: {
    title: 'Our Legacy of Transformation',
    description:
      'Our journey has evolved through direct interventions, collaborative initiatives and the development of independent and affiliated organisations.',
    items: [
      { name: 'TGIS' },
      { name: 'Diversion' },
      { name: 'Horizon' },
      { name: 'A Place to Call Home' },
      { name: 'C3' },
      { name: 'YouthLight' },
    ],
  },

  ourEcosystem: {
  title: 'Our Wider Ecosystem',
  description: 'Relationships that extend Catalyst’s vision through enterprise, education and community transformation.',
  items: [
    { name: 'Redmoon Bakery', logo: '/images/ecosystem/redmoon-bakery.png', href: 'https://...' },
    { name: 'Capital Coffee', logo: '/images/ecosystem/capital-coffee.png' },
    // add as many as you want
  ],
},

  // impact: {
  //   title: 'Our Impact',
  //   stats: [
  //     {
  //       icon: 'users',
  //       label: 'People reached',
  //       value: '',
  //     },
  //     {
  //       icon: 'heart',
  //       label: 'Communities engaged',
  //       value: '',
  //     },
  //     {
  //       icon: 'sprout',
  //       label: 'Initiatives supported',
  //       value: '',
  //     },
  //   ],
  //   video: {
  //     thumbnail: '/images/home/impact-video.jpg',
  //     youtubeId: '',
  //     title: 'Watch how Catalyst India is building great cities',
  //   },
  // },
impact: {
  title: 'Our Impact & Stories',
  stats: [
    { icon: 'users', label: 'People reached', value: '10,000+' },
    { icon: 'book', label: 'Legacy projects', value: '6' },
    { icon: 'handshake', label: 'Partner organisations', value: '7' },
  ],
  video: {
    thumbnail: '/images/home/impact-video.jpg',
    youtubeId: '',
    title: 'Pooja’s Journey',
  },
  story: {
    title: 'Pooja’s Journey',
    description: 'From a vulnerable beginning to a life of confidence and opportunity.',
    href: '/impact',
    linkLabel: 'Read the full story',
  },
},
  cta: {
    title: 'Be part of building a great city.',
    primaryCta: {
      label: 'Give Today',
      href: '/donate',
    },
    secondaryCta: {
      label: 'Partner With Us',
      href: '/get-involved',
    },
  },
};
