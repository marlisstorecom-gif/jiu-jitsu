import { bonusList } from '../data/landingData';
import { Gift, BookOpen, Award } from 'lucide-react';

export default function BonusCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 mt-8">
      {bonusList.map((bonus, idx) => {
        return (
          <div
            key={bonus.id}
            className="group relative bg-white border-2 border-slate-100 rounded-3xl p-6 flex flex-col justify-between text-slate-800 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Top background glow */}
            <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br ${bonus.accentColor} opacity-5 group-hover:scale-125 transition-transform duration-500 blur-2xl`}></div>

            <div>
              {/* Product Type Icon & Tag */}
              <div className="flex items-center justify-between mb-5 relative z-10">
                <span className="p-2.5 rounded-2xl bg-orange-50 text-orange-500 border border-orange-100/80">
                  {idx === 0 ? (
                    <Award className="w-5 h-5 animate-pulse" />
                  ) : idx === 1 ? (
                    <Gift className="w-5 h-5 animate-bounce" />
                  ) : (
                    <BookOpen className="w-5 h-5" />
                  )}
                </span>
                <span className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {bonus.highlightText}
                </span>
              </div>

              {/* Styled Book/Certificate Visual Mockup */}
              <div className="relative w-full h-36 bg-slate-50 rounded-2xl border border-slate-150 mb-5 flex flex-col overflow-hidden shadow-inner group-hover:border-orange-200 transition-colors">
                {/* Visual template based on item */}
                <div className={`absolute inset-y-0 left-0 w-3 bg-gradient-to-b ${bonus.accentColor}`}></div>
                
                {/* Inner content */}
                <div className="p-4 pl-6 flex-1 flex flex-col justify-between select-none">
                  <div className="space-y-1">
                    <span className="text-[9px] uppercase tracking-wider font-extrabold text-orange-500">BÔNUS EXCLUSIVO 0{idx + 1}</span>
                    <h4 className="font-extrabold text-xs md:text-sm line-clamp-2 text-slate-800 group-hover:text-slate-900 transition-colors">
                      {bonus.title}
                    </h4>
                  </div>
                  
                  {/* Subtle graphics details to look like real cover */}
                  <div className="flex items-center justify-between border-t border-slate-200/60 pt-2">
                    <span className="text-[8px] text-slate-500 font-bold">🥋 Jiu-Jitsu Infantil</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                      <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-black text-slate-800 text-lg mb-1 relative z-10 leading-snug">
                {bonus.title}
              </h3>
              <p className="text-[10px] text-slate-400 mb-3 uppercase tracking-wider font-extrabold">
                {bonus.subtitle}
              </p>
              <p className="text-xs text-slate-600 leading-relaxed mb-5">
                {bonus.description}
              </p>
            </div>

            {/* Bottom pricing logic */}
            <div className="border-t border-slate-100 pt-4 mt-auto">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Valor separado:</span>
                  <span className="text-xs text-slate-400 line-through font-bold">R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-orange-500 uppercase tracking-widest font-black block">Hoje:</span>
                  <span className="text-orange-500 font-black text-base uppercase tracking-wide">GRÁTIS</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
