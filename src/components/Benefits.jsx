import { benefits } from "../data";

export default function Benefits() {
  return (
    <section className="container mx-auto px-8 py-20 mb-28 mt-12">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-12 text-center w-full">
          Kenapa Pilih <span className="text-secondary">Kami?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white shadow hover:shadow-xl transition border border-gray-200"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="opacity-60 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}