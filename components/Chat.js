import styles from "./Chat.module.scss";

export default function Chat(props) {
  return (
    <li
      className={
        props.sender == "user"
          ? styles["chat-bubble--user"]
          : styles["chat-bubble"]
      }
    >
      {props.message}
    </li>
  );
}
