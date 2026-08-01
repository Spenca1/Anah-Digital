import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import StructuredData from "./structured-data";
import { siteConfig } from "@/lib/site";
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#2563eb",
};




const inter = Inter({
  subsets: ["latin"],
});


export const metadata: Metadata = {
metadataBase: new URL(
  process.env.NEXT_PUBLIC_SITE_URL ??
    "https://anahdigital.com"
),

  title: {
    default:
      "Anah Digital | Digital Solutions",
    template:
      "%s | Anah Digital",
  },

  description:
    "Software development, technology insights, and digital solutions for Nigerian businesses.",


  openGraph: {

    title:
      "Anah Digital | Digital Solutions For Nigerian Businesses",

    description:
"Helping businesses build modern websites, web applications, mobile apps and scalable digital solutions using React, Next.js and modern technologies.",

    url: siteConfig.url,

    siteName:
      "Anah Digital",

    images: [
  siteConfig.ogImage,
],

    locale:
      "en_US",

    type:
      "website",

  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Anah Digital | Digital Solutions",

    description:
      "Technology insights and digital solutions for Nigerian businesses.",

    images:
      [
        "/images/image1.png"
      ],

  },
  keywords: [
  "Software Engineer",
  "Full Stack Developer",
  "Next.js Developer",
  "React Developer",
  "Java Developer",
  "Portfolio",
  "Software Development",
  "Web Development",
  "Digital Solutions",
  "Nigeria",
  "Anah Digital",
],


authors: [
  {
    name: "Anah Thankgod Uchechukwu",
  },
],
creator: "Anah Thankgod Uchechukwu",

publisher: "Anah Digital",



alternates: {
  canonical: "https://anahdigital.com",
},


};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

   <html lang="en" suppressHydrationWarning>

      <body
        className={`${inter.className} min-h-screen flex flex-col`}
      >
        <StructuredData />
        <ThemeProvider> 

        {children}

        <GoogleAnalytics
          gaId="G-73SS8VDT19"
        />
        </ThemeProvider>
  

      </body>

      

    </html>

  );

}