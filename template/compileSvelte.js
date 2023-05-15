import * as svelte from 'svelte/compiler';
import * as fs from 'fs';

export default (config) => {
  const result = svelte.compile(fs.readFileSync(config.input, "utf8"), {
    customElement: true,
  });

  fs.writeFileSync(config.svelteOutput, result.js.code)
}