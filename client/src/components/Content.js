import { useEffect, useState } from "react";
import styles from "./Content.module.css";

function Content() {
  const [content, setContent] = useState("");
  useEffect(() => setContent(`dfasfsadfdasfdsa`), []);
  return <h1>{content}</h1>;
}

export default Content;
