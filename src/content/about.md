# About MyanCode

**MyanCode (မြန်မာကုဒ်)** is one of the programming language whose source code *is* natural Burmese. Instead of memorising English keywords like `if`, `while`, and `function`, you write sentences your grandmother could read — and the computer runs them.

## What is MyanCode

MyanCode began as a **Natural Language Processing (NLP) course project**: an experiment in whether everyday Burmese could serve as the surface syntax of a real, runnable programming language. The answer turned out to be yes. What started as coursework grew into a complete language with a tokenizer, parser, transpiler, and runtime — plus a browser-based IDE.

The whole system is **deterministic and offline**. There is no large language model guessing at your intent; a hand-built NLP pipeline maps Burmese sentences onto precise program structures, every time.

## The problem it solves

Programming education in Myanmar runs headfirst into a language barrier. Every mainstream language — Python, JavaScript, C — assumes fluency in English keywords and English documentation. For a beginner who is still learning English *and* learning to code, that's two steep hills at once.

MyanCode removes the first hill. A student can express loops, conditions, functions, and objects entirely in their mother tongue:

```myancode
  score ကို ၇၅ အဖြစ်သတ်မှတ်ပါ
  အကယ်၍ score က ၈၀ ထက်ကြီးရင်
    ပြောပါ "ဂုဏ်ထူး"
  မဟုတ်ရင်
    ပြောပါ "ပျမ်းမျှ"
  ပြီးပါပြီ
```

The concepts — variables, comparison, branching — transfer directly to any other language later. Only the vocabulary changes.

## The NLP pipeline

Every MyanCode program flows through six deterministic stages:

1. **Tokenizer** — splits Burmese text into tokens using syllable boundaries.
2. **Classifier** — labels each token: keyword, identifier, number, string, or operator.
3. **Extractor** — pulls structured data (variable names, values, expressions) out of each classified statement.
4. **AST** — assembles the statements into an abstract syntax tree.
5. **Transpiler** — walks the tree and emits equivalent JavaScript.
6. **Runtime** — executes that JavaScript and streams the output back to you.

Because each stage is rule-based, the same program always produces the same result. No network calls, no models, no surprises.

## Multi-paradigm by design

MyanCode deliberately supports **three paradigms** so learners can meet the idea that suits the problem:

- **Procedural** — step-by-step statements, conditions, and loops.
- **Functional** — functions as first-class values you can store and pass around.
- **Object-oriented** — objects that bundle properties and methods together.

One language, three ways to think about a problem — all in Burmese.

## At a glance

| Stat | Value |
| --- | --- |
| Keywords | **28** |
| Operators | **14** |
| Paradigms | **3** |
| NLP stages | **6** |

Ready to write some code? Start with the **[Learn guide](/learn)** or jump into the **[Web IDE](https://myan-code.vercel.app)**.
