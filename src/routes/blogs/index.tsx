import { component$, useStylesScoped$ } from "@builder.io/qwik";
// it breaks preview when inlined
import TaggedList from "~/components/tagged-list/tagged-list";
import { Card } from "./mad-cloud/index";
import styles from "./blogs.scss";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <TaggedList
        title={"Blogs"}
        flags={["devlogs", "courtesy", "non-coding"]}
      ></TaggedList>
      <article className="blog-container">
        <Card />
      </article>
    </>
  );
});
