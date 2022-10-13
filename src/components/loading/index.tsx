import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div className="loading">
      <div className="loading__el1"></div>
      <div className="loading__el2"></div>
      <div className="loading__el3"></div>
      <div className="loading__el4"></div>
    </div>
  );
});
