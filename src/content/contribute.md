# Contribute

MyanCode is open source and welcomes contributions — whether you're fixing a typo in the docs, adding a keyword, or building new IDE examples. This page shows you how the project fits together.

## Clone and run locally

```bash
git clone https://github.com/Kaung-Myat/Myan-Code
cd myancode
npm install
npm start
```

This starts the development build of the engine and IDE. To run a single program through the CLI during development:

```bash
node bin/myancode.js examples/hello.myan
```

## Project structure

```
myancode/
├── bin/            # CLI entry point (the `myancode` command)
├── src/
│   ├── engine/     # The NLP pipeline: tokenizer → transpiler
│   └── ide/        # The browser-based editor (Web IDE)
├── config/         # Language definition: keywords.json, operators.json
└── examples/       # Sample .myan programs
```

- **`bin/`** — the command-line wrapper that reads a `.myan` file and feeds it to the engine.
- **`src/engine/`** — the heart of the language: tokenizer, classifier, extractor, AST builder, transpiler, and runtime.
- **`src/ide/`** — the editor UI, example loader, and Run button.
- **`config/`** — JSON files describing every keyword and operator. This is the source of truth for the language's vocabulary.

## How to add a new keyword

Adding a keyword touches **five layers**, in order. Skipping one means the engine won't fully understand your new word.

1. **`config/keywords.json`** — register the Burmese word and the construct it maps to. This is what the tokenizer and classifier read.
2. **Classifier** (`src/engine/classifier`) — teach the classifier to recognise the new token and label it correctly.
3. **Extractor** (`src/engine/extractor`) — pull the relevant parts (names, values, expressions) out of statements that use the keyword.
4. **AST** (`src/engine/ast`) — define or extend the node type that represents the new construct.
5. **Transpiler** (`src/engine/transpiler`) — emit the equivalent JavaScript for the new AST node.

After wiring all five, add a sample program under `examples/` that exercises the keyword, and a test that asserts its output.

## How to add an IDE example

The Web IDE ships with a gallery of runnable snippets. To add one:

1. Create a `.myan` file under `examples/`.
2. Register it in the IDE's example list (`src/ide/examples`), giving it a Burmese title and a one-line description.
3. Run `npm start` and confirm it loads and runs in the editor.

Keep examples short and focused — one concept each, the same way the **[Learn guide](/learn)** is structured.

## Reporting issues

Found a bug or have an idea? Open an issue:

> [github.com/Kaung-Myat/Myan-Code/issues](https://github.com/Kaung-Myat/Myan-Code/issues)

A good report includes the `.myan` source, what you expected, and what actually happened.

## Code of conduct

This project follows a simple principle: **be respectful and constructive**. We're building a tool to make programming accessible to Burmese speakers — contributors of every experience level are welcome. Harassment, discrimination, and dismissive behaviour have no place here. Assume good intent, give helpful feedback, and help newcomers feel at home.

Thank you for helping make programming more accessible. 
