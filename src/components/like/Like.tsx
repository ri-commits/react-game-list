import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import styles from "./Like.module.css";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return <AiOutlineHeart size="30" color="#ff6b81" onClick={toggle} />;
  return <AiFillHeart size="30" color="#ff6b81" onClick={toggle} />;
};

export default Like;
