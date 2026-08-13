import { FeatureItem, BenefitTarget, BonusItem, PricingPlan, FaqItem, TestimonialItem } from '../types';

export const featuresList: FeatureItem[] = [
  {
    id: 'f1',
    title: '+500 Dinâmicas',
    description: 'Atividades lúdicas prontas para aplicar direto no tatame, divididas por nível.',
    iconName: 'Award',
  },
  {
    id: 'f2',
    title: 'Bônus Exclusivos',
    description: 'Jogos extras, plano de preparação física e certificado prontos inclusos.',
    iconName: 'Gift',
  },
  {
    id: 'f5',
    title: 'Pronto para Imprimir',
    description: 'Leve as fichas em PDF para o tatame sem precisar de internet ou bateria.',
    iconName: 'Printer',
  },
  {
    id: 'f6',
    title: 'Alinhado à BNCC',
    description: 'Metodologia testada e aprovada por educadores físicos e pais de alunos.',
    iconName: 'CheckSquare',
  },
];

export const benefitsTargets: BenefitTarget[] = [
  {
    id: 'b1',
    title: 'Professores e Senseis',
    description: 'Que querem aulas mais dinâmicas, com menor esforço de planejamento e alunos 100% focados.',
    avatarEmoji: '🥋',
    bgColor: 'bg-red-50 text-red-600 border-red-100',
  },
  {
    id: 'b2',
    title: 'Pais de Alunos',
    description: 'Que desejam estimular a coordenação motora e ensinar o jiu-jitsu de forma divertida em casa.',
    avatarEmoji: '👨‍👩‍👧‍👦',
    bgColor: 'bg-amber-50 text-amber-600 border-amber-100',
  },
  {
    id: 'b3',
    title: 'Academias e Dojos',
    description: 'Que buscam profissionalizar e padronizar as turmas infantis, aumentando a retenção de alunos.',
    avatarEmoji: '🏯',
    bgColor: 'bg-blue-50 text-blue-600 border-blue-100',
  },
  {
    id: 'b4',
    title: 'Educadores Físicos',
    description: 'Que buscam atividades de lutas alinhadas às diretrizes da BNCC para enriquecer suas aulas.',
    avatarEmoji: '📋',
    bgColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
  },
];

export const bonusList: BonusItem[] = [
  {
    id: 'bn1',
    title: 'Certificado de Jiu-Jiteiro',
    subtitle: 'Certificado oficial de participação infantil pronto para preenchimento.',
    originalPrice: 27,
    highlightText: 'HOJE GRÁTIS',
    accentColor: 'from-blue-600 to-indigo-700',
    description: 'Uma excelente ferramenta de gamificação para motivar as crianças a continuarem frequentando as aulas.',
    imageUrl: 'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786156030/ChatGPT_Image_7_de_ago._de_2026_23_19_25_tf2lzh.png',
  },
  {
    id: 'bn2',
    title: 'Jogos de Luta',
    subtitle: 'Brincadeiras e dinâmicas interativas focadas no desenvolvimento da coordenação e equilíbrio.',
    originalPrice: 37,
    highlightText: 'HOJE GRÁTIS',
    accentColor: 'from-amber-500 to-orange-600',
    description: 'Dinâmicas desenvolvidas para ensinar de forma descontraída as técnicas essenciais de autodefesa e esquiva.',
    imageUrl: 'https://res.cloudinary.com/dm2glkkcv/image/upload/v1785983349/ChatGPT_Image_5_de_ago._de_2026_23_28_57_nx4ths.png',
  },
  {
    id: 'bn3',
    title: '100 Exercícios de Jiu-Jitsu',
    subtitle: 'Guia prático para preparação física de crianças com foco em flexibilidade e força.',
    originalPrice: 33,
    highlightText: 'HOJE GRÁTIS',
    accentColor: 'from-emerald-500 to-teal-700',
    description: 'Exercícios sequenciais focados na melhora da mobilidade, do rolamento e das posturas de guarda.',
    imageUrl: 'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786014019/29a7ef44-3c58-489a-9435-da731da541a8_nzdcco.png',
  },
  {
    id: 'bn4',
    title: 'Gamificação Tatame dos Campeões',
    subtitle: 'Método de retenção para engajar, motivar e transformar o comportamento dos alunos infantis.',
    originalPrice: 67,
    highlightText: 'SUPER BÔNUS',
    accentColor: 'from-amber-400 via-orange-500 to-red-600',
    description: 'O maior segredo de retenção! Kit completo com Passaporte do Guerreiro pronto para imprimir, Cartões de Missão dinâmicos, Quadro de Evolução individual, Medalhas e sistema de recompensas para vencer a dispersão.',
    isSuperBonus: true,
    imageUrl: 'https://res.cloudinary.com/dm2glkkcv/image/upload/v1786584576/ChatGPT_Image_12_de_ago._de_2026_22_27_36_km1fjv.png',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'p_basic',
    name: 'Plano Básico',
    tagline: 'Para quem está começando agora e quer dar o primeiro passo.',
    originalPrice: 67,
    currentPrice: 9.90,
    features: [
      '+500 Dinâmicas Interativas de Jiu-Jitsu',
      'Acesso Vitalício ao material',
      'Metodologia Comprovada na prática',
      'Garantia de 7 dias sem burocracia',
    ],
    buttonText: 'ESCOLHER PLANO BÁSICO',
    popular: false,
    checkoutUrl: 'https://pay.kiwify.com.br/basico-placeholder', // We use standard URLs as requested
  },
  {
    id: 'p_premium',
    name: 'Plano Premium',
    tagline: 'O arsenal completo de dinâmicas e bônus exclusivos.',
    originalPrice: 197,
    currentPrice: 19.90,
    features: [
      '+500 Dinâmicas Interativas de Jiu-Jitsu',
      'Atualizações Mensais Gratuitas',
      'Suporte VIP Prioritário por WhatsApp',
      'Acesso Vitalício',
      'Metodologia Comprovada',
      'Garantia Incondicional de 7 dias',
      'Área de Membros Exclusiva',
      'Certificado Jiu-Jiteiro Infantil (Bônus)',
      '20 Jogos de Lutas Interativas (Bônus)',
      '100 Exercícios de Preparação Física (Bônus)',
      'SUPER BÔNUS: Sistema "Tatame dos Campeões" (Incluso HOJE)',
    ],
    buttonText: 'QUERO O PLANO PREMIUM',
    popular: true,
    checkoutUrl: 'https://pay.kiwify.com.br/premium-placeholder',
    bonusIncluded: ['bn1', 'bn2', 'bn3'],
  },
];

