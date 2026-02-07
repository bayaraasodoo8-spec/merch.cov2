
import { Product, Category, PromiseItem } from './types';

export const PROMISES: PromiseItem[] = [
  {
    icon: 'verified',
    title: 'Quality',
    description: 'Uncompromising standards in every stitch and print, ensuring your brand longevity.',
    hoverColor: 'hover:bg-brand-yellow'
  },
  {
    icon: 'group',
    title: 'Customer-driven',
    description: 'Your vision leads our process. Dedicated support from concept to global delivery.',
    hoverColor: 'hover:bg-brand-blue hover:text-white'
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'Cutting-edge production techniques and sustainable materials for the modern world.',
    hoverColor: 'hover:bg-brand-pink hover:text-white'
  },
  {
    icon: 'gavel',
    title: 'Ethics',
    description: 'Strict adherence to professional ethics and fair manufacturing throughout our chain.',
    hoverColor: 'hover:bg-deep-black hover:text-white'
  }
];

export const COLLECTIONS: Product[] = [
  {
    id: '1',
    name: 'HEAVY COTTON TEES',
    description: '240GSM • BOX OVERSIZED FIT • ECO-DYE',
    specs: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRhmFf_-vZLhO3T3PvH9wxpb5AWYmSqkBHdMZWBskDQHGxdcUuYargz01cHCxXh5fuHyLCp9jqGYcTrzeJf8zP7j6fzsQ3d3j-IfNkIDXPBIhlQJspmNFl-kGk_lHymKeei4hS9FtNbYq6NXckBmJkLhgVKtOQ1cCMQKdTLiqk42nnVg-0Nt6-QAh2VFmRLQKoL9Xu2nOosOxdysJmeJrAtgLSQ3jR3JxBdbNnW5fKBOs389yOv4toFbACkx0f1vRNPsgbAZH78Ax1',
    bgColor: 'bg-brand-blue',
    shadowColor: 'yellow',
    buttonColor: 'bg-deep-black text-brand-yellow',
    textColor: 'text-brand-yellow'
  },
  {
    id: '2',
    name: 'PRO HOODIES',
    description: '450GSM • FRENCH TERRY • REINFORCED',
    specs: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-brand-yellow',
    shadowColor: 'black',
    buttonColor: 'bg-brand-blue text-white',
    textColor: 'text-deep-black'
  },
  {
    id: '3',
    name: 'HEADWEAR',
    description: 'CORDUROY • 6-PANEL • CUSTOM STRAPS',
    specs: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDE0ZECyE3b5H-dy1SZ7t7Ib-o5fs85wN5-SBQgVdchJRUzc64er0agMVD_o0NzhZ-3yM4IwmfaICkXAf7dFO9KfXWabekKTSU-uyl7xNh-I5DGbcshsKVvxZdk2IecMCrop3AVkyf9JkzWDo0rui0zYhcPcZtt2ZLHFG8s7lvdDNSG2LS7PvqnlkQZsjBHrqXGb0WjcEa22MqndZCln5FxCy_HzqI5Kk8FCApwRfOIgRrjDhYDhHg7fzj4IW9Lgcsag0Fl5J52o',
    bgColor: 'bg-stark-white',
    shadowColor: 'yellow',
    buttonColor: 'bg-deep-black text-white',
    textColor: 'text-deep-black'
  }
];

