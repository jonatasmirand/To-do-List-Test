"use client";

import { useState } from "react";
import NovaTarefa from "@/components/NovaTarefa";
import InputEditar from "@/components/InputEditar/InputEditar";
import BotoesTarefa from "@/components/BotoesTarefa/BotoesTarefa";
import { useTarefas } from "./hooks/useTarefas";
import { useContadorDeTarefas } from "./hooks/useContadorDeTarefas";
import Title from "@/components/Title";
import styles from "./page.module.css";

export default function Home() {
  const { tarefas, adicionarTarefa, removerTarefa, editarTarefa, limparTarefas } = useTarefas();
  const { totalTarefas, contador } = useContadorDeTarefas(tarefas);

  const [editandoId, setEditandoId] = useState<number | null>(null);
  const [novoTexto, setNovoTexto] = useState("");

  const handleSalvar = (id: number) => {
    editarTarefa(id, novoTexto);
    setEditandoId(null);
    setNovoTexto("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Title title="Lista de Tarefas" />

        <div className={styles.section}>
          <NovaTarefa aoEnviar={adicionarTarefa} />
        </div>

        <ul className={styles.lista}>
          {tarefas.map((t) => (
            <li key={t.id} className={styles.tarefa}>
              <div className={styles.tarefaConteudo}>
                {editandoId === t.id ? (
                  <InputEditar valor={novoTexto} aoAlterar={setNovoTexto} />
                ) : (
                  <span>{t.tarefa}</span>
                )}
              </div>

              <BotoesTarefa
                editando={editandoId === t.id}
                aoSalvar={() => handleSalvar(t.id)}
                aoCancelar={() => {
                  setEditandoId(null);
                  setNovoTexto("");
                }}
                aoEditar={() => {
                  setEditandoId(t.id);
                  setNovoTexto(t.tarefa);
                }}
                aoRemover={() => removerTarefa(t.id)}
              />
            </li>
          ))}
        </ul>

        {tarefas.length > 0 && (
          <button className={styles.btnLimpar} onClick={limparTarefas}>
            🧹 Limpar tudo
          </button>
        )}

        <p>
          {contador} {totalTarefas}
        </p>
      </div>
    </div>
  );
}