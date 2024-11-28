import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.friendListItem} key={friend.id}>
          <FriendListItem {...friend} />
        </li>
      ))}
    </ul>
  );
}
