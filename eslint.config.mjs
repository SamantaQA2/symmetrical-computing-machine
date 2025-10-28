// import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,ts,mjs,cjs}"],
    ignores: ["node_modules", "dist", "build", "eslint.config.mjs"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
      },
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node, // Enables Node.js globals like `process`, `__dirname`, etc.
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      /* ----------------------- 🧹 General JavaScript Rules ----------------------- */
      "prefer-const": "error", // Require const for variables that are never reassigned
      "arrow-body-style": "error", // Require braces in arrow functions for consistency
      "block-scoped-var": "error", // Treat var as block-scoped (like let)
      "default-case-last": "error", // Ensure default case is last in switch statements
      "default-param-last": "error", // Default parameters should be declared last
      "max-params": ["error", 4], // Limit function parameters (here: max 4)
      "no-else-return": "error", // Avoid else after return in if statements
      "no-empty": "error", // Disallow empty block statements
      "no-extra-semi": "error", // Disallow unnecessary semicolons
      "no-floating-decimal": "error", // Require leading 0 before decimals
      "no-nested-ternary": "error", // Avoid nested ternary operators
      "no-new": "error", // Disallow creating new objects for side effects only
      "no-new-object": "error", // Disallow `new Object()`
      "no-param-reassign": "error", // Prevent parameter reassignment
      "no-useless-concat": "error", // Disallow unnecessary string concatenation
      "no-useless-return": "error", // Disallow redundant return statements
      "prefer-template": "error", // Prefer template literals over string concatenation
      yoda: "error", // Enforce yoda conditions (literal on right)
      eqeqeq: "error", // Require strict equality (=== and !==)
      "no-console": "error", // Disallow console.log, warn, etc.
      "no-var": "error", // Require let/const instead of var
      "no-undef": "error", // Disallow undeclared variables
      "no-eval": "error", // Disallow use of eval()
      "no-implied-eval": "error", // Disallow implied eval() (e.g. setTimeout with string)
      "no-use-before-define": "error", // Disallow using variables before declaration
      "max-classes-per-file": ["error", 1], // Only allow one class per file

      /* ----------------------- 🧽 Unused Imports / Vars ----------------------- */
      "unused-imports/no-unused-imports": "error", // Remove unused imports
      "@typescript-eslint/no-unused-vars": "error", // Remove unused variables

      /* ----------------------- 🧠 TypeScript Rules ----------------------- */
      "@typescript-eslint/explicit-function-return-type": "error", // Require explicit return types on functions
      "@typescript-eslint/explicit-module-boundary-types": "error", // Require return types on exported functions
      "@typescript-eslint/naming-convention": "error", // Enforce consistent naming conventions
      "@typescript-eslint/no-duplicate-enum-values": "error", // Disallow duplicate values in enums
      "@typescript-eslint/no-require-imports": "error", // Disallow require(), prefer import
      "@typescript-eslint/no-useless-empty-export": "error", // Disallow `export {}`
      "@typescript-eslint/consistent-generic-constructors": "error", // Enforce consistent generic constructors
      "@typescript-eslint/consistent-type-definitions": "error", // Enforce consistent type definitions (interface vs type)
      "@typescript-eslint/consistent-type-exports": "error", // Require consistent type export style
      "@typescript-eslint/method-signature-style": "error", // Enforce method signature consistency
      "@typescript-eslint/no-confusing-void-expression": "error", // Disallow confusing void expressions
      "@typescript-eslint/no-dynamic-delete": "error", // Disallow dynamic delete
      "@typescript-eslint/no-extra-non-null-assertion": "error", // Disallow extra non-null assertions (!!)
      "@typescript-eslint/no-inferrable-types": "error", // Disallow explicit types that can be inferred
      "@typescript-eslint/no-non-null-assertion": "error", // Disallow non-null assertions (!)
      "@typescript-eslint/no-redundant-type-constituents": "error", // Simplify redundant type constituents
      "@typescript-eslint/no-this-alias": "error", // Disallow assigning this to variables
      "@typescript-eslint/ban-ts-comment": "error", // Disallow // @ts-ignore, etc.
      "@typescript-eslint/no-unnecessary-qualifier": "error", // Disallow unnecessary namespace qualifiers
      "@typescript-eslint/no-unnecessary-type-constraint": "error", // Disallow unnecessary generic constraints
      "@typescript-eslint/prefer-enum-initializers": "error", // Require enum members to be initialized
      "@typescript-eslint/prefer-function-type": "error", // Prefer function types over interfaces
      "@typescript-eslint/prefer-string-starts-ends-with": "error", // Prefer startsWith/endsWith
      "@typescript-eslint/restrict-plus-operands": "error", // Enforce correct operand types for +
      "@typescript-eslint/switch-exhaustiveness-check": "error", // Require exhaustive switch statements
      "@typescript-eslint/unified-signatures": "error", // Combine function overloads when possible
      "@typescript-eslint/no-implied-eval": "error", // TS-safe version of no-implied-eval
      "@typescript-eslint/no-use-before-define": "error", // TS-safe version of no-use-before-define
      "no-duplicate-imports": "error", // Disallow duplicate imports
      "@typescript-eslint/no-explicit-any": "error", // Disallow usage of any type
      "@typescript-eslint/no-floating-promises": "error", // Require proper promise handling
      "@typescript-eslint/no-misused-promises": "error", // Disallow misused promises
      "@typescript-eslint/consistent-type-imports": "error", // Enforce using `import type`
      "@typescript-eslint/array-type": "error", // Enforce consistent array type syntax
      "@typescript-eslint/no-shadow": "error", // Disallow variable shadowing
      // "@typescript-eslint/ban-types": "error", // Disallow certain built-in types
      "@typescript-eslint/no-unsafe-argument": "error", // Disallow unsafe arguments
      "@typescript-eslint/no-unsafe-assignment": "error", // Disallow unsafe assignments
      "@typescript-eslint/no-unsafe-return": "error", // Disallow unsafe return values
    },
  },
]);