export const faqList: FaqItem[] = [
  {
    id: 'faq1',
    question: 'Como vou acessar o material?',
    answer: 'O acesso é enviado imediatamente após a aprovação do pagamento. Você receberá um e-mail com os dados de acesso à nossa Área de Membros exclusiva e os links para baixar o conteúdo completo em PDF.',
  },
  {
    id: 'faq2',
    question: 'Serve para qual idade?',
    answer: 'O material foi projetado especificamente para turmas de Jiu-Jitsu infantil e iniciantes, cobrindo com excelência a faixa etária de 3 a 14 anos, permitindo adaptações simples para qualquer grupo.',
  },
  {
    id: 'faq3',
    question: 'O material segue as tradições do Jiu-Jitsu?',
    answer: 'Sim! As dinâmicas foram estruturadas para passar conceitos técnicos reais (queda, rolamento, guarda, montada, escape, postura) preservando totalmente o respeito, a disciplina e a tradição da arte suave.',
  },
  {
    id: 'faq4',
    question: 'Tenho alguma garantia?',
    answer: 'Com certeza! Você tem 7 dias de garantia incondicional. Se por qualquer motivo você não gostar das dinâmicas ou achar que não ajudou nas suas aulas, basta solicitar o reembolso e devolvemos 100% do seu dinheiro.',
  },
  {
    id: 'faq5',
    question: 'Como posso tirar dúvidas sobre as dinâmicas?',
    answer: 'No Plano Premium, você tem acesso ao nosso canal exclusivo de suporte via WhatsApp para tirar dúvidas sobre aplicação das atividades direto com nossa equipe pedagógica.',
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Sensei Rafael Silva',
    role: 'Professor de Jiu-Jitsu Infantil (Dojo Alliance)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=256&h=256',
    messages: [
      { sender: 'user', text: 'Olá, mestre! Passando para agradecer. O kit de dinâmicas mudou da água pro vinho minhas turmas de 4 a 7 anos! Eles não param mais quietos de empolgação.', time: '14:20' },
      { sender: 'me', text: 'Que excelente notícia, Sensei! Qual dinâmica eles mais gostaram de jogar?', time: '14:22' },
      { sender: 'user', text: 'O "Jacaré na Lagoa" e o "Sumô de Joelho". Eles pedem toda aula! O engajamento aumentou muito e os pais estão elogiando demais a didática. Parabéns pelo material!', time: '14:25' },
    ],
  },
  {
    id: 't2',
    name: 'Prof. Amanda Costa',
    role: 'Personal Trainer e Educadora Física',
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=256&h=256',
    messages: [
      { sender: 'user', text: 'Dei a minha primeira aula de lutas alinhada à BNCC usando os exercícios e as dinâmicas do kit.', time: '09:12' },
      { sender: 'user', text: 'A diretora da escola foi assistir e adorou como consegui trabalhar a psicomotricidade sem perder o foco na disciplina.', time: '09:13' },
      { sender: 'me', text: 'Parabéns, Amanda! Alinhar à BNCC abre muitas portas em escolas de ensino básico.', time: '09:15' },
      { sender: 'user', text: 'Com certeza! Agora vou levar o material para os meus treinos particulares de Jiu-Jitsu infantil também.', time: '09:18' },
    ],
  },
  {
    id: 't3',
    name: 'Mestre Hugo Santos',
    role: 'Líder da Equipe Gracie Barra Kids',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256',
    messages: [
      { sender: 'user', text: 'Mestre, o Certificado do Jiu-Jiteiro fez um sucesso absurdo aqui na graduação da garotada.', time: '18:41' },
      { sender: 'me', text: 'Sensacional, Hugo! A premiação visual é muito importante nessa fase.', time: '18:43' },
      { sender: 'user', text: 'Sim, os olhinhos deles brilhavam ao receber. Valeu cada centavo investido no kit premium, o suporte no WhatsApp também me ajudou demais a adaptar os treinos para o retorno das férias.', time: '18:47' },
    ],
  },
];
