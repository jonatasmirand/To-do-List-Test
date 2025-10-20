import styles from "./InputEditar.module.css";

interface InputEditarProps {
  valor: string;
  aoAlterar: (valor: string) => void;
}

export default function InputEditar({ valor, aoAlterar }: InputEditarProps) {
  return (
    <input
      type="text"
      value={valor}
      onChange={(e) => aoAlterar(e.target.value)}
      className={styles.inputEditar}
    />
  );
}
