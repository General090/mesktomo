import React from 'react'
import { Boxes, Cpu, Globe2, BadgeCheck } from "lucide-react";

const ChooseUs = () => {

    const features = [
        { id: 1, items: Boxes, header: "Comprehensive Solutions", text: "End-to-end logistics services covering every aspect of the supply chain." },
        { id: 2, items: Cpu, header: "Cutting-Edge Technology", text: "Innovative systems to enhance efficiency, security, and visibility." },
        { id: 3, items: Globe2, header: "Global Network", text: "Strong international partnerships to streamline your operations worldwide." },
        { id: 4, items: BadgeCheck, header: "Proven Track Record", text: "Trusted by businesses across multiple industries for reliable logistics." },
    ]

  return (
    <div className='text-center mb-30'>
      <h1>Why Choose Us</h1>

      <div className='flex justify-center gap-5'>
        {features.map((feature) => 
          <div key={feature.id} className='w-[20%] bg-amber-500 p-5 space-y-4 rounded-md'>
            <h2><feature.items className='mx-auto' /></h2>
            <h1 className='font-bold text-lg'>{feature.header}</h1>
            <p>{feature.text}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ChooseUs
