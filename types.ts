
export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string;
  image: string;
  bgColor: string;
  shadowColor: 'yellow' | 'black' | 'blue';
  buttonColor: string;
  textColor: string;
}

export interface Category {
  name: string;
  image: string;
  bgColor: string;
  labelBg: string;
  labelColor: string;
  span?: string;
}

export interface PromiseItem {
  icon: string;
  title: string;
  description: string;
  hoverColor: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  year: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
  shadowColor: string;
  accentColor: string;
}
