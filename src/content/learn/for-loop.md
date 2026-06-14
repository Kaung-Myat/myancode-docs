# For Loop

When you know exactly how many times to repeat an action, use a **count loop**. MyanCode writes this with **`အကြိမ် ပြုလုပ်ပါ`** (*"do N times"*): a number, then `အကြိမ် ပြုလုပ်ပါ`, and a block closed with `ပြီးပါပြီ`.

## Repeating an action

```myancode
    ၃ အကြိမ် ပြုလုပ်ပါ
      ပြောပါ "မင်္ဂလာပါ"
    ပြီးပါပြီ
```

This runs the body **3 times**, printing:

```
  မင်္ဂလာပါ
  မင်္ဂလာပါ
  မင်္ဂလာပါ
```

## Keeping a running total

A count loop pairs naturally with an accumulator variable you update each pass. Here we add `၁၀` five times (`ပေါင်း` = *add*):

```myancode
  စုစုပေါင်း ကို ၀ အဖြစ်သတ်မှတ်ပါ
  ၅ အကြိမ် ပြုလုပ်ပါ
    စုစုပေါင်း ကို စုစုပေါင်း ပေါင်း ၁၀ အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ
  ပြောပါ စုစုပေါင်း
```

Output:

```
၅၀
```

## Counting with your own index

If you need the current number, keep a counter and increase it inside the loop:

```myancode
  i ကို ၁ အဖြစ်သတ်မှတ်ပါ
  ၃ အကြိမ် ပြုလုပ်ပါ
    ပြောပါ i
    i ကို i ပေါင်း ၁ အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ
```

Output:

```
  ၁
  ၂
  ၃
```

> Use **`အကြိမ် ပြုလုပ်ပါ`** when you know the count up front, a **[while loop](/learn/while-loop)** when you loop until a condition changes, and a **[for-each loop](/learn/foreach-loop)** when you want each item in a list.

Next: **[For-Each Loop](/learn/foreach-loop)**.
