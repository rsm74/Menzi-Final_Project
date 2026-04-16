export default function Experience() {
  const experience = [
    {
      role: "Work Immersion Intern",
      company: "St Paul's Academy of Sayangan Inc.",
      year: "2024",
      description:
        "Assists in the maintainance of the school's computer laboratory and installation of wifi's within the campus.",
    },
    {
      role: "SPES (Special Program for Employment of Students) Intern",
      company: "Kibungan Municipal Engineering Office",
      year: "2023",
      description:
        "Assists in organizing the files in office both hardcopy and softcopy.",
    },
  ];

  return (
    <section id="experience" className="m-20 px-10 py-10 rounded-lg shadow-md bg-gradient-to-r from-black via-violet-950 to-black border-b border-violet-900 border-1">
      <h2 className="text-3xl mb-8 text-center text-white font-bold">Experience</h2>
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md rounded-lg p-6 shadow-md border border-violet-500/20">
            <h3 className="text-white text-xl font-bold">💼 {exp.role}</h3>
            <p className="text-violet-200">🏢 {exp.company}</p>
            <p className="text-sm text-gray-300">📅 {exp.year}</p>
            <p className="mt-2 text-sm"> ◦ {exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}