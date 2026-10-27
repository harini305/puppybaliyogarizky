import { Prata, Lato } from "next/font/google";
import "./globals.css";

const prata = Prata({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://puppyyogabalirizki.com"),
  title: "Puppy Yoga Bali Rizky | Puppy Yoga in Ubud & Canggu",
  description:
    "Gentle, beginner-friendly yoga with playful puppies in Ubud and Canggu, Bali. Sessions of about one hour, from IDR 650.000 per person. Book online or message us on WhatsApp.",
  openGraph: {
    title: "Puppy Yoga Bali Rizky",
    description:
      "Yoga heals the body. Puppies heal the heart. Puppy yoga sessions in Ubud and Canggu, Bali.",
    url: "/",
    siteName: "Puppy Yoga Bali Rizky",
    images: [{ url: "/images/og.jpg", width: 1200, height: 630 }],
    type: "website",
  },
};

export const viewport = {
  themeColor: "#f7f2ea",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${prata.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
