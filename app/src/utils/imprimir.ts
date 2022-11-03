import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objects: Imprimivel[]) {
    objects.forEach(x =>{
        console.log(x.paraTexto())
    })
}