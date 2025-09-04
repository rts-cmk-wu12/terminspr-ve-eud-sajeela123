import { Geist } from "next/font/google";
import "./globals.css";

const Ubuntu = Geist({
 weight:["300", "400", "500", "700"],
  subsets: ["latin"],
});


export const metadata = {
  title:{
  default: "Landrup Dans",
  template: "%s | Landrup Dans",
},
  description: "A mobile web application for a dance school",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={Ubuntu.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
