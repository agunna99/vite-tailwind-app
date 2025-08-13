export default function Contact() {
  return (
    <div className="pt-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <form className="bg-white p-8 rounded-xl shadow space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-3 rounded" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded" />
        <textarea placeholder="Message" rows="5" className="w-full border p-3 rounded"></textarea>
        <button className="bg-teal-500 text-white px-6 py-3 rounded hover:bg-teal-600 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
