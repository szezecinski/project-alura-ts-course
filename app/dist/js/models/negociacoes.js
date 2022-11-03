export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adicionar(negociacao) {
        this.negociacoes.push(negociacao);
    }
    listar() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(obj) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(obj.listar());
    }
}
//# sourceMappingURL=negociacoes.js.map