import * as svelte from 'svelte/compiler';
import * as fs from 'fs';
import * as path from 'path';

const appSveltePath = path.join('.', "src", "App.svelte")

const result = svelte.compile(fs.readFileSync(appSveltePath, "utf8"), {
  customElement: true,
});

fs.writeFileSync(path.join('.', "App.js"), result.js.code)