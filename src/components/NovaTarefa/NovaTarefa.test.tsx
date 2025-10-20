import { renderHook, act } from "@testing-library/react";
import { useTarefas } from "@/app/hooks/useTarefas";

test("Adiciona uma tarefa corretamente", async () => {
  const { result } = renderHook(() => useTarefas());

  // Inicialmente deve estar vazio
  expect(result.current.tarefas).toEqual([]);

  // Adiciona uma nova tarefa
  await act(async () => {
    await result.current.adicionarTarefa({ tarefa: "Aprender Jest" });
  });

  // Verifica se foi adicionada
  expect(result.current.tarefas).toContainEqual(
    expect.objectContaining({ tarefa: "Aprender Jest" })
  );
});
