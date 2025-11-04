'use client';

import { useState } from 'react';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-[#3a3a3a] rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 bg-[#2a2a2a] hover:bg-[#333] transition-colors flex items-center justify-between text-left"
          >
            <span className="font-semibold text-white">
              {item.title}
            </span>
            <span className={`text-[#ffd700] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-[#1a1a1a] text-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
