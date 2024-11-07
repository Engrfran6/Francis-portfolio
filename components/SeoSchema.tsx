// components/SchemaMarkup.js
export default function SchemaMarkup() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareEngineer', // Single, primary type
    name: 'Francis Okpoluaefe',
    jobTitle:
      'Frontend Developer | MERN Stack Developer | Software Developer | React Developer | Next.js Developer',
    skills: 'React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS, Bootstrap, Styled Components',
    url: 'https://deulo.vercel.app',
    sameAs: [
      'https://linkedin.com/in/deulo',
      'https://github.com/engrfran6',
      'https://x.com/deulodev',
    ],
    description:
      'Software developer specializing in MERN stack, React, and Next.js with expertise in UI design, API integration, clean code practices, and a focus on scalable, efficient applications.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{__html: JSON.stringify(schemaData)}}
    />
  );
}
