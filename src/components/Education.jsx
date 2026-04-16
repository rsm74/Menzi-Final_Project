export default function Education() {
  const education = [
    {
      school: "University of the Cordilleras",
      degree: "Bachelor of Science in Information Technology",
      year: "2024 - Present",
    },
    {
      school: "St. Paul's Academy of Sayangan Inc.",
      degree: "Senior Highschool (STEM Strand)",
      year: "2022 - 2024",
    },
  ];

  return (
    <section id="education" className="m-20 px-10 py-10 rounded-lg shadow-md bg-gradient-to-r from-black via-violet-950 to-black border-b border-violet-900 border-1">
      <h2 className="text-3xl mb-8 text-center text-white font-bold">Education</h2>
      <div className="space-y-6">
        {education.map((edu, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md border border-violet-500/20">
            <h3 className="text-white text-xl font-bold">🎓 {edu.school}</h3>
            <p className="text-violet-200">🕮 {edu.degree}</p>
            <p className="text-gray-300">📅 {edu.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
}