import styles from "./ToolBar.module.css";
import Chart from "../images/Chart.svg";
import Circle from "../images/circle_left.svg";
import Trash from "../images/Trash_duotone_line.svg";

function ToolBar() {
  return (
    <div className={styles.toolbar}>
      <input
        type="text"
        placeholder="Context: ex. I am making a course called how to learn how to skydive."
      />
      <div className={styles.tools}>
        <img src={Chart} className={styles.chart} width="38px" />
        <img src={Circle} width="38px" />
        <input type="checkbox" />
        <img src={Trash} width="38px" className={styles.trash} />
      </div>
    </div>
  );
}

export default ToolBar;
