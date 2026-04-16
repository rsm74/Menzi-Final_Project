import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "🧠 Critical Thinking", width: "64%" },
    { name: "📝 Problem Solving", width: "76%" },
    { name: "💻 Java", width: "39%" },
    { name: "💻 Python", width: "35%" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="m-20 px-10 py-10 rounded-lg shadow-md bg-gradient-to-r from-black via-violet-950 to-black border-b border-violet-900 border-1">
      <h2 className="text-3xl mb-8 text-center text-white font-bold">Skills</h2>

      <div className="grid sm:grid-cols-2 gap-4">{skills.map((skill, i) => (
          <div key={i}>
            <p className="font-bold text-white">{skill.name}</p>
            <div className="bg-gray-600 h-4 rounded-full overflow-hidden">
              <div className="h-4 rounded-full bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 transform origin-left transition-transform duration-1000 ease-out" style={{
                  width: skill.width,
                  transform: visible ? "scaleX(1)" : "scaleX(0)",
                  transitionDelay: `${i * 200}ms`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}