import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

export class Negociacoes implements Modelo<Negociacoes>{
    
    private negociacoes: Negociacao[] = [];

    public adicionar(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public listar(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public ehIgual(obj: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(obj.listar())
    }
}
