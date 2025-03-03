import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes do carrinho', () => {

    it('Deve inicializar vazio', () => {
        const carrinho = new Carrinho();

        expect(carrinho.subtotal).toBe(0);
    });

    it('Deve ter itens', () => {
        const carrinho = new Carrinho();
        const item = new Item('Caxi', 9.5, 3);
        const item2 = new Item('Caju', 5, 2);

        carrinho.adiciona(item);
        carrinho.adiciona(item2);

        expect(typeof carrinho).toBe('object');

        expect(carrinho.itens[0]).toBe(item);
        expect(carrinho.itens[1]).toBe(item2);

        expect(carrinho.itens).toContain(item);
        expect(carrinho.itens).toContain(item2);
    });

    it('Deve ter a propriedade "total" na inicialização', () => {
        const carrinho = new Carrinho();

        expect(carrinho.total).toBe(0);
    });

    it('Deve lançar erro ao finalizar compra com o carrinho vazio', () => {
        const carrinho = new Carrinho();

        expect(() => carrinho.finalizaCompra()).toThrowError('Carrinho de compras vazio');
    });

    it('Deve adicionar o frete', () => {
        const carrinho = new Carrinho();

        carrinho.adicionaFrete(10);

        expect(carrinho.frete).toBe(10);
    });

    it('Deve finalizar as compras', () => {
        const carrinho = new Carrinho();
        const item = new Item('Caxi', 9.5, 3);
        const item2 = new Item('Caju', 5, 2);

        carrinho.adiciona(item);
        carrinho.adiciona(item2);
        carrinho.adicionaFrete(10);

        expect(carrinho.finalizaCompra()).toEqual({
            subtotal: 38.5,
            frete: 10,
            total: 48.5,
        });
    });
});
