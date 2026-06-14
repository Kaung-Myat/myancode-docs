# Property Access

Once you have an [object](/learn/objects), you reach inside it with **`၏`** (*"of"*) — the property-access marker. The pattern is:

> **`<object>၏<property>`**

## Reading a property

```myancode
  ကား ကို အရာဝတ္ထု ဖန်တီးပါ
    အရောင် ကို "အနီ" အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ

  ပြောပါ ကား၏အရောင်
```

`ကား၏အရောင်` reads the `အရောင်` property of `ကား`:

```
  အနီ
```

## Calling a method

The same `၏` marker reaches a method; add `ကိုခေါ်ပါ` to run it:

```myancode
  ကား ကို အရာဝတ္ထု ဖန်တီးပါ
    လုပ်ဆောင်ချက် မောင်း
      ပြောပါ "ကားမောင်းနေသည်"
    ပြီးပါပြီ
  ပြီးပါပြီ

  ကား၏မောင်း ကိုခေါ်ပါ
```

Output:

```
  ကားမောင်းနေသည်
```

> You've reached the end of the guide! You now know variables, control flow, functions, and objects — all of MyanCode's three paradigms. Explore the full **[keyword reference](/docs)** or open the **[Web IDE](https://myan-code.vercel.app)** to keep building.
