# While Loop

A **while loop** repeats a block as long as a condition stays true. MyanCode expresses this by attaching **`သောကာလ`** (*"during the time / while"*) to the condition.

## Basic counting

```myancode
    i ကို ၁ အဖြစ်သတ်မှတ်ပါ
    i က ၅ ထက်နည်းသောကာလ
      ပြောပါ i
      i ကို i ပေါင်း ၁ အဖြစ်သတ်မှတ်ပါ
    ပြီးပါပြီ
```

This reads as *"while i is less than 5"*. Each pass prints `i` and then increases it by one. Output:

```
    ၁
    ၂
    ၃
    ၄
```

## Avoiding infinite loops

The condition must eventually become false. If you forget to update the counter, the loop never stops:

```myancode
  မှတ်ချက် မမှန်ကန်ပါ — i ကို မပြောင်းလဲတဲ့အတွက် အဆုံးမသတ်ပါ
  i ကို ၁ အဖြစ်သတ်မှတ်ပါ
  i က ၅ ထက်နည်းသောကာလ
    ပြောပါ i
  ပြီးပါပြီ
```

Always change something inside the loop that moves toward the exit condition.

## Counting down

You can loop in any direction. The operator `နုတ်` means *subtract*:

```myancode
  n ကို ၃ အဖြစ်သတ်မှတ်ပါ
  n က ၀ ထက်ကြီးသောကာလ
    ပြောပါ n
    n ကို n နုတ် ၁ အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ
```

Output:

```
  ၃
  ၂
  ၁
```

Next: **[For Loop](/learn/for-loop)**.
