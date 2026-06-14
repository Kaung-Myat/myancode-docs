# Return Values

Functions can hand a value back to whoever called them. Use **`ပြန်ပေးပါ`** (*"give back"*) followed by the value to return.

## Returning a result

```myancode
  လုပ်ဆောင်ချက် နှစ်ဆ x
    ပြန်ပေးပါ x မြှောက် ၂
  ပြီးပါပြီ

  result ကို နှစ်ဆ ကိုခေါ်ပါ ၅ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ result
```

The function `နှစ်ဆ` (*"double"*) returns `x မြှောက် ၂`. Calling it with 5 returns 10, which `ပြောပါ` then prints:

```
  ၁၀
```

## Storing the result

Capture a returned value in a variable just like any other assignment:

```myancode
  လုပ်ဆောင်ချက် ပေါင်းခြင်း a b
    ပြန်ပေးပါ a ပေါင်း b
  ပြီးပါပြီ

  total ကို ပေါင်းခြင်း ကိုခေါ်ပါ ၇ ၃ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ total
```

Output:

```
  ၁၀
```

## Returning early

`ပြန်ပေးပါ` immediately exits the function — handy for guard conditions:

```myancode
  လုပ်ဆောင်ချက် အကြီးဆုံး a b
    အကယ်၍ a က b ထက်ကြီးရင်
      ပြန်ပေးပါ a
    ပြီးပါပြီ
    ပြန်ပေးပါ b
  ပြီးပါပြီ

  ရလဒ် ကို အကြီးဆုံး ကိုခေါ်ပါ ၉ ၄ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ ရလဒ်
```

Output:

```
  ၉
```

> A function without `ပြန်ပေးပါ` simply performs its actions and returns nothing.

Next: **[Functions as Values](/learn/functions-as-values)**.
