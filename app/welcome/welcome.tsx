import { Link } from "react-router";
import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import parse from "html-react-parser";

const brokenHtml = "<i> almost italic <i>";
export function Welcome() {
  return (
    <main className="grid items-center justify-center pt-16 pb-4">
      <p dangerouslySetInnerHTML={{ __html: brokenHtml }} suppressHydrationWarning></p>
      {/* <p>{parse(brokenHtml)}</p> */}
      <Link to="/other" className="border">
        navigate away
      </Link>
    </main>
  );
}
