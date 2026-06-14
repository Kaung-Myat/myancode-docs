# Arrays

An **array** (list) holds many values in order. Create one with **`စာရင်း ... ဖန်တီးပါ`** (*"create a list"*) followed by square brackets `[ ]`, separating items with commas.

## Creating a list

```myancode
  စာရင်း ကိန်းများ ဖန်တီးပါ [၁, ၂, ၃, ၄]
  ပြောပါ ကိန်းများ
```

Output:

```
[၁, ၂, ၃, ၄]
```

## Lists of text

Items can be any value — numbers, text, or a mix:

```myancode
  စာရင်း သစ်သီးများ ဖန်တီးပါ ["ငှက်ပျော", "သရက်", "နာနတ်"]
  ပြောပါ သစ်သီးများ
```

## Reading an item by position

Index into a list with `၏` (*"of"*) and a position number. Counting starts at **1**:

```myancode
  စာရင်း သစ်သီးများ ဖန်တီးပါ ["ငှက်ပျော", "သရက်", "နာနတ်"]
  ပထမ ကို သစ်သီးများ[0] အဖြစ်သတ်မှတ်ပါ
  ပြောပါ ပထမ
```

Output:

```
  ငှက်ပျော
```

## Walking through a list

To work with each item in a list, pair it with a **[for-each loop](/learn/foreach-loop)**. This visits every value in order:

```myancode
  စာရင်း ကိန်းများ ဖန်တီးပါ [၁၀, ၂၀, ၃၀]
  ကိန်းများ တစ်ခုစီအတွက် n
    ပြောပါ n
  ပြီးပါပြီ
```

Output:
```
  ၁၀
  ၂၀
  ၃၀
```

Next: grow a list with **[Array Push](/learn/array-push)**.
