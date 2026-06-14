# For-Each Loop

A **for-each loop** walks through every item in a list without tracking an index. Write the list name, then **`တစ်ခုစီအတွက်`** (*"for each"*), then a variable name for the current item.

## Looping over a list

```myancode
  စာရင်း ကိန်းများ ဖန်တီးပါ [၁, ၂, ၃]
  ကိန်းများ တစ်ခုစီအတွက် item
    ပြောပါ item
  ပြီးပါပြီ
```

Read it as *"for each item in ကိန်းများ"*. Each pass binds `item` to the next value:

```
  ၁
  ၂
  ၃
```

## Looping over text values

Lists can hold strings too:

```myancode
  စာရင်း fruits ဖန်တီးပါ ["ငှက်ပျော", "သရက်", "နာနတ်"]
  fruits တစ်ခုစီအတွက် name
    ပြောပါ name
  ပြီးပါပြီ
```

Output:

```
  ငှက်ပျော
  သရက်
  နာနတ်
```

## Doing work per item

You can run any statements inside the loop body — for example, totalling a list of prices:

```myancode
  စာရင်း prices ဖန်တီးပါ [၁၀၀, ၂၀၀, ၃၀၀]
  total ကို ၀ အဖြစ်သတ်မှတ်ပါ
  prices တစ်ခုစီအတွက် p
    total ကို total ပေါင်း p အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ
  ပြောပါ total
```

Output:

```
  ၆၀၀
```

> Reach for a **for-each loop** when you care about *the values* in a list, and a **[count loop](/learn/for-loop)** (`အကြိမ် ပြုလုပ်ပါ`) when you simply want to repeat an action a fixed number of times.

Next: **[Defining Functions](/learn/defining-functions)**.
