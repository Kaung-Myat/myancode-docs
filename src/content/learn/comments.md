# Comments

Comments are notes for humans — the engine ignores them completely. Use them to explain *why* your code does something.

## Writing a comment

Start a comment with **`မှတ်ချက်`** (*"note"*). Everything after it on that line is ignored:

```myancode
မှတ်ချက် ဒါက comment တစ်ခုပါ
ပြောပါ "မင်္ဂလာပါ"
```

Only the `ပြောပါ` line runs; the first line is just a note.

## Inline comments

You can place a comment at the end of a line of code:

```myancode
score ကို ၉၀ အဖြစ်သတ်မှတ်ပါ   မှတ်ချက် ကျောင်းသား၏ အမှတ်
ပြောပါ score
```

The engine reads the assignment, then ignores everything from `မှတ်ချက်` onward.

## Commenting out code

Disable a line temporarily by turning it into a comment:

```myancode
ပြောပါ "ပထမ စာကြောင်း"
မှတ်ချက် ပြောပါ "ဒီစာကြောင်း အလုပ်မလုပ်ပါ"
ပြောပါ "နောက်ဆုံး စာကြောင်း"
```

Output:

```
ပထမ စာကြောင်း
နောက်ဆုံး စာကြောင်း
```

> Good comments explain intent, not the obvious. Prefer `မှတ်ချက် ဂုဏ်ထူးအဆင့် စစ်ဆေးခြင်း` over `မှတ်ချက် score ကို စစ်တယ်`.

Next: **[If / Else-if / Else](/learn/if-else)**.
