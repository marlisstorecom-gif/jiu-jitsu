import { useState } from 'react';
import { testimonials } from '../data/landingData';
import { Phone, Video, MoreVertical, ChevronLeft, ChevronRight, CheckCheck, Send } from 'lucide-react';

export default function WhatsAppMockup() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4">
      {/* Selector Tabs for testimonials */}
      <div className="flex justify-center space-x-2 mb-6 overflow-x-auto py-2 no-scrollbar">
        {testimonials.map((t, index) => (
          <button
            key={t.id}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 ${
              activeIndex === index
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 shadow-sm'
            }`}
          >
            {t.name.split(' ')[1] ? `${t.name.split(' ')[0]} ${t.name.split(' ')[1]}` : t.name}
          </button>
        ))}
      </div>

      {/* Main Interactive Phone Mockup Container */}
      <div className="relative mx-auto bg-slate-900 rounded-[40px] p-3.5 shadow-2xl border-4 border-slate-800 max-w-[340px] md:max-w-[360px]">
        {/* Notch / Speaker */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
          <div className="w-12 h-1 bg-slate-800 rounded-full mb-1"></div>
        </div>

        {/* Home indicator bar at bottom */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1.5 bg-slate-700 rounded-full z-20"></div>

        {/* Screen Container */}
        <div className="relative bg-[#efeae2] rounded-[30px] overflow-hidden flex flex-col h-[520px] shadow-inner select-none font-sans text-slate-800">
          
          {/* WhatsApp Top Header Bar */}
          <div className="bg-[#075e54] text-white pt-6 pb-2.5 px-3 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-800 border-2 border-emerald-400 text-sm overflow-hidden select-none">
                {/* Simulated Avatar initials or icon */}
                <span className="text-xs">{activeTestimonial.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="leading-tight">
                <div className="font-bold text-xs max-w-[130px] truncate">{activeTestimonial.name}</div>
                <div className="text-[10px] text-emerald-100 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-1 animate-pulse"></span>
                  online
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-white/90">
              <Video className="w-4 h-4 cursor-pointer hover:text-white" />
              <Phone className="w-3.5 h-3.5 cursor-pointer hover:text-white" />
              <MoreVertical className="w-4 h-4 cursor-pointer hover:text-white" />
            </div>
          </div>

          {/* Chat Background & Message Bubbles Area */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3.5 flex flex-col no-scrollbar">
            {/* System Info Banner */}
            <div className="self-center bg-[#d1f4cc]/80 text-[10px] text-slate-700 font-medium px-3 py-1 rounded-md shadow-sm text-center max-w-[240px]">
              🔒 As mensagens são protegidas por criptografia ponta a ponta.
            </div>

            {/* Render Messages */}
            {activeTestimonial.messages.map((msg, mIdx) => {
              const isMe = msg.sender === 'me';
              return (
                <div
                  key={mIdx}
                  className={`max-w-[85%] rounded-lg px-3 py-1.5 text-xs shadow-sm leading-relaxed relative ${
                    isMe
                      ? 'self-end bg-[#dcf8c6] text-slate-800 rounded-tr-none'
                      : 'self-start bg-white text-slate-800 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className="text-[9px] text-slate-400 mt-1 flex justify-end items-center space-x-1">
                    <span>{msg.time}</span>
                    {isMe && <CheckCheck className="w-3 h-3 text-blue-500" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fake Input Footer */}
          <div className="bg-[#f0f0f0] p-2 flex items-center space-x-2 border-t border-slate-200 shrink-0">
            <div className="flex-1 bg-white rounded-full px-3.5 py-1.5 text-[11px] text-slate-400 flex items-center justify-between shadow-sm">
              <span>Responder como {activeTestimonial.name.split(' ')[0]}...</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#075e54] text-white flex items-center justify-center shadow-sm">
              <Send className="w-3.5 h-3.5 fill-current ml-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows for slide control */}
      <div className="flex items-center justify-between mt-4 max-w-[240px] mx-auto">
        <button
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-orange-500 transition-colors shadow-sm cursor-pointer"
          aria-label="Depoimento Anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <span className="text-xs text-slate-500 font-bold">
          {activeIndex + 1} de {testimonials.length} depoimentos
        </span>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-orange-500 transition-colors shadow-sm cursor-pointer"
          aria-label="Próximo Depoimento"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Description caption */}
      <p className="text-center text-xs text-slate-400 italic mt-3">
        *Depoimentos de clientes satisfeitos que transformaram suas aulas com nosso kit.
      </p>
    </div>
  );
}
