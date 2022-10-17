import { component$ } from "@builder.io/qwik";
// it breaks preview when inlined
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
