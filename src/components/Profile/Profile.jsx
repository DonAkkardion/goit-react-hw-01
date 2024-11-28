import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.card}>
      <div>
        <img className={css.cardImage} src={image} alt="User avatar" />
        <p className={css.cardName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}l</p>
      </div>
      <ul className={css.socialList}>
        <li className={css.socialItem}>
          <span>Followers</span>
          <span className={css.socialItemNumber}>{stats.followers}</span>
        </li>
        <li className={css.socialItem}>
          <span>Views</span>
          <span className={css.socialItemNumber}>{stats.views}</span>
        </li>
        <li className={css.socialItem}>
          <span>Likes</span>
          <span className={css.socialItemNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
