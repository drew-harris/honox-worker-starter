import { createRoute } from "honox/factory";
import Counter from "../islands/counter";

export default createRoute(async (c) => {
  return c.render(
    <div class="mt-48 max-w-md mx-auto border border-black p-4">
      <Counter />
      <hr class="border-[0.5px] border-gray-100 my-4" />
      <h1 class="bg-blue-200 px-2">Hello, Drew! Tailwind is working!</h1>
    </div>
  );
});
