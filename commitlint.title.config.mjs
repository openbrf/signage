// The rules for a pull request title. A title lands as the squash commit, so
// commitlint's default ignores (`v0.1.0`, `Revert ...`, `Merge ...`) must not
// excuse it. Commits keep the default ignores in commitlint.config.mjs, so
// git's own merge message still passes.
import base from "./commitlint.config.mjs";

export default { ...base, defaultIgnores: false };
