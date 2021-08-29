import { AppContext } from "contexts/AppContext";
import Link from "next/link";
import { useContext } from "react";

const data = [
  { title: "tilte1", href: "/" },
  { title: "tilte1 title2", href: "/" },
  { title: "tilte1 title3", href: "/" },
  { title: "tilte1 title4", href: "/" },
  { title: "tilte1 title5", href: "/" },
  { title: "tilte1 title6", href: "/" },
  { title: "tilte1 title7", href: "/" },
  { title: "tilte1 title8", href: "/" },
  { title: "tilte1 title9", href: "/" },
  { title: "tilte1 title10", href: "/" },
  { title: "tilte1 title11", href: "/" },
  { title: "tilte1 title12", href: "/" },
  { title: "tilte1 title13", href: "/" },
];

function ScrollNavbar({ sections }) {
  const [isDark, handleChangeMode] = useContext(AppContext);
  return (
    <div
      className={`z-50 sticky top-0 ${
        isDark ? "bg-[#303030e8]" : "bg-[#fafafa]"
      }`}>
      <div
        className="overflow-x-scroll scrollbar-hide whitespace-nowrap w-full 
    space-x-10 sm:space-x-8 flex flex-row items-center py-2 px-12
    border-b-[0.2px] border-gray-300 relative mb-6">
        {sections.map((item) => (
          <Link key={item.title} href={item.link} passHref>
            <h1 className="text-base cursor-pointer hover:underline hover:scale-110 transform transition duration-100">
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-[#1b344473] h-10 w-1/12" />
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#1b344473] h-10 w-1/12" />
    </div>
  );
}

export default ScrollNavbar;
