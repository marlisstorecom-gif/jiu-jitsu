export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitTarget {
  id: string;
  title: string;
  description: string;
  avatarEmoji: string;
  bgColor: string;
}

export interface BonusItem {
  id: string;
  title: string;
  subtitle: string;
  originalPrice: number;
  highlightText: string;
  accentColor: string;
  description: string;
  imageUrl?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  originalPrice: number;
  currentPrice: number;
  features: string[];
  buttonText: string;
  popular: boolean;
  checkoutUrl: string;
  bonusIncluded?: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  messages: {
    sender: 'user' | 'me';
    text: string;
    time: string;
  }[];
}
