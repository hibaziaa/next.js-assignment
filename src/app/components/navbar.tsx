import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-around text-white font-semibold">
        <li>
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="/jobs" className="hover:text-gray-300">
            Jobs
          </Link>
        </li>
        <li>
          <Link href="/jobs/programming" className="hover:text-gray-300">
            Programming Jobs
          </Link>
        </li>
        <li>
          <Link href="/error" className="hover:text-gray-300">
            Error Page
          </Link>
        </li>
        <li>
          <Link href="abc" className="hover:text-gray-300">
            Not Found Page
          </Link>
        </li>
      </ul>
    </nav>
  );
}
