import { useEffect, useState } from "react";
import type { NovaTarefa, Tarefa } from "@/type/tarefa";

let tarefasFake: Tarefa[] = [
    { id: 1, tarefa: "Estudar React" },
    { id: 2, tarefa: "Ler sobre TypeScript" },
];

export function useTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    const carregarTarefas = () => {
        return Promise.resolve(tarefasFake).then((dados) => setTarefas(dados));
    };

    const adicionarTarefa = (dados: NovaTarefa) => {
        const nova: Tarefa = {
            id: Date.now() + Math.floor(Math.random() * 1000),
            tarefa: dados.tarefa,
        };
        tarefasFake.push(nova);

        return Promise.resolve(nova).then(() =>
            setTarefas((prev) => [...prev, nova])
        );
    };

    const removerTarefa = (id: number) => {
        tarefasFake = tarefasFake.filter((t) => t.id !== id);

        return Promise.resolve().then(() =>
            setTarefas((prev) => prev.filter((t) => t.id !== id))
        );
    };

    useEffect(() => {
        carregarTarefas();
    }, []);


    return { tarefas, adicionarTarefa, removerTarefa };
}