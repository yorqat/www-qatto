import { component$, useStylesScoped$ } from "@builder.io/qwik";
import mad_icon from "./launcher.png";
import mad_screenshot from "./screenshot-001.png";
import styles from "./mad-cloud.scss";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <>
      <img
        className="app-icon"
        src={mad_icon}
        alt="logo of the mad clowd app"
      />
      <h1>Mad Clowd</h1>
      <p className="app-available">
        Available for platforms:{" "}
        <button type="button" className="app-available__platform">
          ⤓ apk
        </button>
      </p>
      <p className="app-description">
        Mad Clowd is a open source, ad-free, cross platform app for file syncing
        released for free in GPLv2 sofware license
      </p>
      <img src={mad_screenshot} alt="" />
    </>
  );
});

export const Card = component$(() => {
  useStylesScoped$(styles);

  return (
    <Link href="blogs/mad-cloud">
      <section className="app-card">
        <img
          className="app-card__thumbnail"
          src={mad_icon}
          alt="logo of the mad clowd app"
        />
        <h2>Mad Clowd</h2>
        <p className="app-card__description">Preface info and usage</p>
      </section>
    </Link>
  );
});

export const head: DocumentHead = {
  title: "Mad Clowd App",
};