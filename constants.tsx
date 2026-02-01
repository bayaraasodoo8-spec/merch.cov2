
import { Product, Category, PromiseItem } from './types';

export const PROMISES: PromiseItem[] = [
  {
    icon: 'verified',
    title: 'Quality',
    description: 'Uncompromising standards in every stitch and print, ensuring your brand longevity.',
    hoverColor: 'hover:bg-neon-lime'
  },
  {
    icon: 'group',
    title: 'Customer-driven',
    description: 'Your vision leads our process. Dedicated support from concept to global delivery.',
    hoverColor: 'hover:bg-electric-blue hover:text-white'
  },
  {
    icon: 'lightbulb',
    title: 'Innovation',
    description: 'Cutting-edge production techniques and sustainable materials for the modern world.',
    hoverColor: 'hover:bg-hot-pink hover:text-white'
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
    bgColor: 'bg-electric-blue',
    shadowColor: 'lime',
    buttonColor: 'bg-deep-black text-neon-lime',
    textColor: 'text-neon-lime'
  },
  {
    id: '2',
    name: 'PRO HOODIES',
    description: '450GSM • FRENCH TERRY • REINFORCED',
    specs: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-neon-lime',
    shadowColor: 'black',
    buttonColor: 'bg-electric-blue text-white',
    textColor: 'text-deep-black'
  },
  {
    id: '3',
    name: 'HEADWEAR',
    description: 'CORDUROY • 6-PANEL • CUSTOM STRAPS',
    specs: '',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcWDE0ZECyE3b5H-dy1SZ7t7Ib-o5fs85wN5-SBQgVdchJRUzc64er0agMVD_o0NzhZ-3yM4IwmfaICkXAf7dFO9KfXWabekKTSU-uyl7xNh-I5DGbcshsKVvxZdk2IecMCrop3AVkyf9JkzWDo0rui0zYhcPcZtt2ZLHFG8s7lvdDNSG2LS7PvqnlkQZsjBHrqXGb0WjcEa22MqndZCln5FxCy_HzqI5Kk8FCApwRfOIgRrjDhYDhHg7fzj4IW9Lgcsag0Fl5J52o',
    bgColor: 'bg-stark-white',
    shadowColor: 'lime',
    buttonColor: 'bg-deep-black text-white',
    textColor: 'text-deep-black'
  }
];

export const CATEGORIES: Category[] = [
  {
    name: 'Apparel',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQxBDGadevcsQORuZDVlpQE7VowJtMAv9En16woywKqf4XCPwNNL20FL97iQOlMyo5qNBv2hmkUmsS62zC47581XeCpbIzMVQzm_adyZZYOjl5F5qjpsrNI6mBdlSdt-6r-DxHU06iQjiEWR08z1yZ0PM4Zrpf_ZT09bjfsmIE4LIW9SMnz1_pyiL0vvxk-7hiCT5AEWb2OD5hQlcmqta_fKHB_HEj2IG6dLdf860Zn1PrcHS0VEHrKzVlxQDByTHEWpDO32OEO_HG',
    bgColor: 'bg-hot-pink',
    labelBg: 'bg-deep-black',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Events',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-electric-blue',
    labelBg: 'bg-neon-lime',
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
    labelBg: 'bg-neon-lime',
    labelColor: 'text-deep-black',
    span: 'md:row-span-2 lg:col-start-4 lg:row-start-1 h-full'
  },
  {
    name: 'Office',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRhmFf_-vZLhO3T3PvH9wxpb5AWYmSqkBHdMZWBskDQHGxdcUuYargz01cHCxXh5fuHyLCp9jqGYcTrzeJf8zP7j6fzsQ3d3j-IfNkIDXPBIhlQJspmNFl-kGk_lHymKeei4hS9FtNbYq6NXckBmJkLhgVKtOQ1cCMQKdTLiqk42nnVg-0Nt6-QAh2VFmRLQKoL9Xu2nOosOxdysJmeJrAtgLSQ3jR3JxBdbNnW5fKBOs389yOv4toFbACkx0f1vRNPsgbAZH78Ax1',
    bgColor: 'bg-neon-lime',
    labelBg: 'bg-electric-blue',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Drinkware',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAsmT1GVrjlmu0gnevL0fIIr91TdmZJxpSErxbzKW-kvKf1PisJ5dkAK1YJ9ktmuiEI-haVbMdJLnkdjpo1Zf7j2RXCGbC0vxKzAa-ABavdwxvLQx3yBPaRhMos2qU41wStxA0qGkHtw8d_b-aIyvAGhIEL8ypPWZnsT2T3cbsZVbhhxFTxcchI32IawQhaQMOYdvAAMWdBxWFVv9R4G2CXAL89Ea2RCKaGs1A88xjGECQP2SQ4nJoIYzpYA7s2NpKnrOYuXfO9YxhB',
    bgColor: 'bg-stark-white',
    labelBg: 'bg-hot-pink',
    labelColor: 'text-stark-white'
  },
  {
    name: 'Packaging',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuHjVX2s68aGYfuXqWq3BkAm6Y7tw4jmHUQBxvBJDSeRw04fedP2SiPiXFFpOdk65qvTL6CsbfvoHhNFK_qkbiOeiB_uNp7_ItPqJ-pWpU9jDPMt86hHZd73-J7T3Uh6ohLzHZy7b41r3cdf-KhJ7f3h5dr22x7y0MqYDLjEV3wAzYJ-HUdtymEBZKRyITT8X4aZVl7fYIriL3vN4JQD5Lb6H-rogol5LmWKtjMXZ4RSqlNUY7on1NcAMb00kkuXiu0HIEfKR0ZNGk',
    bgColor: 'bg-electric-blue',
    labelBg: 'bg-stark-white',
    labelColor: 'text-deep-black'
  }
];
