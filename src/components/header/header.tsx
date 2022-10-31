import { component$, useStyles$, useContext } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { Theming } from "~/root";
import styles from "./header.scss?inline";

export default component$(() => {
  useStyles$(styles);

  const loc = useLocation();
  const theme = useContext(Theming);

  const LinkNav = component$((props: { path: string; name: string }) => {
    const link = "/" + props.path;

    return (
      <Link
        href={link}
        className={
          loc.pathname.substring(link.length, -1) == link ? "active-path" : ""
        }
      >
        {props.name}
      </Link>
    );
  });

  return (
    <header>
      <div class="logo">
        <Link href="/">
          <img loading="lazy" src="/favicon.ico" alt="Yor Qat site logo" />
        </Link>
      </div>
      <label
        className={
          !theme.dark
            ? "theme-switcher"
            : "theme-switcher theme-switcher--light"
        }
      >
        <input
          onClick$={() => {
            theme.dark = !theme.dark;
            localStorage.setItem(
              "prefers-color-scheme",
              theme.dark ? "dark" : "light"
            );
          }}
          type="checkbox"
          class="theme-switcher__checkbox"
        />
      </label>
      <nav>
        <LinkNav path="gallery" name="Gallery" />
        <LinkNav path="blogs" name="Blogs" />
        <LinkNav path="hire-now" name="Hire now" />
      </nav>
    </header>
  );
});
