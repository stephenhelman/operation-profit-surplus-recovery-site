const stats = [
  {
    value: "Nationwide",
    label: "Service Coverage",
    description: "We operate in all 50 states",
  },
  {
    value: "No Recovery",
    label: "No Fee",
    description: "Zero upfront cost — ever",
  },
  {
    value: "Licensed",
    label: "LLC",
    description: "Operating under Operation Profit LLC",
  },
  {
    value: "Free",
    label: "Consultation",
    description: "No obligation to find out what you're owed",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gold py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="font-heading text-2xl md:text-3xl text-black leading-tight">
                {stat.value}
              </div>
              <div className="font-heading text-lg md:text-xl text-black/70 mt-1">
                {stat.label}
              </div>
              <div className="w-8 h-px bg-black/20 mx-auto my-3" />
              <div className="font-body text-sm text-black/60 font-light">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
