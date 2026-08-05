import { useState } from 'react';
import { faqList } from '../data/landingData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq1');

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqList.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden transition-all duration-200 hover:border-sky-300/60 shadow-sm"
          >
            <button
              onClick={() => toggleFaq(faq.id)}
              className="w-full text-left px-5 py-4 md:py-5 flex items-start justify-between space-x-3 focus:outline-none focus:ring-2 focus:ring-sky-500/10"
              aria-expanded={isOpen}
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                <span className="font-bold text-slate-800 text-sm md:text-base leading-snug">
                  {faq.question}
                </span>
              </div>
              <span className={`p-1.5 rounded-full bg-slate-50 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-sky-600 bg-sky-50' : ''}`}>
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>
            
            <div
              className={`transition-all duration-200 ease-in-out overflow-hidden ${
                isOpen ? 'max-h-[300px] border-t border-slate-100 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 py-4 text-slate-600 text-sm leading-relaxed bg-slate-50/40">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
