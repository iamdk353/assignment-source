const skills: string[] = [
  "React",
  "Node.js",
  "MongoDB",
  "TypeScript",
  "JavaScript",
  " Redux Toolkit",
  "TailwindCSS",
  "Next.js",
  "REST APIs",
  "Firebase",
];

const Skills: React.FC = () => (
  <div className="h-[89vh] flex justify-center items-center">
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6  bg-gradient-to-r from-blue-400 to-blue-600 text-white w-[25rem]">
      <h3 className="text-lg font-semibold text-white">Skills</h3>
      <ul className="mt-3 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-blue-500">•</span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Skills;
