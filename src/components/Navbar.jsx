import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-600">
          Sunshine Realty
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-teal-600">Home</Link>
          <Link to="/listings" className="hover:text-teal-600">Listings</Link>
          <Link to="/contact" className="hover:text-teal-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
