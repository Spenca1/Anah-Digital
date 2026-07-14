export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "Person",

    name: "Anah Thankgod Uchechukwu",

    alternateName: "Anah Digital",

    url: "https://your-domain.com",

    image: "https://your-domain.com/images/image1.png",

    jobTitle: "Software Engineer",

    description:
      "Software Engineer specializing in modern websites, web applications, mobile applications and digital solutions.",

    email: "mailto:admin@anahdigital.com",

    sameAs: [
      "https://github.com/Spenca1",

      "https://x.com/AnahUchechukwu_",

      "https://linkedin.com/in/YOUR-LINKEDIN",

      "https://instagram.com/luvdoctor4_real",
    ],

    knowsAbout: [
      "Java",

      "JavaScript",

      "TypeScript",

      "React",

      "Next.js",

      "Node.js",

      "PostgreSQL",

      "Prisma",

      "Tailwind CSS",

      "Software Engineering",

      "Artificial Intelligence",
    ],

    worksFor: {
      "@type": "Organization",

      name: "Anah Digital",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}