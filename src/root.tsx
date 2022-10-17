import {
  component$,
  createContext,
  useContext,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import {
  QwikCity,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

interface ThemesStore {
  dark: boolean;
}

export const Theming = createContext<ThemesStore>("UniqueTheme");

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCity> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  /// set theme
  useContextProvider(
    Theming,
    useStore<ThemesStore>({
      dark: false,
    })
  );

  const Body = component$(() => {
    const theme = useContext(Theming);

    return (
      <body lang="en" className={theme.dark ? "theme-dark" : "theme-light"}>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    );
  });

  return (
    <QwikCity>
      <head>
        <meta charSet="utf-8" />
        <RouterHead />
      </head>
      <Body />
    </QwikCity>
  );
});