export default function About() {
  return (
    <div className="min-h-screen bg-white px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-10">
        Our Vision & Mission
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="shadow-lg p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p>
            To be the Service Provider of Choice for Integrated Facilities
            Management and Engineering Services across the GCC.
          </p>
        </div>

        <div className="shadow-lg p-6 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p>
            Deliver innovative solutions with professionalism, efficiency, and
            service excellence.
          </p>
        </div>
      </div>
    </div>
  );
}
