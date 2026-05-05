const steps = [
  {
    number: "01",
    title: "We Identify Your Funds",
    description:
      "We research public records across counties and jurisdictions nationwide to determine whether surplus funds were generated from your property's sale and remain unclaimed.",
  },
  {
    number: "02",
    title: "We Handle the Process",
    description:
      "Our team manages the entire recovery process — from documentation and filing to communicating with the courts or agencies holding your funds. You don't navigate the bureaucracy alone.",
  },
  {
    number: "03",
    title: "You Get Paid",
    description:
      "Once your claim is approved and funds are released, you receive your payment. We only collect our fee after you've been paid — there is zero cost to you upfront.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
            The Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative border border-white/10 p-8 hover:border-gold/40 transition-colors duration-300 group"
            >
              {/* Connector line between cards (desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 w-8 h-px bg-gold/30 z-10" />
              )}

              <div className="font-heading text-5xl text-gold/20 mb-4 group-hover:text-gold/40 transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="font-heading text-xl text-white mb-4">
                {step.title}
              </h3>
              <p className="font-body text-gray-400 text-base leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