export const CATEGORIES: Category[] = [
  {
    name: 'Apparel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQxBDGadevcsQORuZDVlpQE7VowJtMAv9En16woywKqf4XCPwNNL20FL97iQOlMyo5qNBv2hmkUmsS62zC47581XeCpbIzMVQzm_adyZZYOjl5F5qjpsrNI6mBdlSdt-6r-DxHU06iQjiEWR08z1yZ0PM4Zrpf_ZT09bjfsmIE4LIW9SMnz1_pyiL0vvxk-7hiCT5AEWb2OD5hQlcmqta_fKHB_HEj2IG6dLdf860Zn1PrcHS0VEHrKzVlxQDByTHEWpDO32OEO_HG',
    bgColor: 'bg-brand-pink',
    labelBg: 'bg-deep-black',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-brand-blue',
    labelBg: 'bg-brand-yellow',
    labelColor: 'text-deep-black'
  },
  {
    name: 'Bags',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmT1GVrjlmu0gnevL0fIIr91TdmZJxpSErxbzKW-kvKf1PisJ5dkAK1YJ9ktmuiEI-haVbMdJLnkdjpo1Zf7j2RXCGbC0vxKzAa-ABavdwxvLQx3yBPaRhMos2qU41wStxA0qGkHtw8d_b-aIyvAGhIEL8ypPWZnsT2T3cbsZVbhhxFTxcchI32IawQhaQMOYdvAAMWdBxWFVv9R4G2CXAL89Ea2RCKaGs1A88xjGECQP2SQ4nJoIYzpYA7s2NpKnrOYuXfO9YxhB',
    bgColor: 'bg-stark-white',
    labelBg: 'bg-deep-black',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Tech',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDE0ZECyE3b5H-dy1SZ7t7Ib-o5fs85wN5-SBQgVdchJRUzc64er0agMVD_o0NzhZ-3yM4IwmfaICkXAf7dFO9KfXWabekKTSU-uyl7xNh-I5DGbcshsKVvxZdk2IecMCrop3AVkyf9JkzWDo0rui0zYhcPcZtt2ZLHFG8s7lvdDNSG2LS7PvqnlkQZsjBHrqXGb0WjcEa22MqndZCln5FxCy_HzqI5Kk8FCApwRfOIgRrjDhYDhHg7fzj4IW9Lgcsag0Fl5J52o',
    bgColor: 'bg-deep-black',
    labelBg: 'bg-brand-yellow',
    labelColor: 'text-deep-black',
    span: 'md:row-span-2 lg:col-start-4 lg:row-start-1 h-full'
  },
  {
    name: 'Office',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRhmFf_-vZLhO3T3PvH9wxpb5AWYmSqkBHdMZWBskDQHGxdcUuYargz01cHCxXh5fuHyLCp9jqGYcTrzeJf8zP7j6fzsQ3d3j-IfNkIDXPBIhlQJspmNFl-kGk_lHymKeei4hS9FtNbYq6NXckBmJkLhgVKtOQ1cCMQKdTLiqk42nnVg-0Nt6-QAh2VFmRLQKoL9Xu2nOosOxdysJmeJrAtgLSQ3jR3JxBdbNnW5fKBOs389yOv4toFbACkx0f1vRNPsgbAZH78Ax1',
    bgColor: 'bg-brand-yellow',
    labelBg: 'bg-brand-blue',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Drinkware',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmT1GVrjlmu0gnevL0fIIr91TdmZJxpSErxbzKW-kvKf1PisJ5dkAK1YJ9ktmuiEI-haVbMdJLnkdjpo1Zf7j2RXCGbC0vxKzAa-ABavdwxvLQx3yBPaRhMos2qU41wStxA0qGkHtw8d_b-aIyvAGhIEL8ypPWZnsT2T3cbsZVbhhxFTxcchI32IawQhaQMOYdvAAMWdBxWFVv9R4G2CXAL89Ea2RCKaGs1A88xjGECQP2SQ4nJoIYzpYA7s2NpKnrOYuXfO9YxhB',
    bgColor: 'bg-stark-white',
    labelBg: 'bg-brand-pink',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Packaging',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-brand-blue',
    labelBg: 'bg-stark-white',
    labelColor: 'text-deep-black'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'ENGAGE',
    description: "Initial consultation to understand your brand DNA, target audience, and project scope. We don't just take orders; we build partnerships.",
    year: '2024',
    icon: 'forum',
    bgColor: 'bg-deep-black',
    hoverColor: 'hover:bg-brand-yellow hover:text-deep-black',
    shadowColor: 'brutalist-shadow-blue',
    accentColor: 'border-t-brand-yellow'
  },
  {
    number: '02',
    title: 'RESEARCH',
    description: 'Deep dive into market trends and material sourcing. We find the perfect canvas that aligns with your specific brand legacy requirements.',
    year: '2024',
    icon: 'search_insights',
    bgColor: 'bg-brand-blue',
    hoverColor: 'hover:bg-white hover:text-brand-blue',
    shadowColor: 'brutalist-shadow',
    accentColor: 'border-t-brand-blue'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Professional layout and mockup creation. Our senior design team ensures every graphic element is optimized for high-impact production.',
    year: '2024',
    icon: 'palette',
    bgColor: 'bg-brand-pink',
    hoverColor: 'hover:bg-deep-black hover:text-brand-yellow',
    shadowColor: 'brutalist-shadow-yellow',
    accentColor: 'border-t-brand-yellow'
  },
  {
    number: '04',
    title: 'CREATE',
    description: 'Precision production using state-of-the-art technology. Every piece undergoes a multi-stage quality control protocol before shipping.',
    year: '2025',
    icon: 'precision_manufacturing',
    bgColor: 'bg-stark-white',
    hoverColor: 'hover:bg-brand-blue hover:text-white',
    shadowColor: 'brutalist-shadow',
    accentColor: 'border-t-white'
  },
  {
    number: '05',
    title: 'LOGISTICS',
    description: 'Seamless worldwide shipping and distribution. We handle the heavy lifting so your brand can reach every corner of the globe.',
    year: '2025',
    icon: 'local_shipping',
    bgColor: 'bg-brand-yellow',
    hoverColor: 'hover:bg-deep-black hover:text-brand-yellow',
    shadowColor: 'brutalist-shadow-blue',
    accentColor: 'border-t-deep-black'
  },
  {
    number: '06',
    title: 'EVOLVE',
    description: 'Continuous feedback loop and strategy for your next drop. We grow with you, ensuring your legacy remains relevant and impactful.',
    year: '2026',
    icon: 'auto_graph',
    bgColor: 'bg-deep-black',
    hoverColor: 'hover:bg-brand-blue hover:text-white',
    shadowColor: 'brutalist-shadow-yellow',
    accentColor: 'border-t-brand-blue'
  }
];

