import Link from "next/link";
import { Wrapper, V } from "./styles";

export const Sidebar = () => {
  return (
    <Wrapper>
      <V>V</V>
      <ul>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <footer></footer>
    </Wrapper>
  );
};
