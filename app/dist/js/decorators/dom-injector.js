export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando o prototype ${target.constructor.name}
            e adicionando getter para a propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                console.log('Indo no DOM pegar o elemento e criando um getter');
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map