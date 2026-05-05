export default function About() {
  return (
    <section id="about" className="bg-black py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
              Who We Are
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-white mt-3 mb-6">
              About OP Asset Recovery
            </h2>
            <div className="w-16 h-1 bg-gold mb-8" />
          </div>

          <div className="space-y-6">
            <p className="font-body text-gray-300 text-lg leading-relaxed font-light">
              Operation Profit Asset Recovery is a professional firm dedicated to
              helping property owners, former homeowners, and heirs recover funds
              they are legally owed from foreclosure and tax deed proceedings.
            </p>
            <p className="font-body text-gray-300 text-lg leading-relaxed font-light">
              When a property is sold at auction for more than what was owed, the
              remaining surplus belongs to the original owner. These funds often
              go unclaimed — not because they don&apos;t exist, but because most
              people don&apos;t know they&apos;re owed them.
            </p>
            <p className="font-body text-gray-300 text-lg leading-relaxed font-light">
              We cut through the complexity of court filings, agency
              communications, and legal requirements so you don&apos;t have to.
              Our contingency-based model means we only succeed when you do.
            </p>

            <div className="pt-4 border-t border-white/10">
              <p className="font-body text-gray-500 text-sm tracking-wide">
                Operation Profit Asset Recovery is a division of{" "}
                <span className="text-gold font-semibold">Operation Profit LLC</span>
                , registered and operating in El Paso, TX.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
