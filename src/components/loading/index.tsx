import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./loading.scss";

export default component$(() => {
  useStylesScoped$(styles);
  
  return (
    <div className="loading">
      <div className="loading__el1"></div>
      <div className="loading__el2"></div>
      <div className="loading__el3"></div>
      <div className="loading__el4"></div>
    </div>
  );
});
