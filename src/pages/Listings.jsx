export default function Listings() {
  const properties = [
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
  ];

  return (
    <div className="pt-20 max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Available Listings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {properties.map((home, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src={home.img} alt={home.title} className="h-56 w-full object-cover rounded-t-xl" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{home.title}</h3>
              <p className="text-teal-600 font-bold">{home.price}</p>
              <p className="text-gray-500">{home.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
