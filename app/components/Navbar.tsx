import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar shadow-sm">
      <div className="navbar-start">
        <Link className="btn btn-ghost text-xl" href="/">
          Masseria Booking
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/benefits">Vorteile</Link>
          </li>
          <li>
            <Link href="/about">Über uns</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
