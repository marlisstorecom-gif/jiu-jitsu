import { useState, useRef } from 'react';
import { 
  Award, 
  Gift, 
  Users, 
  Smartphone, 
  Printer, 
  CheckSquare, 
  Check, 
  ChevronRight, 
  ShieldCheck, 
  HelpCircle, 
  Lock, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { featuresList, benefitsTargets, pricingPlans } from './data/landingData';
import UrgencyTimer from './components/UrgencyTimer';
import WhatsAppMockup from './components/WhatsAppMockup';
import FAQSection from './components/FAQSection';
import BonusCard from './components/BonusCard';
import UpsellModal from './components/UpsellModal';

export default function App() {
  const pricingRef = useRef<HTMLDivElement>(null);
  const [isUpsellOpen, setIsUpsellOpen] = useState(false);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAcceptUpsell = () => {
    window.open('https://pay.kiwify.com.br/premium-desconto-1490', '_blank');
    setIsUpsellOpen(false);
  };

  const handleDeclineUpsell = () => {
    window.open('https://pay.kiwify.com.br/basico-placeholder', '_blank');
    setIsUpsellOpen(false);
  };

  // Helper to match icon names string to Lucide React components
  const renderIcon = (name: string) => {
    switch (name) {
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Gift': return <Gift className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Printer': return <Printer className="w-6 h-6" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6" />;
      default: return <Award className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-orange-500 text-white text-center py-2.5 px-4 text-xs font-black tracking-wider uppercase flex items-center justify-center space-x-2 relative z-50 shadow-sm">
        <span className="animate-pulse">🥋</span>
        <span>Dificuldade para manter a atenção dos pequenos no tatame?</span>
      </div>



      {/* 2. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-sky-50 via-white to-[#f8fafc] pt-6 md:pt-10 pb-12 px-4 overflow-hidden border-b border-slate-100">
        {/* Glowing background accents */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight uppercase mb-6 text-slate-900">
            +500 Dinâmicas <br/>
            <span className="text-orange-500 border-b-4 border-orange-500/30 pb-1">Interativas</span> de Jiu-Jitsu
          </h1>

          {/* Subtitle */}
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
            Aumente o engajamento das crianças de 3 a 14 anos, torne-se uma referência em didática lúdica e elimine de vez a dispersão no tatame com jogos e metodologias validadas.
          </p>

          {/* Hero Mockup Image */}
          <div className="mb-10 flex justify-center px-4">
            <img 
              src="https://res.cloudinary.com/dm2glkkcv/image/upload/v1786159470/823c9bd3-9034-4bda-a5d3-ddb19fd9d502_dlbwea.png" 
              alt="Mockup do Acervo de Jiu-Jitsu Infantil"
              className="w-full max-w-lg md:max-w-2xl h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <button
              onClick={scrollToPricing}
              className="w-full max-w-md bg-orange-500 hover:bg-orange-600 text-white font-black text-sm md:text-base py-5 px-8 rounded-2xl shadow-lg shadow-orange-500/25 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wider uppercase flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>QUERO ACESSO COMPLETO AGORA!</span>
              <ChevronRight className="w-5 h-5 animate-bounce-horizontal" />
            </button>

            {/* Micro-guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-500 font-bold">
              <span className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-1.5" /> Acesso imediato no e-mail</span>
              <span className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-1.5" /> Pagamento único sem mensalidades</span>
              <span className="flex items-center"><Check className="w-4 h-4 text-orange-500 mr-1.5" /> Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "O QUE VOCÊ VAI RECEBER?" SECTION */}
      <section id="features" className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="text-xs font-black text-orange-500 tracking-wider uppercase block mb-2">CONTEÚDO COMPLETO</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            O Que Você Vai Receber no Seu Acesso?
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 font-medium">
            Tudo o que você precisa para transformar suas aulas de Jiu-Jitsu em uma experiência lúdica, inesquecível e extremamente técnica.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feat) => (
            <div 
              key={feat.id} 
              className="bg-white border-2 border-slate-100 rounded-3xl p-6 hover:border-orange-400/50 hover:shadow-xl transition-all duration-300 shadow-sm"
            >
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-5 font-black shadow-sm">
                {renderIcon(feat.iconName)}
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-2">{feat.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. "PARA QUEM É?" SECTION */}
      <section id="benefits" className="bg-sky-50/50 py-12 px-4 border-y border-sky-100/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="bg-sky-100 border border-sky-200/80 text-sky-700 text-xs font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3 shadow-sm">
              PARA QUEM É?
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Este kit foi feito sob medida para você se...
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefitsTargets.map((target) => (
              <div 
                key={target.id}
                className="bg-white border-2 border-slate-100 rounded-3xl p-6 flex items-start space-x-4 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl p-3.5 rounded-2xl bg-slate-50 border border-slate-100 shrink-0">
                  {target.avatarEmoji}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 text-base md:text-lg mb-1">{target.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{target.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF SECTION */}
      <section id="testimonials" className="bg-sky-50/50 py-12 px-4 border-y border-sky-100/60">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-orange-500 tracking-wider uppercase block mb-2">RESULTADOS REAIS</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              O Que Nossos Mestres Estão Falando
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-medium">
              Veja conversas reais de professores, senseis e educadores que já aplicam nossas dinâmicas e revolucionaram suas aulas no tatame.
            </p>
          </div>

          <WhatsAppMockup />
        </div>
      </section>

      {/* 5. BONUS SECTION */}
      <section className="bg-gradient-to-b from-[#f8fafc] via-sky-50/30 to-[#f8fafc] py-12 px-4 relative overflow-hidden border-b border-slate-100">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-sky-400 rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 mb-6">
          <span className="bg-orange-100 border border-orange-200/80 text-orange-600 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            🎁 BÔNUS EXCLUSIVOS & SUPER BÔNUS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase mb-3">
            Receba 3 Bônus Incríveis + 1 SUPER BÔNUS GRÁTIS!
          </h2>
          <p className="text-slate-500 text-xs md:text-sm font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            Valor total dos bônus: <span className="line-through text-red-500">R$ 164,00</span>
            <span className="text-orange-500 block sm:inline sm:ml-2">(Mas comprando HOJE sai tudo de graça!)</span>
          </p>
        </div>

        <BonusCard />

        <div className="text-center mt-8 relative z-10">
          <p className="text-xs text-slate-400 max-w-md mx-auto italic font-medium">
            *Todos os bônus e o super bônus serão vinculados automaticamente à sua conta imediatamente após a confirmação do pagamento.
          </p>
        </div>
      </section>

      {/* 6. URGENCY & PRICING SECTION */}
      <section ref={pricingRef} id="pricing" className="py-12 px-4 max-w-6xl mx-auto scroll-mt-6">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black text-sky-600 tracking-wider uppercase block mb-2">APROVEITE A PROMOÇÃO</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
            Invista na Qualidade das Suas Aulas
          </h2>
          <p className="text-slate-600 text-sm mt-3 font-medium">
            O preço normal deste kit subirá em breve. Garanta seu acesso vitalício com as condições especiais hoje!
          </p>
          
          <UrgencyTimer />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {pricingPlans.map((plan) => {
            const isPremium = plan.popular;
            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-3xl p-6 md:p-8 transition-all duration-300 relative ${
                  isPremium
                    ? 'bg-white border-4 border-orange-500 shadow-xl shadow-orange-500/10 md:-translate-y-2'
                    : 'bg-white border-2 border-slate-100 shadow-sm'
                }`}
              >
                {isPremium && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                    ⚡ MAIS POPULAR & RECOMENDADO
                  </span>
                )}

                <div className="flex flex-col items-center text-center">
                  <div className="flex flex-col items-center mb-3">
                    {isPremium && (
                      <span className="bg-orange-100 text-orange-600 text-[10px] font-black px-2.5 py-1 rounded-full mb-2">
                        Super Kit Premium
                      </span>
                    )}
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">{plan.name}</h3>
                  </div>
                  
                  <p className="text-slate-500 text-xs md:text-sm mb-6 leading-relaxed font-medium max-w-sm">
                    {plan.tagline}
                  </p>

                  {/* Pricing Display */}
                  <div className={`w-full mb-6 pb-6 border-b flex flex-col items-center ${isPremium ? 'border-orange-100' : 'border-slate-100'}`}>
                    <span className="text-xs text-slate-400 block font-bold mb-1">
                      De R$ {plan.originalPrice.toFixed(2).replace('.', ',')} por apenas:
                    </span>
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-slate-900 font-extrabold text-2xl md:text-3xl">R$</span>
                      <span className="text-slate-900 font-black text-5xl md:text-6xl tracking-tight">
                        {plan.currentPrice.toFixed(2).split('.')[0]}
                      </span>
                      <span className="text-slate-900 font-black text-2xl md:text-3xl">
                        ,{plan.currentPrice.toFixed(2).split('.')[1]}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-bold mt-1 block">Pagamento Único • Acesso Vitalício</span>
                    <span className="text-[10px] text-orange-500 font-black uppercase tracking-wider block mt-2">✓ Sem mensalidades ou surpresas</span>
                  </div>

                  {/* Features List */}
                  <div className="w-full flex justify-center mb-8">
                    <ul className="space-y-3.5 text-left w-full max-w-xs md:max-w-sm">
                      {plan.features.map((feat, idx) => {
                        const isBonus = feat.includes('(Bônus)');
                        const isSuperBonus = feat.includes('SUPER BÔNUS');
                        return (
                          <li key={idx} className="flex items-start text-xs md:text-sm text-slate-600 font-medium">
                            <span className="mr-2.5 rounded-full p-0.5 shrink-0 mt-0.5 border bg-emerald-50 text-emerald-600 border-emerald-200">
                              <Check className="w-3.5 h-3.5" />
                            </span>
                            <span className={
                              isSuperBonus 
                                ? 'font-black text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider inline-block' 
                                : isBonus 
                                ? 'font-bold text-orange-500' 
                                : ''
                            }>
                              {feat}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                {/* Checkout CTA */}
                <div className={`mt-auto pt-4 border-t flex flex-col items-center w-full ${isPremium ? 'border-orange-100' : 'border-slate-100'}`}>
                  {plan.id === 'p_basic' ? (
                    <button
                      type="button"
                      onClick={() => setIsUpsellOpen(true)}
                      className="w-full max-w-sm py-4 px-6 rounded-2xl text-center font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-800"
                    >
                      <span>{plan.buttonText}</span>
                      <Sparkles className="w-4 h-4 shrink-0 text-orange-500" />
                    </button>
                  ) : (
                    <a
                      href={plan.checkoutUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full max-w-sm py-4 px-6 rounded-2xl text-center font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20"
                    >
                      <span>{plan.buttonText}</span>
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  )}

                  {/* Trust Badges */}
                  <div className="flex flex-wrap justify-center gap-4 mt-5 text-[10px] text-slate-400 font-bold w-full">
                    <span className="flex items-center"><Lock className="w-3 h-3 text-orange-500 mr-1" /> Compra Segura</span>
                    <span className="flex items-center"><ShieldCheck className="w-3 h-3 text-orange-500 mr-1" /> Satisfação Garantida</span>
                  </div>

                  {/* WhatsApp Info */}
                  <div className={`mt-4 rounded-xl p-3 text-center w-full max-w-sm ${isPremium ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50 border border-slate-100'}`}>
                    <p className={`text-[10px] font-black uppercase tracking-wider flex items-center justify-center space-x-1.5 ${isPremium ? 'text-emerald-600' : 'text-slate-500'}`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse inline-block ${isPremium ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      <span>RECEBA O MATERIAL DIRETO NO WHATSAPP</span>
                    </p>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* 8. WARRANTY SECTION */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div className="bg-white border-2 border-slate-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 shadow-sm">
          {/* Circular Stamp Visual in CSS */}
          <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-orange-50 border-4 border-dashed border-orange-400/60 flex flex-col items-center justify-center p-3 text-center shadow-inner">
            <div className="absolute inset-2 rounded-full border-2 border-orange-200"></div>
            <Award className="w-8 h-8 md:w-10 md:h-10 text-orange-500 mb-1" />
            <span className="font-black text-orange-500 text-xs tracking-wider uppercase leading-none">Garantia</span>
            <span className="font-black text-orange-600 text-xl md:text-2xl tracking-tight my-0.5">7 dias</span>
            <span className="text-[8px] text-orange-500 font-black uppercase leading-none">Incondicional</span>
          </div>

          <div>
            <span className="text-xs font-black text-orange-500 tracking-wider uppercase block mb-2">RISCO ZERO PARA VOCÊ</span>
            <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4">Garantia Incondicional de Satisfação</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Nossa missão é ajudar você a dar as melhores aulas de Jiu-Jitsu infantil do Brasil. Por isso, oferecemos uma garantia integral de 7 dias.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed font-semibold">
              Se você por qualquer motivo achar que as mais de 500 dinâmicas e jogos não ajudaram a melhorar o foco de seus alunos ou a organizar sua didática, basta nos enviar um único e-mail ou mensagem. Devolveremos 100% do seu dinheiro investido imediatamente, sem burocracia ou ressentimentos. O risco é todo nosso!
            </p>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="bg-sky-50/20 py-12 px-4 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black text-sky-600 tracking-wider uppercase block mb-2">DÚVIDAS FREQUENTES</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-600 text-sm mt-3 font-medium">
              Ficou com alguma dúvida? Confira as respostas para os principais questionamentos de outros senseis.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA */}
      <section className="bg-orange-500 text-white py-12 px-4 text-center relative overflow-hidden border-t border-orange-600">
        {/* Visual elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 opacity-95 z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-5 leading-tight uppercase text-white">
            Pronto para transformar suas aulas infantis de Jiu-Jitsu?
          </h2>
          <p className="text-orange-100 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Elimine a bagunça no tatame, economize horas planejando aulas e surpreenda os pais com uma metodologia divertida e extremamente pedagógica.
          </p>

          <div className="flex flex-col items-center">
            <button
              onClick={scrollToPricing}
              className="w-full max-w-md bg-white hover:bg-orange-50 text-orange-600 font-black text-xs md:text-sm py-5 px-8 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 tracking-wider uppercase flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>QUERO COMEÇAR AGORA!</span>
              <ChevronRight className="w-5 h-5 animate-bounce-horizontal" />
            </button>
            <p className="text-xs text-orange-100 mt-4 flex items-center justify-center font-bold">
              <Lock className="w-3.5 h-3.5 mr-1 text-orange-200" /> Acesso 100% protegido e entrega digital imediata.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center border-t border-slate-800 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-white font-black text-base mb-6">
            <Award className="w-6 h-6 text-orange-500" />
            <span className="uppercase tracking-widest text-sm">JIU-JITSU INTERATIVO</span>
          </div>

          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed mb-6">
            O material &quot;+500 Dinâmicas Interativas de Jiu-Jitsu&quot; é um guia pedagógico independente e destina-se a fins educativos e didáticos para professores, senseis, e interessados em metodologias de ensino de artes marciais infantis. O respeito à integridade física dos alunos e as regras tradicionais da modalidade devem sempre ser prioridade de todo tutor responsável pelas dinâmicas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold mb-8">
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-orange-500 transition-colors">Preços</a>
            <span className="text-slate-800">•</span>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-orange-500 transition-colors">Políticas de Privacidade</a>
            <span className="text-slate-800">•</span>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-orange-500 transition-colors">Termos de Uso</a>
            <span className="text-slate-800">•</span>
            <span className="text-slate-500">Contato: contato@jiujitsuinterativo.com</span>
          </div>

          <p className="text-[10px] text-slate-600 uppercase tracking-widest">
            © 2026 Dinâmicas Interativas de Jiu-Jitsu. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Upsell Popup for Basic Plan Click */}
      <UpsellModal
        isOpen={isUpsellOpen}
        onClose={() => setIsUpsellOpen(false)}
        onAccept={handleAcceptUpsell}
        onDecline={handleDeclineUpsell}
      />

    </div>
  );
}
