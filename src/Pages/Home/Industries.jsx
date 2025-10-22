import React from "react";

const industries = () => {
  return (
    <div className="my-30 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-2">
        Industries We Serve
      </h1>
      <p className="text-gray-600 mb-10 text-sm">
        MESKTOMO LOGISTICS LIMITED supports a diverse range of industries
      </p>

      <div className="space-y-6">
        <div className="flex flex-wrap justify-center gap-5">
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Manufacturing and Industrial Goods
          </div>
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Retail and Consumer Products
          </div>
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Agriculture and Commodities
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Automotive and Machinery
          </div>
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Energy and Chemicals
          </div>
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Pharmaceuticals and Healthcare Equipment
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          <div className="rounded-full border-2 border-[#102d28] py-3 px-6 hover:bg-[#102d28] text-[#102d28] hover:text-[#cbdc00] transition duration-400">
            Technology and Electronics
          </div>
        </div>
      </div>
    </div>
  );
};

export default industries;
