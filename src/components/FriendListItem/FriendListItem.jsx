import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const classNames = [styles["online-text"]];
  if (isOnline) {
    classNames.push(styles["is-active"]);
  }

  return (
    <div>
      <img
        className={styles.friendImage}
        src={avatar}
        alt="Avatar"
        width="48"
      />
      <p className={styles.friendName}>{name}</p>
      <p className={classNames.join(" ")}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
