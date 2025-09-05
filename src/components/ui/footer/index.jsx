import { GoHome, GoSearch, GoCalendar } from "react-icons/go";
import Link from "next/link";
import "./footer.scss";

export default function Footer() {
  return (
    <nav className="bottom-nav">
      <div className="nav-items">
        <Link href="/activities" className="nav-link">
          <GoHome size={24} className="icon" />
        </Link>
        <Link href="/search" className="nav-link">
          <GoSearch size={24} className="icon" />
        </Link>
        <Link href="/calendar" className="nav-link">
          <GoCalendar size={24} className="icon" />
        </Link>
      </div>
    </nav>
  );
}
