export type ApproachId = "collaborate" | "create" | "connect" | "celebrate";

export type ApproachItem = {
  id: ApproachId;
  title: string;
  text: string;
};

export const approach: ApproachItem[] = [
  {
    id: "collaborate",
    title: "Collaborate",
    text: "We collaborate with key groups who have a passion for the transformation of Delhi.",
  },
  {
    id: "create",
    title: "Create",
    text: "We create innovative holistic solutions to the environmental, economic, and educational issues facing Delhi.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "We connect the most vulnerable of Delhi to a new generation of emerging leaders to enrich and empower each other.",
  },
  {
    id: "celebrate",
    title: "Celebrate",
    text: "We celebrate the transformation.",
  },
];

export type Pillar = {
  id: "empowered" | "educated" | "environmentally-conscious" | "economically-sustainable";
  title: string;
  points: string[];
};

export const visionStatement =
  "We seek a Resurgent Delhi where people are empowered, educated, environmentally conscious and leading economically sustainable life.";

export const pillars: Pillar[] = [
  {
    id: "empowered",
    title: "Empowered",
    points: [
      "Understanding their identity and purpose, people are both fulfilled and productive.",
    ],
  },
  {
    id: "educated",
    title: "Educated",
    points: [
      "People are employable because they have received education and training.",
      "People can and do read.",
    ],
  },
  {
    id: "environmentally-conscious",
    title: "Environmentally Conscious",
    points: [
      "People take ownership of the attitude, appearance and safety of their city, homes, and self.",
      "Art and beauty are encouraged and expressed.",
    ],
  },
  {
    id: "economically-sustainable",
    title: "Economically Sustainable",
    points: [
      "There is a job opportunity for everyone.",
      "Our dependence on each other is celebrated.",
    ],
  },
];

export const bridgesText: string[] = [
  "From the very beginning, one of the key components of Catalyst was relationship.",
  "Seeking opportunities to spend time with them where they are with an intention to develop relationships that are non judgmental in nature.",
  "Therefore Catalyst designed and built bridges on the islands of the rich/middle class and those on the margins.",
];