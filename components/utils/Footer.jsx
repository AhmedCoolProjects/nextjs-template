import { AppContext } from "contexts/AppContext";
import { useContext } from "react";

function Copyright() {
  return (
    <h1 className="text-center text-sm mt-2">
      {"Copyright © "}
      <a
        target="blank_"
        href="https://ahmedbargady.me"
        className="underline font-bold text-sm">
        Jina Cool Projects
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </h1>
  );
}

function Footer() {
  const [isDark] = useContext(AppContext);
  return (
    <footer
      className={
        isDark ? "mt-12 p-12 bg-[#424242]" : "mt-12 p-12 bg-[#eeeeee]"
      }>
      <h1 className="text-base text-center">Created with ❤️ By:</h1>
      <h1 className="text-xl text-center ">Ahmed BARGADY</h1>
      <Copyright />
    </footer>
  );
}

export default Footer;
