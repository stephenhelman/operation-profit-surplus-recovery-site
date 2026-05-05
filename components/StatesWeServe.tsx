const states = [
  "Alabama", "Arizona", "Arkansas", "California", "Colorado",
  "Connecticut", "Delaware", "Florida", "Georgia", "Idaho",
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
  "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York",
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
  "Wisconsin", "Wyoming",
];

export default function StatesWeServe() {
  return (
    <section id="states" className="bg-[#0D0D0D] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-body text-gold text-sm tracking-[0.3em] uppercase font-semibold">
            Coverage
          </span>
          <h2 className="font-heading text-4xl md:text-5xl text-white mt-3">
            Serving Claimants Across the Nation
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6" />
          <p className="font-body text-gray-400 text-lg font-light mt-6 max-w-xl mx-auto">
            We currently operate in 45+ states and are actively expanding.
            If your state isn&apos;t listed, contact us — coverage grows weekly.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {states.map((state) => (
            <span
              key={state}
              className="font-body text-sm font-semibold text-gold border border-gold/40 px-3 py-1.5 tracking-wide hover:bg-gold/10 transition-colors duration-200"
            >
              {state}
            </span>
          ))}
        </div>

        <p className="font-body text-gray-600 text-sm text-center mt-10 tracking-wide">
          Don&apos;t see your state? Contact us — we may still be able to help.
        </p>
      </div>
    </section>
  );
}
