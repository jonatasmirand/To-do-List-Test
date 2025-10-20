"use client";

import { useState } from "react";
import type { NovaTarefa } from "@/type/tarefa";
import styles from "./NovaTarefa.module.css";

type Props = {
  aoEnviar: (tarefa: NovaTarefa) => void;
};

const NovaTarefa = ({ aoEnviar }: Props) => {
  const [tarefa, setTarefa] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (tarefa.trim() === "") {
      setErro("Digite uma tarefa antes de adicionar!");
      return;
    }

    setErro("");
    aoEnviar({ tarefa });
    setTarefa("");
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite uma nova Tarefa "
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />

        <button className={styles.button} type="submit">
          Adicionar
        </button>
      </form>

      {erro && <p className={styles.erro}>{erro}</p>}
    </>
  );
};

export default NovaTarefa;
