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
    window.open('https://go.pepperpay.com.br/sobee', '_blank');
    setIsUpsellOpen(false);
  };

  const handleDeclineUpsell = () => {
    window.open('https://go.pepperpay.com.br/b7b7e', '_blank');
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
    <div className="min-h-screen bg-off-white text-slate-800 font-sans antialiased selection:bg-brand-orange selection:text-white">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-brand-orange text-white text-center py-2.5 px-4 text-xs font-display font-black tracking-wider uppercase flex items-center justify-center space-x-2 relative z-50 shadow-sm">
        <span className="animate-pulse">🥋</span>
        <span>Dificuldade para manter a atenção dos pequenos no tatame?</span>
      </div>



      {/* 2. HERO SECTION */}
      <section className="relative bg-off-white pt-6 md:pt-10 pb-12 px-4 overflow-hidden border-b border-border-soft">
        {/* Glowing background accents */}
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-navy rounded-full mix-blend-multiply filter blur-3xl opacity-[0.03] -z-10 animate-blob"></div>
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-[0.05] -z-10 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight uppercase mb-6 text-navy">
            <span className="text-brand-orange font-black">+500</span> Dinâmicas <br/>
            Interativas de <span className="text-brand-orange font-black">Jiu-Jitsu Infantil</span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6 font-medium">
            Aumente o engajamento das crianças de 3 a 14 anos, torne-se uma referência em didática lúdica e elimine de vez a dispersão no tatame com jogos e metodologias validadas.
          </p>

          {/* Hero Mockup Image */}
          <div className="mb-10 flex justify-center px-4">
            <img 
              src="https://res.cloudinary.com/dm2glkkcv/image/upload/v1786159470/823c9bd3-9034-4bda-a5d3-ddb19fd9d502_dlbwea.png" 
              alt="Mockup do Acervo de Jiu-Jitsu Infantil"
              className="w-full max-w-xl md:max-w-3xl h-auto object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Main CTA Button */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <button
              onClick={scrollToPricing}
              className="w-full max-w-md bg-brand-orange hover:bg-[#E05B00] text-white font-display font-black text-base md:text-lg py-5 px-8 rounded-2xl shadow-lg shadow-brand-orange/20 active:scale-[0.98] transition-all duration-300 tracking-wider uppercase flex items-center justify-center space-x-3 cursor-pointer animate-pulse-btn"
            >
              <span>QUERO ACESSO COMPLETO AGORA!</span>
              <ChevronRight className="w-5 h-5 animate-bounce-horizontal" />
            </button>

            {/* Micro-guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-text-secondary font-bold">
              <span className="flex items-center"><Check className="w-4 h-4 text-brand-orange mr-1.5" /> Acesso imediato no e-mail</span>
              <span className="flex items-center"><Check className="w-4 h-4 text-brand-orange mr-1.5" /> Pagamento único sem mensalidades</span>
              <span className="flex items-center"><Check className="w-4 h-4 text-brand-orange mr-1.5" /> Garantia incondicional de 7 dias</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "O QUE VOCÊ VAI RECEBER?" SECTION */}
      <section id="features" className="bg-white py-16 px-4 border-b border-border-soft">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-display font-black text-brand-orange tracking-wider uppercase block mb-2">CONTEÚDO COMPLETO</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight uppercase leading-tight">
              O Que Você Vai Receber no Seu Acesso?
            </h2>
            <p className="text-text-secondary text-sm md:text-base mt-3 font-medium">
              Tudo o que você precisa para transformar suas aulas de Jiu-Jitsu em uma experiência lúdica, inesquecível e extremamente técnica.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresList.map((feat) => (
              <div 
                key={feat.id} 
                className="bg-off-white border-2 border-border-soft rounded-3xl p-6 hover:border-brand-orange/40 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-white text-brand-orange flex items-center justify-center mb-5 font-black shadow-sm border border-border-soft">
                  {renderIcon(feat.iconName)}
                </div>
                <h3 className="font-display font-black text-navy text-xl uppercase tracking-wide mb-2">{feat.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. "PARA QUEM É?" SECTION */}
      <section id="benefits" className="bg-navy py-16 px-4 border-b border-border-soft text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="bg-[#151d35] border border-white/10 text-brand-yellow text-xs font-display font-black px-4 py-1.5 rounded-full tracking-wider uppercase inline-block mb-3 shadow-sm">
              PARA QUEM É?
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tight uppercase leading-tight">
              Este kit foi feito sob medida para você se...
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefitsTargets.map((target) => (
              <div 
                key={target.id}
                className="bg-[#151d35] border border-white/5 rounded-3xl p-6 flex items-start space-x-4 shadow-sm hover:border-brand-orange/35 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl p-3.5 rounded-2xl bg-navy border border-white/5 shrink-0 flex items-center justify-center shadow-inner">
                  {target.avatarEmoji}
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg md:text-xl uppercase tracking-wide mb-1">{target.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{target.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF SECTION */}
      <section id="testimonials" className="bg-off-white py-16 px-4 border-b border-border-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-display font-black text-brand-orange tracking-wider uppercase block mb-2">RESULTADOS REAIS</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight uppercase leading-tight">
              O Que Nossos Mestres Estão Falando
            </h2>
            <p className="text-text-secondary text-sm md:text-base mt-3 font-medium">
              Veja conversas reais de professores, senseis e educadores que já aplicam nossas dinâmicas e revolucionaram suas aulas no tatame.
            </p>
          </div>

          <WhatsAppMockup />
        </div>
      </section>

      {/* 5. BONUS SECTION */}
      <section className="bg-white py-16 px-4 relative overflow-hidden border-b border-border-soft">
        {/* Glow Effects */}
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-orange rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.04]"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-navy rounded-full mix-blend-multiply filter blur-[120px] opacity-[0.02]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 mb-8">
          <span className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-[10px] font-display font-black px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
            🎁 BÔNUS EXCLUSIVOS & SUPER BÔNUS
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-navy uppercase mb-3 leading-tight">
            Receba 3 Bônus Incríveis + 1 SUPER BÔNUS GRÁTIS!
          </h2>
        </div>

        <BonusCard />

        <div className="text-center mt-8 relative z-10">
          <p className="text-text-secondary text-sm font-extrabold uppercase tracking-wider max-w-xl mx-auto">
            Valor total dos bônus: <span className="line-through text-red-500">R$ 164,00</span>
            <span className="text-brand-orange block sm:inline sm:ml-2">(Mas comprando HOJE sai tudo de graça!)</span>
          </p>
        </div>


      </section>

      {/* 6. URGENCY & PRICING SECTION */}
      <section ref={pricingRef} id="pricing" className="bg-off-white py-16 px-4 border-b border-border-soft scroll-mt-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-display font-black text-brand-orange tracking-wider uppercase block mb-2">APROVEITE A PROMOÇÃO</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight uppercase leading-tight">
              Invista na Qualidade das Suas Aulas
            </h2>
            <p className="text-text-secondary text-sm mt-3 font-medium">
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
                      ? 'bg-white border-4 border-brand-orange shadow-xl shadow-brand-orange/10 md:-translate-y-2'
                      : 'bg-white border-2 border-border-soft shadow-sm'
                  }`}
                >
                  {isPremium && (
                    <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-orange text-white text-[10px] font-display font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
                      ⚡ MAIS POPULAR & RECOMENDADO
                    </span>
                  )}

                  <div className="flex flex-col items-center text-center">
                    <div className="flex flex-col items-center mb-3">
                      {isPremium && (
                        <span className="bg-brand-orange/10 text-brand-orange text-[10px] font-display font-black px-2.5 py-1 rounded-full mb-2">
                          Super Kit Premium
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-display font-black text-navy uppercase tracking-tight">{plan.name}</h3>
                    </div>
                    
                    <p className="text-text-secondary text-xs md:text-sm mb-6 leading-relaxed font-medium max-w-sm">
                      {plan.tagline}
                    </p>

                    {/* Pricing Display */}
                    <div className={`w-full mb-6 pb-6 border-b flex flex-col items-center ${isPremium ? 'border-brand-orange/15' : 'border-border-soft'}`}>
                      <span className="text-xs text-slate-400 block font-bold mb-1">
                        De R$ {plan.originalPrice.toFixed(2).replace('.', ',')} por apenas:
                      </span>
                      <div className="flex items-baseline justify-center space-x-1">
                        <span className="text-navy font-display font-black text-2xl md:text-3xl">R$</span>
                        <span className="text-navy font-display font-black text-5xl md:text-6xl tracking-tight">
                          {plan.currentPrice.toFixed(2).split('.')[0]}
                        </span>
                        <span className="text-navy font-display font-black text-2xl md:text-3xl">
                          ,{plan.currentPrice.toFixed(2).split('.')[1]}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 font-bold mt-1 block">Pagamento Único • Acesso Vitalício</span>
                      <span className="text-[10px] text-brand-orange font-display font-black uppercase tracking-wider block mt-2">✓ Sem mensalidades ou surpresas</span>
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
                                  ? 'font-display font-black text-amber-700 bg-brand-yellow/10 border border-brand-yellow/30 px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wider inline-block' 
                                  : isBonus 
                                  ? 'font-bold text-brand-orange' 
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
                  <div className={`mt-auto pt-4 border-t flex flex-col items-center w-full ${isPremium ? 'border-brand-orange/15' : 'border-border-soft'}`}>
                    {plan.id === 'p_basic' ? (
                      <button
                        type="button"
                        onClick={() => setIsUpsellOpen(true)}
                        className="w-full max-w-sm py-4 px-6 rounded-2xl text-center font-display font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-800"
                      >
                        <span>{plan.buttonText}</span>
                        <Sparkles className="w-4 h-4 shrink-0 text-brand-orange" />
                      </button>
                    ) : (
                      <a
                        href={plan.checkoutUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full max-w-sm py-4 px-6 rounded-2xl text-center font-display font-black text-xs md:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer bg-brand-orange hover:bg-[#E05B00] text-white shadow-md shadow-brand-orange/20 animate-pulse-btn"
                      >
                        <span>{plan.buttonText}</span>
                        <ExternalLink className="w-4 h-4 shrink-0" />
                      </a>
                    )}

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center gap-4 mt-5 text-[10px] text-slate-400 font-bold w-full">
                      <span className="flex items-center"><Lock className="w-3 h-3 text-brand-orange mr-1" /> Compra Segura</span>
                      <span className="flex items-center"><ShieldCheck className="w-3 h-3 text-brand-orange mr-1" /> Satisfação Garantida</span>
                    </div>

                    {/* WhatsApp Info */}
                    <div className={`mt-4 rounded-xl p-3 text-center w-full max-w-sm ${isPremium ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50 border border-slate-100'}`}>
                      <p className={`text-[10px] font-display font-black uppercase tracking-wider flex items-center justify-center space-x-1.5 ${isPremium ? 'text-emerald-600' : 'text-slate-500'}`}>
                        <span className={`w-2 h-2 rounded-full animate-pulse inline-block ${isPremium ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                        <span>RECEBA O MATERIAL DIRETO NO WHATSAPP</span>
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 8. WARRANTY SECTION */}
      <section className="bg-white py-16 px-4 border-b border-border-soft">
        <div className="max-w-4xl mx-auto">
          <div className="bg-off-white border-2 border-border-soft rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10 shadow-sm">
            {/* Circular Stamp Visual in CSS */}
            <div className="shrink-0 relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-brand-orange/5 border-4 border-dashed border-brand-orange/40 flex flex-col items-center justify-center p-3 text-center shadow-inner">
              <div className="absolute inset-2 rounded-full border-2 border-brand-orange/10"></div>
              <Award className="w-8 h-8 md:w-10 md:h-10 text-brand-orange mb-1 animate-pulse" />
              <span className="font-display font-black text-brand-orange text-xs tracking-wider uppercase leading-none">Garantia</span>
              <span className="font-display font-black text-navy text-2xl md:text-3xl tracking-tight my-0.5">7 dias</span>
              <span className="text-[8px] text-brand-orange font-black uppercase leading-none">Incondicional</span>
            </div>

            <div>
              <span className="text-xs font-display font-black text-brand-orange tracking-wider uppercase block mb-2">RISCO ZERO PARA VOCÊ</span>
              <h3 className="text-2xl md:text-3xl font-display font-black text-navy uppercase tracking-tight mb-4">Garantia Incondicional de Satisfação</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Nossa missão é ajudar você a dar as melhores aulas de Jiu-Jitsu infantil do Brasil. Por isso, oferecemos uma garantia integral de 7 dias.
              </p>
              <p className="text-navy text-sm leading-relaxed font-semibold">
                Se você por qualquer motivo achar que as mais de 500 dinâmicas e jogos não ajudaram a melhorar o foco de seus alunos ou a organizar sua didática, basta nos enviar um único e-mail ou mensagem. Devolveremos 100% do seu dinheiro investido imediatamente, sem burocracia ou ressentimentos. O risco é todo nosso!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section id="faq" className="bg-off-white py-16 px-4 border-b border-border-soft">
        <div className="max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-display font-black text-brand-orange tracking-wider uppercase block mb-2">DÚVIDAS FREQUENTES</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy tracking-tight uppercase leading-tight">
              Perguntas Frequentes
            </h2>
            <p className="text-text-secondary text-sm mt-3 font-medium">
              Ficou com alguma dúvida? Confira as respostas para os principais questionamentos de outros senseis.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* 10. FINAL BOTTOM CTA */}
      <section className="bg-navy text-white py-16 px-4 text-center relative overflow-hidden border-t border-border-soft">
        <div className="absolute top-0 left-0 w-full h-full bg-navy opacity-95 z-0"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight mb-5 leading-tight uppercase text-white">
            Pronto para transformar suas aulas infantis de Jiu-Jitsu?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-medium">
            Elimine a bagunça no tatame, economize horas planejando aulas e surpreenda os pais com uma metodologia divertida e extremamente pedagógica.
          </p>

          <div className="flex flex-col items-center">
            <button
              onClick={scrollToPricing}
              className="w-full max-w-md bg-brand-orange hover:bg-[#E05B00] text-white font-display font-black text-base py-5 px-8 rounded-2xl shadow-lg shadow-brand-orange/20 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 tracking-wider uppercase flex items-center justify-center space-x-3 cursor-pointer"
            >
              <span>QUERO COMEÇAR AGORA!</span>
              <ChevronRight className="w-5 h-5 animate-bounce-horizontal" />
            </button>
            <p className="text-xs text-slate-400 mt-4 flex items-center justify-center font-bold">
              <Lock className="w-3.5 h-3.5 mr-1 text-brand-orange" /> Acesso 100% protegido e entrega digital imediata.
            </p>
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-navy text-slate-400 py-10 px-4 text-center border-t border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 text-white font-display font-black text-lg mb-6">
            <Award className="w-6 h-6 text-brand-orange" />
            <span className="uppercase tracking-widest">JIU-JITSU INTERATIVO</span>
          </div>

          <p className="text-xs text-slate-500 max-w-2xl mx-auto leading-relaxed mb-6">
            O material &quot;+500 Dinâmicas Interativas de Jiu-Jitsu&quot; é um guia pedagógico independente e destina-se a fins educativos e didáticos para professores, senseis, e interessados em metodologias de ensino de artes marciais infantis. O respeito à integridade física dos alunos e as regras tradicionais da modalidade devem sempre ser prioridade de todo tutor responsável pelas dinâmicas.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-bold mb-8">
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-brand-orange transition-colors">Preços</a>
            <span className="text-slate-800">•</span>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-brand-orange transition-colors">Políticas de Privacidade</a>
            <span className="text-slate-800">•</span>
            <a href="#pricing" onClick={scrollToPricing} className="hover:text-brand-orange transition-colors">Termos de Uso</a>
            <span className="text-slate-800">•</span>
            <span className="text-slate-500">Contato: contato@jiujitsuinterativo.com</span>
          </div>

          <p className="text-[10px] text-slate-600 uppercase tracking-widest font-display">
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
