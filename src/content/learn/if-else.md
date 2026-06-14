# If / Else-if / Else

Conditions let your program make decisions. MyanCode uses **`အကယ်၍`** (*"if"*) to start a condition and **`ပြီးပါပြီ`** (*"finished"*) to close the block.

## A simple `if`

```myancode
    score ကို ၈၅ အဖြစ်သတ်မှတ်ပါ
    အကယ်၍ score က ၈၀ ထက်ကြီးရင်
      ပြောပါ "ဂုဏ်ထူး"
    ပြီးပါပြီ
```

The condition `score က ၈၀ ထက်ကြီးရင်` means *"if score is greater than 80"*. Since 85 > 80, this prints `ဂုဏ်ထူး`.

## Adding `else`

Use **`မဟုတ်ရင်`** (*"otherwise"*) for the fallback branch:

```myancode
    score ကို ၇၅ အဖြစ်သတ်မှတ်ပါ
    အကယ်၍ score က ၈၀ ထက်ကြီးရင်
      ပြောပါ "ဂုဏ်ထူး"
    မဟုတ်ရင်
      ပြောပါ "ပျမ်းမျှ"
    ပြီးပါပြီ
```

Because 75 is not greater than 80, the `မဟုတ်ရင်` branch runs and prints `ပျမ်းမျှ`.

## Else-if chains

Chain extra conditions with **`သို့မဟုတ်အကယ်၍`** (*"or if / else-if"*) before the final `မဟုတ်ရင်`:

```myancode
    score ကို ၆၅ အဖြစ်သတ်မှတ်ပါ
    အကယ်၍ score က ၈၀ ထက်ကြီးရင်
      ပြောပါ "ဂုဏ်ထူး"
    သို့မဟုတ်အကယ်၍ score က ၆၀ ထက်ကြီးရင်
      ပြောပါ "အောင်မြင်"
    မဟုတ်ရင်
      ပြောပါ "ကျရှုံး"
    ပြီးပါပြီ
```

Output:

```
    အောင်မြင်
```

## Comparison words

| Burmese | Meaning |
| --- | --- |
| `ထက်ကြီးရင်` | greater than |
| `ထက်နည်းရင်` | less than |
| `ညီရင်` | equal to |
| `မညီရင်` | not equal to |

Next: **[While Loop](/learn/while-loop)**.
