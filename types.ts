
export interface Product {
  id: string;
  name: string;
  description: string;
  specs: string;
  image: string;
  bgColor: string;
  shadowColor: 'lime' | 'black' | 'blue';
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
