import styles from "./ToolBar.module.css";
import Chart from "../images/Chart.svg";
import Circle from "../images/Circle.svg";
import Trash from "../images/Trash.svg";

function ToolBar({ deleteAllHandler , setContext, getData}) {
  const deleteAll = () => {
    deleteAllHandler();
  };
  const inputChangeHandler = (e) => {
    console.log(e.target.value)
    setContext(e.target.value)
  }
  const chartClickHandler = () => {
    getData()
  }

  return (
    <div className={styles.toolbar}>
      <input
        type="text"
        placeholder="Context: ex. I am making a course called how to learn how to skydive."
        onChange={inputChangeHandler}
      />
      <div className={styles.tools}>
        <img
          alt="chart_icon"
          src={Chart}
          className={styles.chart}
          width="38px"
          onClick={chartClickHandler}
        />
        {/* <img alt="circle_icon" src={Circle} width="38px" />
        <input type="checkbox" checked={false} /> */}
        <img
          alt="trash_icon"
          src={Trash}
          width="38px"
          className={styles.trash}
          onClick={deleteAll}
        />
      </div>
    </div>
  );
}

export default ToolBar;
