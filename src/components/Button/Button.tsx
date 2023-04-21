import styled from "styled-components";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const But = styled.button`
  background: navy;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
`;

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <>
      <But type="button" onClick={onClick}>
        {children}
      </But>
      <button
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
