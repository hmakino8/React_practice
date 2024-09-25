import styles from "./styles/ModalItemTimestamp.module.css";

export const ModalItemTimestamp = ({ lastUpdated, dateCreated }) => (
  <>
    {dateCreated && (
      <div className={styles.timestanp}>{`作成日　：${formatDate(
        dateCreated
      )}`}</div>
    )}
    {lastUpdated && (
      <div className={styles.timestanp}>{`最終更新：${formatDate(
        lastUpdated
      )}`}</div>
    )}
  </>
);

const formatDate = (date) => {
  const formatter = (value) => value.toString().padStart(2, "0");

  const year = date.getFullYear();
  const month = formatter(date.getMonth() + 1);
  const day = formatter(date.getDate());
  const hours = formatter(date.getHours());
  const minutes = formatter(date.getMinutes());
  const seconds = formatter(date.getSeconds());

  return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};
