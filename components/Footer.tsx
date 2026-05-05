export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-heading text-gold text-lg tracking-wide">
              Operation Profit Asset Recovery
            </div>
            <div className="font-body text-gray-500 text-sm mt-1">
              A division of Operation Profit LLC
            </div>
          </div>

          <div className="text-center">
            <div className="font-body text-gray-500 text-sm">El Paso, TX</div>
          </div>

          <div className="text-center md:text-right">
            <div className="font-body text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Operation Profit LLC. All Rights Reserved.
            </div>
            <div className="font-body text-gray-700 text-xs mt-1">
              No attorney-client relationship is formed by contacting us.
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <div className="w-8 h-px bg-gold/30 mx-auto" />
        </div>
      </div>
    </footer>
  );
}
