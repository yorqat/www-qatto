import { component$, useStylesScoped$ } from "@builder.io/qwik";
// it breaks preview when inlined
import styles from "./blogs.scss";
import TaggedList from "~/components/tagged-list/tagged-list";

export default component$(() => {
  // useStylesScoped$(styles);

  return (
    <>
      <TaggedList
        title={"Blogs"}
        flags={["devlogs", "courtesy", "non-coding"]}
      ></TaggedList>
    </>
  );
});
