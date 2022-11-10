import Link from "next/link";
import classes from "./MainHeader.module.scss"

const MainHeader = () => {
  return (
    <header>
      <nav className={classes.nav}>
        <ul>
            <Link href="/">
                Engineers
            </Link>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
