import { useState, useEffect } from 'react';
import { X, Sparkles, Check, Zap, ShieldCheck, Flame, ArrowRight, Gift } from 'lucide-react';
import { bonusList } from '../data/landingData';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-slate-900/80 backdrop-blur-md transition-opacity duration-300">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-4 border-orange-500 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Scarcity Bar */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white py-3 px-4 text-center font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm">
          <Flame className="w-4 h-4 text-amber-200 animate-bounce shrink-0" />
          <span>ESPERE! NÃO FECHE ESTA PÁGINA - OFERTA ÚNICA!</span>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 text-white/80 hover:text-white hover:bg-black/20 rounded-full transition-colors z-20 cursor-pointer"
          aria-label="Fechar popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Body */}
        <div className="p-5 sm:p-7 max-h-[82vh] overflow-y-auto">
          
          {/* Header Badge & Title */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center space-x-1.5 bg-orange-100 border border-orange-200 text-orange-600 text-[11px] font-black px-3.5 py-1 rounded-full uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              <span>UPGRADE EXCLUSIVO COM 90% DE DESCONTO</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase leading-snug">
              Leve o <span className="text-orange-500">Plano Premium Completo</span> por apenas +R$ 5,00!
            </h3>

            <p className="text-slate-600 text-xs sm:text-sm mt-2 font-medium leading-relaxed">
              Antes de finalizar o pedido do Plano Básico, liberamos uma condição especial inédita para você garantir o <strong className="text-slate-900">Kit Completo + Todos os 3 Bônus</strong>!
            </p>
          </div>

          {/* Dynamic Countdown Timer Banner */}
          <div className="bg-slate-900 text-white rounded-2xl p-3 sm:p-4 mb-5 flex flex-wrap items-center justify-between gap-2 shadow-inner border border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-ping"></div>
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Desconto expira em:
              </span>
            </div>
            <div className="font-black text-orange-400 text-lg sm:text-xl font-mono tracking-widest bg-slate-950 px-3 py-1 rounded-xl border border-slate-800">
              {formatTime(minutes)}:{formatTime(seconds)}
            </div>
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50 border-2 border-orange-200/80 rounded-2xl p-4 sm:p-5 mb-5 text-center shadow-sm">
            <span className="text-xs text-slate-400 line-through font-extrabold uppercase tracking-wider block mb-0.5">
              Valor Normal do Premium: R$ 147,00
            </span>
            <div className="flex items-baseline justify-center space-x-1.5 text-slate-900">
              <span className="text-xs font-bold uppercase text-slate-500">Apenas</span>
              <span className="text-2xl font-black text-orange-500">R$</span>
              <span className="text-4xl sm:text-5xl font-black text-orange-500 tracking-tight">14,90</span>
              <span className="text-xs font-extrabold text-slate-500">À VISTA</span>
            </div>
            <p className="text-[11px] font-black text-emerald-600 uppercase tracking-wider mt-1">
              ⚡ Você economiza R$ 132,10 garantindo agora!
            </p>
          </div>

          {/* Complete Benefits List */}
          <div className="mb-6">
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-wider mb-3 flex items-center">
              <Gift className="w-4 h-4 text-orange-500 mr-1.5" />
              Tudo o que você vai receber no Plano Premium (R$ 14,90):
            </h4>

            <ul className="space-y-2.5">
              <li className="flex items-start text-xs sm:text-sm text-slate-700 font-bold bg-white p-2.5 rounded-xl border border-slate-150 shadow-2xs">
                <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mr-2.5 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>+500 Dinâmicas e Jogos Interativos de Jiu-Jitsu Infantil</span>
              </li>

              {bonusList.map((bonus) => (
                <li key={bonus.id} className="flex items-start text-xs sm:text-sm text-slate-800 font-extrabold bg-orange-50/70 p-2.5 rounded-xl border border-orange-100">
                  <div className="p-0.5 rounded-full bg-orange-500 text-white mr-2.5 mt-0.5 shrink-0 shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-orange-600 font-black mr-1">[BÔNUS]</span>
                    <span>{bonus.title}</span>
                    <span className="text-[10px] text-slate-400 line-through ml-1.5 font-bold">({bonus.highlightText})</span>
                  </div>
                </li>
              ))}

              <li className="flex items-start text-xs sm:text-sm text-slate-700 font-medium bg-white p-2.5 rounded-xl border border-slate-150">
                <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mr-2.5 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Atualizações Mensais Gratuitas + Acesso Vitalício</span>
              </li>

              <li className="flex items-start text-xs sm:text-sm text-slate-700 font-medium bg-white p-2.5 rounded-xl border border-slate-150">
                <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mr-2.5 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Suporte VIP Prioritário por WhatsApp + Área de Membros</span>
              </li>

              <li className="flex items-start text-xs sm:text-sm text-slate-700 font-medium bg-white p-2.5 rounded-xl border border-slate-150">
                <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-600 mr-2.5 mt-0.5 shrink-0">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>Garantia Incondicional de 7 Dias (100% Risco Zero)</span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2 border-t border-slate-150">
            {/* ACCEPT BUTTON */}
            <button
              onClick={onAccept}
              className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm md:text-base py-4 px-5 rounded-2xl shadow-xl shadow-orange-500/30 hover:scale-[1.02] active:scale-95 transition-all duration-200 tracking-wider uppercase flex items-center justify-center space-x-2.5 cursor-pointer ring-4 ring-orange-400/20"
            >
              <Sparkles className="w-5 h-5 text-amber-200 animate-spin shrink-0" />
              <span className="text-center">SIM! QUERO A OFERTA COMPLETA POR R$ 14,90</span>
              <ArrowRight className="w-5 h-5 shrink-0 animate-bounce-horizontal" />
            </button>

            {/* DECLINE BUTTON */}
            <button
              onClick={onDecline}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 font-bold text-xs py-3 px-4 rounded-xl transition-all duration-200 text-center cursor-pointer border border-slate-200"
            >
              Não obrigado, prefiro abrir mão dos 3 Bônus e ficar apenas com o Básico (R$ 9,90)
            </button>
          </div>

          {/* Micro Security guarantee footer */}
          <div className="flex items-center justify-center space-x-3 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-wider">
            <span className="flex items-center"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500 mr-1" /> Satisfação Garantida</span>
            <span>•</span>
            <span>Checkout Seguro SSL</span>
          </div>

        </div>

      </div>

    </div>
  );
}
