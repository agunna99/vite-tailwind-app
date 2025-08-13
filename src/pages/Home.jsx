export default function Home() {
  return (
    <div className="pt-20">
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
    </div>
  );
}
