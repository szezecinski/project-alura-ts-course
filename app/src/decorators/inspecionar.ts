export function inspecionar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const original = descriptor.value
    descriptor.value = function(...args: any[]){
        console.log(`---Método: ${propertyKey}`)
        console.log(`-----Parâmetros: ${JSON.stringify(args)}`)
        const result = original.apply(this, args)
        console.log(`-----Retorno: ${JSON.stringify(result)}`)
        return result
    }


    return descriptor
}