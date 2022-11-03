export function escapar(target, propertyKey, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        let result = original.apply(this, args);
        if (typeof result === 'string') {
            result = result
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return result;
    };
    return descriptor;
}
