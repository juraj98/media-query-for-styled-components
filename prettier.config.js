// Some settings automatically inherited from .editorconfig
module.exports = {
  // Trailing commas help with git merging and conflict resolution
  trailingComma: "all",
  overrides: [
    {
      files: ".editorconfig",
      options: { parser: "yaml" },
    },
  ],
}
