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
                ? 'bg-gradient-to-b from-slate-900 to-indigo-950 border-2 border-amber-500 text-white hover:border-amber-400 shadow-[0_0_30px_rgba(249,115,22,0.15)]' 
                : 'bg-white border-2 border-slate-100 text-slate-800 hover:border-orange-400/50'
            }`}
          >
            {/* Faixa no topo */}
            <div className={`absolute top-0 left-0 right-0 h-11 flex items-center justify-center font-black text-xs text-white tracking-widest uppercase z-20 shadow-sm ${
              isSuper 
                ? 'bg-gradient-to-r from-amber-500 via-orange-600 to-red-600' 
                : 'bg-gradient-to-r from-orange-600 to-amber-500'
            }`}>
              {isSuper ? '★ SUPER BÔNUS ★' : `BÔNUS 0${idx + 1}`}
            </div>

            {/* Top background glow */}
            <div className={`absolute -top-24 -left-24 w-48 h-48 rounded-full bg-gradient-to-br ${bonus.accentColor} opacity-5 group-hover:scale-125 transition-transform duration-500 blur-2xl`}></div>

            <div>
              {/* Styled Book/Certificate Visual Mockup */}
              {isSuper ? (
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
                /* Standard Visual Mockup (Image or synthetic book cover) */
                <div className={`relative w-full rounded-2xl border border-slate-150 mb-5 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-orange-200 transition-colors ${bonus.imageUrl ? 'bg-transparent h-auto' : 'bg-slate-50 aspect-[4/3]'}`}>
                  {bonus.imageUrl ? (
                    <img
                      src={bonus.imageUrl}
                      alt={bonus.title}
                      className="w-full h-auto block object-contain group-hover:scale-105 transition-transform duration-300 rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <>
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
                    </>
                  )}
                </div>
              )}

              {/* Title & Description */}
              <h3 className={`font-black text-lg mb-2 relative z-10 leading-snug ${isSuper ? 'text-white' : 'text-slate-800'}`}>
                {bonus.title}
              </h3>
              <p className={`text-xs leading-relaxed mb-5 ${isSuper ? 'text-slate-300 font-medium' : 'text-slate-600'}`}>
                {bonus.description}
              </p>
            </div>

            {/* Bottom pricing logic */}
            <div className={`border-t pt-4 mt-auto ${isSuper ? 'border-white/10' : 'border-slate-100'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-medium">Valor separado:</span>
                  <span className="text-xs text-slate-400 line-through font-bold">R$ {bonus.originalPrice.toFixed(2).replace('.', ',')}</span>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] uppercase tracking-widest font-black block ${isSuper ? 'text-amber-400' : 'text-orange-500'}`}>Hoje:</span>
                  <span className={`font-black text-base uppercase tracking-wide ${isSuper ? 'text-emerald-400 animate-pulse' : 'text-orange-500'}`}>
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
