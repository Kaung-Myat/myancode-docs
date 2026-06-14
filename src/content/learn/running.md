# Running your first program

Once you've written a `.myan` file, there are two ways to run it.

## With the CLI

Pass your file to the `myancode` command:

```bash
myancode hello.myan
```

The engine tokenizes your Burmese source, builds an AST, transpiles it to JavaScript, and runs it — printing the output straight to your terminal.

```
မင်္ဂလာပါ ကမ္ဘာ
```

## In the Web IDE

1. Open [myan-code.vercel.app](https://myan-code.vercel.app)
2. Type or paste your program in the editor
3. Press the green **Run** button

Output appears in the panel below the editor instantly.

## A complete first program

Let's put together everything so far — a variable, a condition, and some output:

```myancode
score ကို ၇၅ အဖြစ်သတ်မှတ်ပါ
အကယ်၍ score က ၈၀ ထက်ကြီးရင်
  ပြောပါ "ဂုဏ်ထူး"
မဟုတ်ရင်
  ပြောပါ "ပျမ်းမျှ"
ပြီးပါပြီ
```

Running this prints:

```
ပျမ်းမျှ
```

because `score` (75) is **not** greater than 80.

> Notice `ပြီးပါပြီ` (*"finished"*) — it closes the block, much like a closing brace in other languages.

You now know enough to explore the language. Continue to **[Variables & Assignment](/learn/variables)**.
