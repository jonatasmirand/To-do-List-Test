import styles from "./BotoesTarefa.module.css";

interface BotoesTarefaProps {
  editando: boolean;
  aoSalvar?: () => void;
  aoCancelar?: () => void;
  aoEditar?: () => void;
  aoRemover?: () => void;
}

export default function BotoesTarefa({
  editando,
  aoSalvar,
  aoCancelar,
  aoEditar,
  aoRemover,
}: BotoesTarefaProps) {
  return (
    <div className={styles.botoes}>
      {editando ? (
        <>
          <button className={styles.btnSalvar} onClick={aoSalvar}>
            💾
          </button>
          <button className={styles.btnCancelar} onClick={aoCancelar}>
            ❌
          </button>
        </>
      ) : (
        <>
          <button className={styles.btnEditar} onClick={aoEditar}>
            ✎
          </button>
          <button className={styles.btnRemover} onClick={aoRemover}>
            🗑️
          </button>
        </>
      )}
    </div>
  );
}
