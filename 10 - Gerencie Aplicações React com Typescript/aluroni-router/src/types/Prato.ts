import cardapio from 'data/cardapio.json';

export type Cardapio = typeof cardapio;

export type Prato = Cardapio[0];