export const SOLUTIONS = [
  {
    title: 'Customized MERCH',
    image: '/Users/dmtmobiledev/.gemini/antigravity/brain/3f0ff63d-7ede-4b99-b2ca-f5912c2871f7/customized_merch_card_v2_1770271443110.png',
    description: 'Tailored branded products specifically designed for your unique identity.'
  },
  {
    title: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    description: 'High-impact gear for conferences, trade shows, and corporate gatherings.'
  },
  {
    title: 'Partner Companies',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmT1GVrjlmu0gnevL0fIIr91TdmZJxpSErxbzKW-kvKf1PisJ5dkAK1YJ9ktmuiEI-haVbMdJLnkdjpo1Zf7j2RXCGbC0vxKzAa-ABavdwxvLQx3yBPaRhMos2qU41wStxA0qGkHtw8d_b-aIyvAGhIEL8ypPWZnsT2T3cbsZVbhhxFTxcchI32IawQhaQMOYdvAAMWdBxWFVv9R4G2CXAL89Ea2RCKaGs1A88xjGECQP2SQ4nJoIYzpYA7s2NpKnrOYuXfO9YxhB',
    description: 'Exclusive collaborated swag sets for your most valued business partners.'
  },
  {
    title: 'People',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDE0ZECyE3b5H-dy1SZ7t7Ib-o5fs85wN5-SBQgVdchJRUzc64er0agMVD_o0NzhZ-3yM4IwmfaICkXAf7dFO9KfXWabekKTSU-uyl7xNh-I5DGbcshsKVvxZdk2IecMCrop3AVkyf9JkzWDo0rui0zYhcPcZtt2ZLHFG8s7lvdDNSG2LS7PvqnlkQZsjBHrqXGb0WjcEa22MqndZCln5FxCy_HzqI5Kk8FCApwRfOIgRrjDhYDhHg7fzj4IW9Lgcsag0Fl5J52o',
    description: 'Employee onboarding and appreciation kits that build strong team culture.'
  }
];
