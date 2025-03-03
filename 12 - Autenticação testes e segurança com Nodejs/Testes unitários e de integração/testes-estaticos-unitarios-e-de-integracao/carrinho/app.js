import Carrinho from './carrinho.js';
import Item from './item.js';

const carrinho = new Carrinho();

carrinho.adiciona(new Item('Maçã', 1, 3));
carrinho.adiciona(new Item('Banana', 2, 2));
carrinho.adiciona(new Item('Pera', 3, 1));
carrinho.adiciona(new Item('Uva', 4, 4));
carrinho.adiciona(new Item('Manga', 5, 5));

carrinho.adicionaFrete(15);

carrinho.calculaSubtotal();

carrinho.finalizaCompra();

console.log(carrinho);
