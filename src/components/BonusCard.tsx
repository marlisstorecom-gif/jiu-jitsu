import { bonusList } from '../data/landingData';
import { Gift, BookOpen, Award, Trophy, Star } from 'lucide-react';

export default function BonusCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 mt-8">
      {bonusList.map((bonus, idx) => {
        const isSuper = bonus.isSuperBonus;

        return (
          <div
            key={bonus.id}
            className={`group relative rounded-3xl p-6 pt-16 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${
              isSuper 
                ? 'bg-gradient-to-b from-navy to-[#151d35] border-2 border-brand-orange text-white hover:border-brand-yellow shadow-[0_0_30px_rgba(255,106,0,0.2)]' 
                : 'bg-white border-2 border-border-soft text-slate-800 hover:border-brand-orange/50'
            }`}
          >
            {/* Faixa no topo */}
            <div className={`absolute top-0 left-0 right-0 h-11 flex items-center justify-center font-display font-black text-xs text-white tracking-widest uppercase z-20 shadow-sm ${
              isSuper 
                ? 'bg-gradient-to-r from-brand-yellow via-brand-orange to-red-600' 
                : 'bg-gradient-to-r from-brand-orange to-brand-yellow'
            }`}>
              {isSuper ? '★ SUPER BÔNUS ★' : `BÔNUS 0${idx + 1}`}
            </div>

            {/* Top background glow */}
            <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br ${bonus.accentColor} opacity-5 group-hover:scale-125 transition-transform duration-500 blur-2xl`}></div>

            <div>
              {/* Styled Book/Certificate Visual Mockup */}
              {bonus.imageUrl ? (
                <div className="relative w-full rounded-2xl border border-border-soft mb-5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-brand-orange/30 transition-colors bg-transparent h-auto">
                  <img
                    src={bonus.imageUrl}
                    alt={bonus.title}
                    className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : isSuper ? (
                /* Super Bonus Visual Mockup in CSS */
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl border border-amber-500/40 mb-5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-amber-400 transition-colors select-none">
                  {/* Grid lines pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
                  
                  {/* Visual cover design */}
                  <div className="absolute inset-4 rounded-xl border border-amber-500/20 bg-slate-950 flex flex-col justify-between p-3.5 shadow-2xl">
                    <div className="flex justify-between items-start border-b border-amber-500/10 pb-2">
                      <span className="text-[7px] text-amber-400 font-extrabold uppercase tracking-widest">★ EXCLUSIVO ★</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                      </div>
                    </div>
                    
                    <div className="text-center py-1">
                      <Trophy className="w-6 h-6 text-amber-400 mx-auto mb-1 animate-bounce" />
                      <h4 className="font-black text-[9px] md:text-[10px] text-white tracking-widest leading-none uppercase">
                        TATAME DOS <br/> CAMPEÕES
                      </h4>
                      <span className="text-[6px] text-amber-500/80 font-black tracking-wider uppercase block mt-1">SISTEMA DE GAMIFICAÇÃO</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-amber-500/10 pt-2 text-[7px] text-slate-400 font-bold">
                      <span>🥋 MÉTODOS PRÁTICOS</span>
                      <span className="text-amber-400">PDF PRONTO</span>
                    </div>
                  </div>
                </div>
              ) : (
                /* Standard Visual Mockup (synthetic book cover) */
                <div className="relative w-full rounded-2xl border border-border-soft mb-5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-brand-orange/30 transition-colors bg-slate-50 aspect-[4/3]">
                  <>
                    {/* Visual template based on item */}
                    <div className={`absolute inset-y-0 left-0 w-3 bg-gradient-to-b ${bonus.accentColor}`}></div>
                    
                    {/* Inner content */}
                    <div className="p-4 pl-6 flex-1 flex flex-col justify-between select-none">
                      <div className="space-y-1">
                        <span className="text-[9px] uppercase tracking-wider font-extrabold text-brand-orange">BÔNUS EXCLUSIVO 0{idx + 1}</span>
                        <h4 className="font-display font-black text-xs md:text-sm line-clamp-2 text-navy group-hover:text-brand-orange transition-colors">
                          {bonus.title}
                        </h4>
                      </div>
                      
                      {/* Subtle graphics details to look like real cover */}
                      <div className="flex items-center justify-between border-t border-border-soft pt-2">
                        <span className="text-[8px] text-slate-500 font-bold">🥋 Jiu-Jitsu Infantil</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 rounded-full bg-brand-orange"></div>
                          <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              )}

              {/* Title & Description */}
              <h3 className={`text-lg mb-2 relative z-10 leading-snug ${isSuper ? 'font-black text-white' : 'font-display font-black text-navy uppercase tracking-wide'}`}>
                {bonus.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-5 ${isSuper ? 'text-slate-300 font-medium' : 'text-slate-600'}`}>
                {bonus.description}
              </p>
            </div>

            {/* Bottom pricing logic */}
            <div className={`border-t pt-4 mt-auto ${isSuper ? 'border-white/10' : 'border-border-soft'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Valor separado:</span>
                  <span className="text-xs text-slate-400 line-through font-bold">R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] uppercase tracking-widest font-black block ${isSuper ? 'text-brand-yellow' : 'text-brand-orange'}`}>Hoje:</span>
                  <span className={`font-black text-base uppercase tracking-wide ${isSuper ? 'text-emerald-400 animate-pulse' : 'text-brand-orange'}`}>
                    GRÁTIS
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
