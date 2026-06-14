# Functions as Values

In MyanCode, functions are **first-class** — you can store a function in a variable and call it through that name. This is the heart of the language's functional side.

## Assigning a function to a variable

Define a function, then bind it to a new name with the usual assignment pattern:

```myancode
  လုပ်ဆောင်ချက် နှစ်ဆ x
    ပြန်ပေးပါ x မြှောက် ၂
  ပြီးပါပြီ

  double ကို နှစ်ဆ အဖြစ်သတ်မှတ်ပါ
  ရလဒ် ကို double ကိုခေါ်ပါ ၅ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ ရလဒ်
```

`double` now refers to the same function as `နှစ်ဆ`. Calling `double ကိုခေါ်ပါ ၅` returns 10:

```
၁၀
```

## Why it matters

Because functions are values, you can keep several of them side by side and choose which to run:

```myancode
  လုပ်ဆောင်ချက် နှစ်ဆ x
    ပြန်ပေးပါ x မြှောက် ၂
  ပြီးပါပြီ

  လုပ်ဆောင်ချက် သုံးဆ x
    ပြန်ပေးပါ x မြှောက် ၃
  ပြီးပါပြီ

  f ကို သုံးဆ အဖြစ်သတ်မှတ်ပါ
  ရလဒ် ကို f ကိုခေါ်ပါ ၄ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ ရလဒ်
```

Output:

```
  ၁၂
```

By reassigning `f` you swap the behaviour without changing the call site — a small taste of higher-order programming.

> Treating functions as values lets you build flexible, reusable code: pass behaviour around the same way you pass numbers and text.

That completes the **Functions** section. Continue to **[Arrays](/learn/arrays)**.
