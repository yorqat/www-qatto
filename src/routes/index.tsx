import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Chevron from "../components/chevron/chevron";

export default component$(() => {
  return (
    <>
      <article className="intro">
        <h1>
          Yor Qat
          <Chevron />
        </h1>
        <p>
          Design <span>elegant</span> facets and <span>sell</span>.
        </p>
      </article>
      <article className="projects"></article>
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
