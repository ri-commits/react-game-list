import { ReactNode } from "react";
import styles from "./Alert.module.css";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className={styles.alert}>
      {children}
      <button
        type="button"
        className={styles.btnClose}
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        x
      </button>
    </div>
  );
};

export default Alert;
