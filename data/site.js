// Single source of truth for business facts and links.
// Everything here is taken from docs/source-audit (see 03-content-inventory.md).
// Conflicting details (street addresses, pickup phone numbers) are deliberately
// left out until the business confirms them (08-issues-gaps-questions.md §A).

export const site = {
  name: "Puppy Yoga Bali Rizky",
  url: "https://puppyyogabalirizki.com",
  tagline: "Yoga heals the body. Puppies heal the heart.",
  price: "From IDR 650.000",
  priceNote: "per person",
  duration: "About 1 hour",
};

export const booking = {
  ubud: "https://besact.hybridbooking.com/puppyyogabalirizki/booking/rsv/detail/PYB9928/Puppy-Yoga-Bali-Rizky-Ubud",
  canggu: "https://bes.hybridbooking.com/puppyyogabalirizki/booking/rsv/detail/PYB4983/Puppy-Yoga-Bali-Rizky-Canggu/",
};

export const contact = {
  whatsappDisplay: "+62 822 4766 3478",
  whatsappHref:
    "https://wa.me/6282247663478?text=Hello%2C%20I%20am%20interested%20in%20Puppy%20Yoga%20Bali%20Rizky",
  email: "puppyyogarizkybali@gmail.com",
  instagramHandle: "@puppy_yoga_bali_rizki",
  instagramHref: "https://www.instagram.com/puppy_yoga_bali_rizki",
};

export const locations = [
  {
    id: "ubud",
    name: "Ubud",
    area: "Ubud, Gianyar",
    mapHref: "https://maps.app.goo.gl/5w8n6jbfgpb7Jmje9",
    // Coordinates the map link resolves to (03-content-inventory.md §1.2)
    coords: "-8.5154566,115.2656286",
    bookHref: booking.ubud,
  },
  {
    id: "canggu",
    name: "Canggu / Pererenan",
    area: "Canggu area, Badung",
    mapHref: "https://maps.app.goo.gl/JhCqDRDyHtrPBsgh6",
    coords: "-8.6365959,115.1531645",
    bookHref: booking.canggu,
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#journal", label: "Blog" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

// Answers are condensed from the FAQ sections of the original blog posts
// (content/posts/*.md). No new policies are introduced.
export const faqs = [
  {
    q: "Do I need yoga experience?",
    a: "No. The yoga is gentle and beginner-friendly, so you can join without any previous yoga practice.",
  },
  {
    q: "Do I need to be flexible?",
    a: "No. You move at your own comfort level and can adjust any pose when you need to.",
  },
  {
    q: "What should I wear?",
    a: "Comfortable, breathable activewear you can move in: a T-shirt, shorts, leggings or yoga pants all work. Keep jewellery simple, as dangling accessories can distract curious puppies.",
  },
  {
    q: "Do I need to bring my own yoga mat?",
    a: "This depends on the venue. Check your booking information before you arrive. A bottle of water and a small towel are useful in Bali's warm climate.",
  },
  {
    q: "How should I behave around the puppies?",
    a: "Let the puppies approach naturally, handle them gently, and don't wake a puppy that is resting. Their comfort always comes first.",
  },
  {
    q: "Can I take photos?",
    a: "Photo opportunities may be available. Follow the class guidance and avoid disturbing the puppies or other guests.",
  },
  {
    q: "Can couples and friends join together?",
    a: "Yes. Puppy yoga suits couples, friends, groups and solo travellers alike.",
  },
  {
    q: "Should I book in advance?",
    a: "Yes, especially if you have a specific date in mind. Prices and availability can change, so check the booking page before you reserve.",
  },
];

export const articles = [
  {
    title: "Puppy Yoga Bali Price 2026: Cost, Locations & What to Expect",
    excerpt: "What a session costs, how long it lasts, and how to choose between Ubud and Canggu.",
    href: "https://puppyyogabalirizki.com/puppy-yoga-bali-price/",
    image: "blogPrice",
  },
  {
    title: "Puppy Yoga Bali for Beginners: Everything You Need to Know",
    excerpt: "What happens in a class, what to wear, and how to be around the puppies on your first visit.",
    href: "https://puppyyogabalirizki.com/puppy-yoga-bali-for-beginners/",
    image: "blogBeginners",
  },
  {
    title: "Is Puppy Yoga Good for Dogs? The Truth About Puppy Welfare",
    excerpt: "What responsible puppy yoga should look like, from rest and supervision to letting puppies choose.",
    href: "https://puppyyogabalirizki.com/is-puppy-yoga-good-for-dogs/",
    image: "blogWelfare",
  },
];
