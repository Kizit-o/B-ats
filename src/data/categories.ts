import type { Category } from '../types';
import { tokens } from '../tokens/tokens';

export const categories: Category[] = [
  {
    id:    'earphone',
    label: 'Enjoy With',
    name:  'EARPHONE',
    bg:    tokens.category.earphone.bg,
    text:  tokens.category.earphone.text,
  },
  {
    id:    'wearable',
    label: 'Latest',
    name:  'SMARTWATCH',
    bg:    tokens.category.wearable.bg,
    text:  tokens.category.wearable.text,
  },
  {
    id:    'devices',
    label: 'Best',
    name:  'LAPTOP',
    bg:    tokens.category.devices.bg,
    text:  tokens.category.devices.text,
  },
  {
    id:    'gaming',
    label: 'Best Gaming',
    name:  'CONSOLE',
    bg:    tokens.category.gaming.bg,
    text:  tokens.category.gaming.text,
  },
  {
    id:    'oculus',
    label: 'Play Game',
    name:  'OCULUS VR',
    bg:    tokens.category.oculus.bg,
    text:  tokens.category.oculus.text,
  },
  {
    id:    'speaker',
    label: 'Deep Bass',
    name:  'SPEAKER',
    bg:    tokens.category.speaker.bg,
    text:  tokens.category.speaker.text,
  },
];