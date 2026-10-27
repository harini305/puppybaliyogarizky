// Resized WebP copies of original assets (docs/source-audit/original-assets).
// width/height are the intrinsic dimensions of the largest file and fix the
// aspect ratio; srcSet lists every size generated.

const img = (base, w, h, widths) => ({
  src: `/images/${base}-${widths[0]}.webp`,
  srcSet: widths.map((x) => `/images/${base}-${x}.webp ${x}w`).join(", "),
  width: w,
  height: h,
});

export const images = {
  // Hero photo deck
  hero: {
    ...img("hero-pavilion-puppy", 900, 600, [900, 600]),
    alt: "A smiling guest holds a fluffy cream puppy on her yoga mat in an open-air bamboo pavilion",
  },
  heroTwoPups: {
    ...img("g-two-pups", 900, 600, [900, 560]),
    alt: "A guest cradles two fluffy cream puppies against her chest beside a green garden",
  },
  heroTongue: {
    ...img("g-tongue-out", 900, 600, [900, 560]),
    alt: "A guest in glasses holds a happy white puppy with its tongue out",
  },

  // About highlights
  aboutPups: {
    ...img("about-two-pups", 900, 600, [900, 600]),
    alt: "A guest sitting on a purple mat while two ginger puppies play at his feet",
  },
  aboutRelax: {
    ...img("g-pink-hair", 900, 600, [900, 560]),
    alt: "A guest with pink hair relaxes on her mat while two puppies snuggle on top of her",
  },
  aboutPlay: {
    ...img("about-playful-pup", 900, 600, [900, 600]),
    alt: "A laughing guest on all fours as a puppy stands up beside his mat, with another puppy on his shoulders",
  },

  // Experience tabs
  expSession: {
    ...img("g-tabletop", 900, 600, [900, 560]),
    alt: "A guest in tabletop pose smiles down at two ginger puppies playing on the mat",
  },
  expPuppies: {
    ...img("experience-mat", 900, 600, [900, 600]),
    alt: "A young guest lies on her mat as one white puppy rests on her back and another sits beside her",
  },
  expDetails: {
    ...img("exp-details", 900, 600, [900, 600]),
    alt: "Two smiling guests each hold a fluffy puppy on the pavilion terrace, with rice fields and palms behind",
  },

  // Booking
  booking: {
    ...img("g-knees-portrait", 700, 1244, [700, 420]),
    alt: "A smiling guest lies on her mat, hugging her knees with a fluffy puppy resting on them",
  },

  // Blog previews (decorative: the link text describes the article)
  blogPrice: { ...img("blog-price", 1080, 608, [1080, 600]), alt: "" },
  blogBeginners: { ...img("blog-beginners", 900, 600, [900, 480]), alt: "" },
  blogWelfare: { ...img("blog-welfare", 900, 600, [900, 480]), alt: "" },

  // FAQ
  faq: {
    ...img("faq-portrait", 800, 1422, [800, 480]),
    alt: "A guest in tabletop pose on a teal mat with a small puppy on her back and a fluffy white puppy beside her",
  },
};

export const gallery = [
  {
    ...img("g-pavilion-group", 1200, 675, [1200, 640]),
    alt: "A group of guests stand on their mats in a bamboo pavilion, each holding a puppy, with palm trees behind",
  },
  {
    ...img("g-jump", 900, 600, [900, 560]),
    alt: "A laughing guest leans forward as a ginger puppy stretches up to lick her face",
  },
  {
    ...img("g-double-hug", 900, 600, [900, 560]),
    alt: "A guest sits on her mat hugging two small puppies close to her face",
  },
  {
    ...img("g-back-pup", 900, 600, [900, 560]),
    alt: "A black and white puppy sits on a guest's back while she rests in child's pose",
  },
  {
    ...img("g-cross-legged", 900, 600, [900, 560]),
    alt: "A guest sits cross-legged on the pavilion floor, surrounded by four fluffy puppies",
  },
  {
    ...img("g-family-group", 900, 600, [900, 560]),
    alt: "A family and friends stand together in the pavilion, each holding one or two puppies",
  },
  {
    ...img("g-three-pups", 900, 600, [900, 560]),
    alt: "Three fluffy puppies climb over a guest lying face down on her mat",
  },
  {
    ...img("g-heart-group", 900, 600, [900, 560]),
    alt: "Four guests pose together in the pavilion, holding curly red-brown puppies and making heart shapes",
  },
  {
    ...img("g-poodles", 900, 600, [900, 560]),
    alt: "Two guests each hold a curly red-brown puppy in front of a wall of rolled yoga mats",
  },
  {
    ...img("g-hug", 900, 600, [900, 560]),
    alt: "A laughing guest in a cherry-print top holds up a small white puppy on her mat",
  },
  {
    ...img("g-studio-kneel", 900, 600, [900, 560]),
    alt: "A guest kneels on a purple mat in a tall bamboo studio, holding a white puppy",
  },
  {
    ...img("g-pool-group", 1200, 675, [1200, 640]),
    alt: "A smiling group of guests poses by a swimming pool, each holding a puppy",
  },
];
