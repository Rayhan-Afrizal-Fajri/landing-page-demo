import { benefits } from "../data";

export default function Benefits() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl text-[#ECECEC] md:text-4xl lg:text-6xl font-bold mb-12 text-center w-full">
          Kenapa Pilih <span className="text-accent3">Kami?</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#ECECEC] text-[#0D1B2A] shadow hover:shadow-xl transition border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#C62828] text-primary rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              </div>
                  <p className="opacity-60 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}