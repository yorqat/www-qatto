import {
  component$,
  useStylesScoped$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import styles from "./gallery.scss";
import TaggedList from "~/components/tagged-list/tagged-list";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import Loading from "~/components/loading";

export interface Art {
  id: string;
  caption: string;
  media_url: string;
}

export default component$(() => {
  useStylesScoped$(styles);

  const gallery = useStore<{ art: Art[] }>({ art: [] });

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
      {gallery.art.length === 0 && <Loading />}
      <section className="gallery">
        {gallery.art.map((dat) => {
          return (
            <Link
              preventdefault:click
              id={dat.id}
              key={dat.id}
              href={`/gallery/preview/${dat.id}`}
            >
              <img
                loading="lazy"
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

export const head: DocumentHead = {
  title: "Yor Gallery",
  meta: [
    {
      name: "description",
      content: "Yor's proud works in all fields of art and design",
    },
    { name: "keywords", content: "art, drawing, digital, traditional" },
    { name: "author", content: "Yor Qat" },
  ],
};
