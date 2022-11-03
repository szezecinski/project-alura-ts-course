export function logarTempoDeExecucao(emSegundos: boolean=false) {
    return function(
        target: any, 
        nomeDoMetodo: string,
        metodo: PropertyDescriptor){
            
            const metodoOriginal = metodo.value
            metodo.value = function(...args: any[]){
                let divisior = 1
                let unidade = 'ms'

                if(emSegundos){
                    divisior = 1000
                    unidade = 's'
                }

                const t1 = performance.now()
                const result = metodoOriginal.apply(this, args)
                const t2 = performance.now()
                console.log(`Método '${nomeDoMetodo}', tempo de execução: ${(t2-t1)/divisior}${unidade}`)
                result
            }

            return metodo
        }
}