import profile from "../assets/profile.jpg";

export default function AboutMe() {
  return (
    <section id="about" className="m-20 px-10 py-10 rounded-lg shadow-md bg-gradient-to-r from-black via-violet-950 to-black border-b border-violet-900 border-1">
      <h2 className="text-3xl mb-8 text-center text-white font-bold">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8 w-full">
        <img src={profile.jpg} alt="image" className="w-40 h-40 rounded-full object-cover border-2 border-white flex-shrink-0"/>
        <p className="text-lg text-white leading-relaxed text-center md:text-left">
          Hi, I'm Rochelle S. Menzi, a current student in the University of the Cordilleras in the Bachelor of Science in Information Technology program majoring in Network Security.
          As a student, I am interested in learning and building my skills in web development, particularly interested in designing clean user interfaces through code.
          My goal is to continuously improve my skills and build meaningful projects that make an impact.
        </p>
      </div>
    </section>
  );
}
