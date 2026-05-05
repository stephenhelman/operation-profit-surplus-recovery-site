"use client";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #DABD59 0, #DABD59 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Logo / Brand mark */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="w-12 h-1 bg-gold" />
          <span className="font-heading text-gold text-sm tracking-[0.3em] uppercase">
            OP Asset Recovery
          </span>
          <div className="w-12 h-1 bg-gold" />
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
          You May Be Owed{" "}
          <span className="text-gold">Money</span>{" "}
          From a Property Sale or Foreclosure.
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          After a foreclosure or tax deed sale, surplus funds often go unclaimed.
          We locate those funds, handle the legal process, and get you paid — at
          no upfront cost.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="font-heading text-black bg-gold hover:bg-gold-dark transition-colors duration-200 px-10 py-4 text-lg tracking-wider uppercase"
          >
            Find Out If You Qualify
          </button>
          <button
            onClick={scrollToContact}
            className="font-body text-gold border border-gold hover:bg-gold hover:text-black transition-colors duration-200 px-10 py-4 text-lg tracking-wider uppercase font-semibold"
          >
            Free Consultation
          </button>
        </div>

        <p className="mt-6 font-body text-gray-500 text-sm tracking-wide">
          No recovery. No fee. It costs you nothing to find out.
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-body text-xs tracking-widest uppercase text-gray-400">Scroll</span>
        <div className="w-px h-8 bg-gray-600 animate-pulse" />
      </div>
    </section>
  );
}
