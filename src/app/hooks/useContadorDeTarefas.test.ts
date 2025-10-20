import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "./useContadorDeTarefas";

test("Retorna o número de tarefas adicionadas", () => {
  const tarefas = [
    { id: 1, tarefa: "Tarefa 1" },
    { id: 2, tarefa: "Tarefa 2" },
    { id: 3, tarefa: "Tarefa 3" },
  ];

  const { result } = renderHook(() => useContadorDeTarefas(tarefas));

  expect(result.current.totalTarefas).toBe(3);
  expect(result.current.contador).toBe("Total de tarefas:");
});
