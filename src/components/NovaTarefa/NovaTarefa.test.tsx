import { renderHook, act } from "@testing-library/react";
import { useTarefas } from "@/app/hooks/useTarefas";


jest.mock("./index")

test('Retorna a tarefa adicionada', async () => {

    const { result } = renderHook(() => useTarefas());

    await act(async () => { });

    expect(result.current.tarefas).toEqual([
        { id: 1, tarefa: "Estudar React" },
        { id: 2, tarefa: "Ler sobre TypeScript" },
    ]);

    await act(async () => {
        await result.current.adicionarTarefa({ tarefa: "Aprender Jest" });
    });

    expect(result.current.tarefas).toContainEqual(
        expect.objectContaining({ tarefa: "Aprender Jest" })
    );
});

