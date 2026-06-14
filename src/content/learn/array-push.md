# Array Push

Lists can grow. Add a value to the end of a list with **`ထဲသို့ထည့်ပါ`** (*"put into"*), using the pattern:

> **`<list> ထဲသို့ထည့်ပါ <value>`**

So the whole line reads *"into the list, add the value"*.

## Adding one item

```myancode
  စာရင်း ကိန်းများ ဖန်တီးပါ [၁, ၂, ၃]
  ကိန်းများ ထဲသို့ထည့်ပါ ၄
  ပြောပါ ကိန်းများ
```

Output:

```
  [၁, ၂, ၃, ၄]
```

## Starting from an empty list

A common pattern is to begin empty and build the list up as you go:

```myancode
  စာရင်း စာလုံးများ ဖန်တီးပါ []
  စာလုံးများ ထဲသို့ထည့်ပါ "က"
  စာလုံးများ ထဲသို့ထည့်ပါ "ခ"
  စာလုံးများ ထဲသို့ထည့်ပါ "ဂ"
  ပြောပါ စာလုံးများ
```

Output:

```
[က, ခ, ဂ]
```

## Building a list in a loop

Combine `ထဲသို့ထည့်ပါ` with a **[for-each loop](/learn/foreach-loop)** to collect computed values:

```myancode
  စာရင်း စတုရန်းများ ဖန်တီးပါ []
  စာရင်း ကိန်းများ ဖန်တီးပါ [၁, ၂, ၃, ၄]
  ကိန်းများ တစ်ခုစီအတွက် i
    စတုရန်းများ ထဲသို့ထည့်ပါ i မြှောက် i
  ပြီးပါပြီ
  ပြောပါ စတုရန်းများ
```

Output:

```
[၁, ၄, ၉, ၁၆]
```

Next: model real-world things with **[Objects (OOP)](/learn/objects)**.
