import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./chevron.scss";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <div className="chevron chevron--animated">
      <div className="chevron--parallelogram"></div>
      <div className="chevron--parallelogram"></div>
    </div>
  );
});
