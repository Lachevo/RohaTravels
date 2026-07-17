import React from 'react';

const DestinationToggle = ({ isAmharic, isLocal, setIsLocal }) => {
  return (
    <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl border border-slate-200/50">
      <button
        onClick={() => setIsLocal(true)}
        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
          isLocal
            ? 'bg-[#294050] text-[#C8DDD8] shadow-md'
            : 'text-slate-500 hover:text-[#294050]'
        }`}
      >
        {isAmharic ? "የአገር ውስጥ" : "Domestic"}
      </button>
      <button
        onClick={() => setIsLocal(false)}
        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
          !isLocal
            ? 'bg-[#294050] text-[#C8DDD8] shadow-md'
            : 'text-slate-500 hover:text-[#294050]'
        }`}
      >
        {isAmharic ? "ዓለም አቀፍ" : "International"}
      </button>
    </div>
  );
};

export default DestinationToggle;
