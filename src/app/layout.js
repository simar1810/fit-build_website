import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "Fit & Build by Jehangir | Bodybuilding Coaching for Men 35+",
  description: "Bodybuilding-based transformation for men over 35 who want to build muscle, get lean, and become stronger, confident men.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
