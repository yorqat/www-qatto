import {
  component$,
  useClientEffect$,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./gallery.scss";

export default component$(() => {
  useStylesScoped$(styles);
  const loc = useLocation();
  const link = useStore<{ src: string | null }>({ src: null });

  useClientEffect$(async () => {
    await fetch(`/gallery/image?id=${loc.params.artId}`).then(async (res) => {
      const json = await res.json();
      link.src = json.media_url;
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
          <h2 className="gallery-overlay__title">{loc.params.artId}</h2>
        </section>
      )}
    </>
  );
});
