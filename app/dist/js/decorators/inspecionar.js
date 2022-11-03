export function inspecionar(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`---Método: ${propertyKey}`);
        console.log(`-----Parâmetros: ${JSON.stringify(args)}`);
        const result = original.apply(this, args);
        console.log(`-----Retorno: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=inspecionar.js.map