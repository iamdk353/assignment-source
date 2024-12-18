import { Dispatch, SetStateAction } from "react";

const Nav = ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) => {
  return (
    <div className="w-full bg-slate-100/70 h-[4rem] text-2xl font-semibold flex items-center px-10 justify-between">
      <p
        className="cursor-pointer"
        onClick={() => {
          setRoute("");
        }}
      >
        Ashwini
      </p>
      <div className="inline-flex space-x-10 font-normal cursor-pointer ">
        <p
          className="hover:underline"
          onClick={() => {
            setRoute("skills");
          }}
        >
          Skills
        </p>
        <p
          className="hover:underline"
          onClick={() => {
            setRoute("about");
          }}
        >
          About
        </p>
      </div>
    </div>
  );
};
export default Nav;
