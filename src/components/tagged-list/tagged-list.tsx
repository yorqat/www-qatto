import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./tagged-list.scss?inline";

export default component$((props: { title: string; flags: string[] }) => {
  useStylesScoped$(styles);

  return (
    <>
      <h1>{props.title}</h1>
      <div className="tag-list">
        {props.flags.map((f) => {
          return (
            <label className="tag-list__item">
              <input type="checkbox" className="tag-list__item__in" />
              <span>{f}</span>
            </label>
          );
        })}
      </div>
      <hr />
    </>
  );
});
