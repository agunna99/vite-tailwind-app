export default function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-[80vh] flex flex-col justify-center items-center text-center text-white px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1568605114967-8130f3a36994')",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Find Your Dream Home
        </h1>
        <p className="mb-6 text-lg md:text-xl drop-shadow-lg">
          Luxury Apartments • Beachfront Villas • City Penthouses
        </p>
        <div className="flex w-full max-w-lg bg-white rounded-full overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Search by city or ZIP..."
            className="flex-grow px-4 py-2 text-gray-800 outline-none"
          />
          <button className="bg-teal-500 px-6 py-2 text-white font-semibold hover:bg-teal-600 transition">
            Search
          </button>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Listings</h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-3 px-4">
          {[
            {
              img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
              title: "Oceanfront Villa",
              price: "$1,200,000",
              location: "Miami Beach, FL",
            },
            {
              img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
              title: "Downtown Penthouse",
              price: "$950,000",
              location: "Brickell, Miami, FL",
            },
            {
              img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
              title: "Modern Family Home",
              price: "$750,000",
              location: "Key Biscayne, FL",
            },
          ].map((home, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img src={home.img} alt={home.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{home.title}</h3>
                <p className="text-teal-600 font-bold">{home.price}</p>
                <p className="text-gray-500">{home.location}</p>
                <button className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          At Sunshine Realty, we specialize in luxury properties across Miami,
          Brickell, and Key Biscayne. Our dedicated team ensures that you find
          the perfect home or investment property, providing expert guidance and
          exceptional customer service.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-blue-500 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Ready to Find Your Next Home?</h2>
        <p className="mb-6">Contact our agents today to schedule a private tour.</p>
        <button className="bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Sunshine Realty. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-white">Facebook</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
