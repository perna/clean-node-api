import standardWithTypeScript from "eslint-config-standard-with-typescript";

export default [
  {
    files: ["*.ts", "*.tsx"],
    plugins: {
      standardWithTypeScript: standardWithTypeScript,
    },
    rules: {
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/comma-spacing": "off",
      "@typescript-eslint/return-await": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-namespace": "off",
      "import/export": "off"
    },
  },
];