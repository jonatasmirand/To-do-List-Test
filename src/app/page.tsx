"use client";

import NovaTarefa from "@/components/NovaTarefa";
import { useTarefas } from "./hooks/useTarefas";
import { useContadorDeTarefas } from "./hooks/useContadorDeTarefas";
import styles from './page.module.css'
import Title from "@/components/Title";

export default function Home() {
  const { tarefas, adicionarTarefa, removerTarefa } = useTarefas();
  const { totalTarefas, contador } = useContadorDeTarefas(tarefas);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Title title="To-do-List"/>

        <div className={styles.section}>
          <NovaTarefa aoEnviar={adicionarTarefa} />
        </div>

        <ul className={styles.lista}>
          {tarefas.map((t) => (
            <li key={t.id} className={styles.tarefa}>
              {t.tarefa}
              <button className={styles.btnRemover} onClick={() => removerTarefa(t.id)}>🗑️</button>
            </li>
          ))}
        </ul>

        <p>{contador} {totalTarefas}</p>
      </div>
    </div>
  );
}