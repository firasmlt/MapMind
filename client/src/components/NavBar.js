import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <a href="/">
        <h2 className="logo">MapMind</h2>
      </a>
      <p>Logout</p>
    </div>
  );
}

export default NavBar;
