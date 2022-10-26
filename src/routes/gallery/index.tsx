import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import styles from "./gallery.scss";
import TaggedList from "~/components/tagged-list/tagged-list";
import { Link } from "@builder.io/qwik-city";

interface Art {
  id: string;
  caption: string;
  media_url: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const gallery = useStore<{ art: Art[] }>({
    art: [],
  });

  useClientEffect$(async () => {
    await fetch("/gallery/images").then(
      async (res) => (gallery.art = (await res.json()).data)
    );
  });

  return (
    <>
      <TaggedList
        title="Gallery"
        flags={["art", "assets", "design", "music"]}
      />
      <section className="gallery">
        {gallery.art.map((dat) => {
          return (
            <Link
              preventdefault:click
              key={dat.id}
              href={`/gallery/preview/${dat.id}`}
            >
              <img
                id={`#${dat.caption.split(" ").join("-")}`}
                className="gallery__item"
                src={dat.media_url}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
});
