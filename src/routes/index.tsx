import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <article className="intro">
        <h1>Yor Qat</h1>
        <p>
          Design <span>elegant</span> facets and <span>sell</span>.
        </p>
      </article>
      <div className="projects"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Yor Qat",
  meta: [
    { name: "description", content: "Yor favorite web designer" },
    { name: "keywords", content: "javascript, web, design, developer" },
    { name: "author", content: "Yor Qat" },
  ],
};
