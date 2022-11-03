export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const original = descriptor.value
    descriptor.value = function(...args: any[]){
        let result = original.apply(this, args)
        
        if(typeof result === 'string'){
            // console.log(`Called replace for class ${this.constructor.name} and method ${propertyKey}.`)
            result = result
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        
        return result
    }

    return descriptor
}