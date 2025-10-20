import type { Tarefa } from "@/type/tarefa";
import { useMemo } from "react";

export function useContadorDeTarefas(tarefas: Tarefa[]) {
  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  const contador = useMemo(() => {
    if (totalTarefas === 0) return "Tarefas adicionadas:";
    if (totalTarefas === 1) return "Total de tarefas:";
    return `Total de tarefas:`;
  }, [totalTarefas]);

  return { totalTarefas, contador };
}
