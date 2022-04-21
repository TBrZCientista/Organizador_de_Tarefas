import { removeDatasRepetidas } from "../service/data.js"
import { criaData } from "./criaData.js"

export const carregaTarefa = ( ) => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "    
    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    datasUnicas.forEach((dia) => {
        const diff = data.diff(dia)

        if (diff == 0){
            lista.appendChild(criaData(dia))
        }
    })
}