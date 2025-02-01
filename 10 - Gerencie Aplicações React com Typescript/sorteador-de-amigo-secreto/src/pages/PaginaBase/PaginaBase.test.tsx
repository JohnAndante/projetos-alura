import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import PaginaBase from './PaginaBase';

const mockNavegacao = jest.fn();

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao,
    };
});

describe('Testes do componente PaginaBase', () => {

    test('A página deve ser renderizada corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <PaginaBase />
            </RecoilRoot>
        )

        expect(container).toMatchSnapshot();
    });

});
