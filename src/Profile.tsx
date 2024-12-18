const Profile = () => {
  return (
    <div className="h-[89vh] flex justify-center items-center">
      <div className="max-w-md mx-auto bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-lg font-bold">Ashwini </h2>
            <p className="text-sm">Full Stack Developer</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold">Bio</h3>
          <p className="mt-1">
            I specialize in building scalable web applications using the MERN
            stack, with a passion for learning new technologies and solving
            complex problems.
          </p>
        </div>

        <div className="mt-4">
          <h3 className="text-md font-semibold">Skills</h3>
          <ul className="mt-1 space-y-1">
            <li>React, Node.js, MongoDB, Express</li>
            <li>TypeScript, JavaScript, Redux Toolkit</li>
            <li>TailwindCSS, Next.js</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="text-md font-semibold">Interests</h3>
          <p className="mt-1">
            AI, Machine Learning, Web Development, Open Source
          </p>
        </div>
      </div>
    </div>
  );
};
export default Profile;
