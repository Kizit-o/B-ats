import type { Product } from '../types';
import { assetUrl } from '../utils/asset';

/*
  Each image path maps to a file in public/assets/images/products/.
  Vite serves the public/ folder at root, so the path in code
  is /assets/images/products/{filename} — no "public/" prefix.

  Image → product content matching:
    airpods.jpg   → wireless earbuds   → AirPods Pro
    beats.jpg     → over-ear cans      → Beats Studio Pro
    console.jpg   → gaming console     → PlayStation 5
    elitebook.jpg → laptop/device      → HP EliteBook 840 G9
    jbl.jpg       → portable speaker   → JBL Xtreme 3
    JBL2.jpg      → compact speaker    → JBL Charge 5
    smartwatch.jpg→ wrist wearable     → Samsung Galaxy Watch 6
    VR.jpg        → headset            → Meta Quest 3
*/

export const products: Product[] = [
  {
    id:       'p1',
    name:     'AirPods Pro 2nd Gen',
    price:    249,
    image:    assetUrl('assets/images/products/airpod.jpg'),
    category: 'earphones',
  },
  {
    id:       'p2',
    name:     'Beats Studio Pro',
    price:    349,
    image:    assetUrl('assets/images/products/beats.jpg'),
    category: 'headphones',
  },
  {
    id:       'p3',
    name:     'PlayStation 5 Console',
    price:    499,
    image:    assetUrl('assets/images/products/console2.jpg'),
    category: 'gaming',
  },
  {
    id:        'p4',
    name:      'HP EliteBook 840 G9',
    price:     1299,
    salePrice: 1599,
    image:     assetUrl('assets/images/products/macbook.jpg'),
    category:  'devices',
    isSale:    true,
  },
  {
    id:       'p5',
    name:     'JBL Xtreme 3',
    price:    329,
    image:    assetUrl('assets/images/products/jbl.jpg'),
    category: 'speakers',
  },
  {
    id:       'p6',
    name:     'JBL Charge 5',
    price:    179,
    image:    assetUrl('assets/images/products/JBL2.jpg'),
    category: 'speakers',
  },
  {
    id:        'p7',
    name:      'Samsung Galaxy Watch 6',
    price:     279,
    salePrice: 349,
    image:     assetUrl('assets/images/products/smartwatch.jpg'),
    category:  'wearables',
    isSale:    true,
  },
  {
    id:       'p8',
    name:     'Meta Quest 3 VR',
    price:    499,
    image:    assetUrl('assets/images/products/VR.jpg'),
    category: 'gaming',
    isNew:    true,
  },
];