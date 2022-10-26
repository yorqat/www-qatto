import { component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Theming } from "~/root";
import styles from "./hire-now.scss?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const theme = useContext(Theming);

  return (
    <>
      <script>function handleThingy(token) {}</script>
      <script
        src="https://www.google.com/recaptcha/api.js"
        async
        defer
      ></script>
      <h1>Hire Now</h1>
      <p>Let's reach a dialogue</p>
      <textarea name="" id="msg-me" rows={4}></textarea>
      <br />
      <div
        class="g-recaptcha"
        data-theme={theme.dark ? "dark" : "light"}
        data-sitekey="6LcTyl8iAAAAAFNjM7hg2x4NrMVnA-X5E024t92V"
      ></div>
      <br />
      <input type="submit" value="Send" />
    </>
  );
});

export const head: DocumentHead = {
  title: "Yor Commission",
};