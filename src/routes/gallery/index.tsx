import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import styles from "./gallery.scss";
import TaggedList from "~/components/tagged-list/tagged-list";

interface Art {
  id: string;
  caption: string;
  media_url: string;
}

export default component$(() => {
  useStylesScoped$(styles);
  const gallery = useStore<{ art: Art[]; active_art: Art | null }>({
    art: [],
    active_art: null,
  });

  useClientEffect$(async () => {
    await fetch("/gallery/images").then(
      async (res) => (gallery.art = (await res.json()).data)
    );
  });

  return (
    <>
      {gallery.active_art && (
        <section className="gallery-overlay">
          <button onClick$={() => (gallery.active_art = null)}></button>
          <img
            className="gallery-overlay__img"
            src={gallery.active_art.media_url}
            alt=""
          />
          <h2 className="gallery-overlay__title">
            {gallery.active_art.caption}
          </h2>
        </section>
      )}
      {!gallery.active_art && (
        <>
          <TaggedList
            title="Gallery"
            flags={["art", "assets", "design", "music"]}
          />
          <br></br>
          <hr></hr>
          <section className="gallery">
            {gallery.art.map((dat) => {
              return (
                <a
                  preventDefault:click
                  onClick$={() => (gallery.active_art = dat)}
                  key={dat.id}
                >
                  <img
                    id={`#${dat.caption.split(" ").join("-")}`}
                    className="gallery__item"
                    src={dat.media_url}
                  />
                  {/* <p className="caption">{dat.caption}</p> */}
                </a>
              );
            })}
          </section>
        </>
      )}
      {/* {gallery.active_art && (
        <section className="gallery-overlay">
          <h2 className="gallery-overlay__title">
            {gallery.active_art.caption}
            <button onClick$={() => (gallery.active_art = null)}></button>
          </h2>
          <img
            className="gallery-overlay__img"
            src={gallery.active_art.media_url}
            alt=""
          />
        </section>
      )} */}
    </>
  );
});
