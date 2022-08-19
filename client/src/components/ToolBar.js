import styles from "./ToolBar.module.css";
import Chart from "../images/Chart.svg";
import Circle from "../images/circle_left.svg";
import Trash from "../images/Trash_duotone_line.svg";

function ToolBar() {
  return (
    <div className={styles.toolbar}>
      <input type="text" />
      <div className={styles.tools}>
        <img src={Chart} width="38px" />
        <img src={Circle} width="38px" />
        <input type="checkbox" />
        <img src={Trash} width="38px" />
      </div>
    </div>
  );
}

export default ToolBar;
