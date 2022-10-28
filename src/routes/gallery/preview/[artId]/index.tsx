import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
import styles from "./gallery.scss";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();
  const link = useStore<{ src: string | null; caption: string | null }>({
    src: null,
    caption: null,
  });

  useClientEffect$(async () => {
    await fetch(`/gallery/image?id=${loc.params.artId}`).then(async (res) => {
      const json = await res.json();
      link.src = json.media_url;
      link.caption = json.caption;
    });
  });

  return (
    <>
      {link.src && (
        <section className="gallery-overlay">
          <button
            onClick$={() => {
              window.history.back();
            }}
          ></button>
          <img className="gallery-overlay__img" src={link.src} alt="" />
          {link.caption && (
            <h2 className="gallery-overlay__title">{link.caption}</h2>
          )}
        </section>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Yor Preview",
  meta: [
    { name: "description", content: "An image preview" },
    { name: "keywords", content: "art, drawing, digital, traditional" },
    { name: "author", content: "Yor Qat" },
  ],
};
