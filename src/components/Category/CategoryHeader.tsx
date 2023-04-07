import styles from "./PhotoCategory.module.css";

function CategoryHeader() {
  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.h1}>Popular Searches</h1>
        <h3 className={styles.h3}>The most popular search terms on FotoPie</h3>
      </div>
    </>
  );
}

export default CategoryHeader;
