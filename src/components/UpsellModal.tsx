import { useState, useEffect } from 'react';
import { X, Sparkles, Check, Zap, ShieldCheck, Flame, ArrowRight, Gift, Infinity, MessageSquare, Trophy } from 'lucide-react';

interface UpsellModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
}

export default function UpsellModal({ isOpen, onClose, onAccept, onDecline }: UpsellModalProps) {
  // 5 minute countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState(300);

  useEffect(() => {
    if (!isOpen) {
      setTimeLeft(300);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-950/85 backdrop-blur-sm transition-opacity duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border-2 border-brand-orange overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        id="upsell-modal-container"
      >
        
        {/* Top Scarcity Bar */}
        <div className="bg-brand-orange text-white py-2 px-4 text-center font-display font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2">
          <Flame className="w-3.5 h-3.5 text-white animate-pulse shrink-0" />
          <span>OFERTA ÚNICA: ADICIONE PREMIUM E ECONOMIZE R$ 177,10</span>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2.5 right-3 p-1.5 text-white/90 hover:text-white hover:bg-black/10 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Fechar popup"
          id="close-upsell-modal-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Body */}
        <div className="p-5 sm:p-6">
          
          {/* Header */}
          <div className="text-center mb-4">
            <h3 className="text-xl sm:text-2xl font-display font-black text-navy tracking-tight uppercase leading-tight">
              Aproveite a <span className="text-brand-orange">Oferta Completa</span> por apenas mais R$ 10,00!
            </h3>
            <p className="text-slate-500 text-xs mt-1.5 font-medium">
              Por apenas uma diferença de R$ 10,00 você garante todo o material didático e todos os bônus abaixo.
            </p>
          </div>

          {/* Price & Savings Highlight */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex flex-col items-center justify-center text-center gap-2 mb-4 w-full">
            <div className="text-slate-400 text-xs font-bold uppercase tracking-wider">
              De <span className="line-through text-red-500">R$ 197,00</span> por apenas:
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-sm font-bold text-slate-500">Apenas</span>
              <span className="text-3xl font-display font-black text-brand-orange leading-none">R$ 19,90</span>
              <span className="text-[10px] font-bold text-slate-400">À VISTA</span>
            </div>
            <div className="bg-emerald-50 border border-emerald-100 px-3.5 py-1.5 rounded-full inline-flex items-center justify-center gap-1.5 mt-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
              <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wide">
                VOCÊ ECONOMIZA <strong className="font-black text-emerald-600">R$ 177,10 HOJE!</strong>
              </span>
            </div>
          </div>

          {/* Organized Benefits list */}
          <div className="mb-5 bg-orange-50/30 rounded-xl p-4 border border-orange-100">
            <h4 className="text-[11px] font-display font-black text-brand-orange uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Gift className="w-3.5 h-3.5 shrink-0" />
              BENEFÍCIOS EXCLUSIVOS DO PLANO PREMIUM (R$ 19,90)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2">
                <div className="p-0.5 rounded-full bg-orange-500 text-white shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800 leading-tight">MÉTODO COMPLETO</p>
                  <p className="text-[10px] text-slate-500 leading-snug">Acesso a todas as +500 Dinâmicas infantis estruturadas.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-0.5 rounded-full bg-orange-500 text-white shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800 leading-tight">4 SUPER BÔNUS</p>
                  <p className="text-[10px] text-slate-500 leading-snug">Gamificação, Certificado, Jogos de Luta e 100 Exercícios.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-0.5 rounded-full bg-orange-500 text-white shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800 leading-tight">ACESSO VITALÍCIO</p>
                  <p className="text-[10px] text-slate-500 leading-snug">Seu acervo é seu para sempre, sem mensalidades.</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="p-0.5 rounded-full bg-orange-500 text-white shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-800 leading-tight">SUPORTE VIP & ÁREA</p>
                  <p className="text-[10px] text-slate-500 leading-snug">Suporte direto no WhatsApp e acesso à Área de Membros.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown timer footer / Urgency */}
          <div className="text-center mb-4">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block"></span>
              ESTA OPORTUNIDADE EXPIRA EM <span className="font-mono text-red-500 font-black">{formatTime(minutes)}:{formatTime(seconds)}</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {/* ACCEPT BUTTON */}
            <button
              onClick={onAccept}
              className="w-full bg-brand-orange hover:bg-[#E05B00] text-white font-display font-black text-xs sm:text-sm py-3.5 px-5 rounded-xl shadow-lg shadow-orange-500/10 hover:scale-[1.01] active:scale-95 transition-all duration-200 tracking-wider uppercase flex items-center justify-center space-x-2 cursor-pointer"
              id="accept-upsell-btn"
            >
              <Sparkles className="w-4 h-4 text-amber-200 shrink-0" />
              <span>SIM! ADICIONAR PREMIUM POR +R$ 10,00</span>
              <ArrowRight className="w-4 h-4 shrink-0 animate-bounce-horizontal" />
            </button>

            {/* DECLINE BUTTON */}
            <button
              onClick={onDecline}
              className="w-full py-2.5 px-4 text-slate-500 hover:text-slate-700 hover:underline font-bold text-[11px] sm:text-xs uppercase tracking-wide text-center cursor-pointer transition-colors leading-relaxed"
              id="decline-upsell-btn"
            >
              Não obrigado, prefiro abrir mão de todos os 4 Bônus e ficar apenas com o Básico (R$ 9,90)
            </button>
          </div>

          {/* Security guarantee footer */}
          <div className="flex items-center justify-center space-x-2.5 mt-3.5 text-[9px] text-slate-300 font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1"><ShieldCheck className="w-3 h-3 text-emerald-500" /> Compra 100% Segura</span>
            <span>•</span>
            <span>Garantia de 7 Dias</span>
          </div>

        </div>

      </div>

    </div>
  );
}
