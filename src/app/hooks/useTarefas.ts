import { useEffect, useState } from "react";
import type { NovaTarefa, Tarefa } from "@/type/tarefa";

let tarefasFake: Tarefa[] = [];

export function useTarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);

    useEffect(() => {
        const armazenadas = localStorage.getItem('tarefas');
        if (armazenadas) {
            setTarefas(JSON.parse(armazenadas));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tarefas", JSON.stringify(tarefas));
    }, [tarefas]);

    const gerarIdUnico = () => {
        return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
    };

    const adicionarTarefa = (dados: NovaTarefa) => {
        const nova: Tarefa = {
            id: Number(gerarIdUnico().replace(/\D/g, "").slice(0, 13)),
            tarefa: dados.tarefa,
        };

        tarefasFake = [...tarefasFake, nova];
        setTarefas((prev) => [...prev, nova]);
    };

    const removerTarefa = (id: number) => {
        tarefasFake = tarefasFake.filter((t) => t.id !== id);
        setTarefas((prev) => prev.filter((t) => t.id !== id));
    };

    const editarTarefa = (id: number, novaTarefa: string) => {
        tarefasFake = tarefasFake.map((t) =>
            t.id === id ? { ...t, tarefa: novaTarefa } : t
        );
        setTarefas((prev) =>
            prev.map((t) => (t.id === id ? { ...t, tarefa: novaTarefa } : t))
        );
    };

    const limparTarefas = () => {
        localStorage.removeItem("tarefas");
        setTarefas([]);
    };


    return { tarefas, adicionarTarefa, removerTarefa, editarTarefa, limparTarefas };
}