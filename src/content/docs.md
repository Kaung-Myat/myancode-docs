# Language Reference

A complete reference to MyanCode's **28 keywords**, **14 operators**, and number system. For step-by-step tutorials, see the **[Learn guide](/learn)**.

## Keywords

### Output & Input

| Keyword | Meaning | Example |
| --- | --- | --- |
| `ပြောပါ` | print / output | `ပြောပါ "မင်္ဂလာပါ"` |
| `ထည့်သွင်းပါ` | read user input | `name ကို ထည့်သွင်းပါ` |

### Variables & Values

| Keyword | Meaning | Example |
| --- | --- | --- |
| `ကို ... အဖြစ်သတ်မှတ်ပါ` | assign a variable | `x ကို ၅ အဖြစ်သတ်မှတ်ပါ` |
| `မှန်သည်` | boolean true | `flag ကို မှန်သည် အဖြစ်သတ်မှတ်ပါ` |
| `မှားသည်` | boolean false | `flag ကို မှားသည် အဖြစ်သတ်မှတ်ပါ` |
| `ဘာမှမရှိ` | null | `x ကို ဘာမှမရှိ အဖြစ်သတ်မှတ်ပါ` |

### Conditions

| Keyword | Meaning | Example |
| --- | --- | --- |
| `အကယ်၍ ... ရင်` | if | `အကယ်၍ x က ၅ ထက်ကြီးရင်` |
| `သို့မဟုတ်အကယ်၍` | else-if | `သို့မဟုတ်အကယ်၍ x က ၃ ညီရင်` |
| `မဟုတ်ရင်` | else | `မဟုတ်ရင်` |
| `ပြီးပါပြီ` | close any block | `ပြီးပါပြီ` |

### Loops

| Keyword | Meaning | Example |
| --- | --- | --- |
| `... သောကာလ` | while loop | `i က ၁၀ ထက်နည်းသောကာလ` |
| `... အကြိမ် ပြုလုပ်ပါ` | repeat N times | `၅ အကြိမ် ပြုလုပ်ပါ` |
| `... တစ်ခုစီအတွက်` | for-each | `nums တစ်ခုစီအတွက် n` |

### Functions

| Keyword | Meaning | Example |
| --- | --- | --- |
| `လုပ်ဆောင်ချက်` | define a function | `လုပ်ဆောင်ချက် နှုတ်ဆက် name` |
| `ကိုခေါ်ပါ` | call a function | `နှုတ်ဆက် ကိုခေါ်ပါ "Kaung"` |
| `ပြန်ပေးပါ` | return a value | `ပြန်ပေးပါ result` |

### Arrays

| Keyword | Meaning | Example |
| --- | --- | --- |
| `စာရင်း ... ဖန်တီးပါ` | create a list | `စာရင်း nums ဖန်တီးပါ [၁, ၂, ၃]` |
| `ထဲသို့ထည့်ပါ` | add item to list | `nums ထဲသို့ထည့်ပါ ၁၀` |

### Objects (OOP)

| Keyword | Meaning | Example |
| --- | --- | --- |
| `အရာဝတ္ထု ... ဖန်တီးပါ` | create an object | `ကား ကို အရာဝတ္ထု ဖန်တီးပါ` |
| `၏` | access a property | `ကား၏အရောင်` |
| `လုပ်ဆောင်ချက်` (inside object) | define a method | `လုပ်ဆောင်ချက် မောင်း` |
| `ကိုခေါ်ပါ` (on object) | call a method | `ကား၏မောင်း ကိုခေါ်ပါ` |

### Comments

| Keyword | Meaning | Example |
| --- | --- | --- |
| `မှတ်ချက်` | comment (rest of line ignored) | `မှတ်ချက် ဒါက comment တစ်ကြောင်းပါ` |

## Operators

MyanCode has **14 operators** spanning arithmetic, comparison, and logic.

### Arithmetic

| Operator | JS | Meaning | Example |
| --- | --- | --- | --- |
| `ပေါင်း` | `+` | add | `a ပေါင်း b` |
| `နုတ်` | `-` | subtract | `a နုတ် b` |
| `မြှောက်` | `*` | multiply | `a မြှောက် b` |
| `စား` | `/` | divide | `a စား b` |
| `အကြွင်း` | `%` | modulo | `a အကြွင်း b` |

### Comparison

| Operator | JS | Meaning |
| --- | --- | --- |
| `ထက်ကြီးရင်` | `>` | greater than |
| `ထက်နည်းရင်` | `<` | less than |
| `ထက်ကြီးသို့ညီရင်` | `>=` | greater than or equal |
| `ထက်နည်းသို့ညီရင်` | `<=` | less than or equal |
| `ညီရင်` | `===` | equal |
| `မညီရင်` | `!==` | not equal |

### Logical

| Operator | JS | Meaning |
| --- | --- | --- |
| `နှင့်` | `&&` | logical AND |
| `သို့မဟုတ်` | `\|\|` | logical OR |

### Property access

| Operator | JS | Meaning |
| --- | --- | --- |
| `၏` | `.` | property access |

## Myanmar digits

MyanCode reads Burmese numerals natively. They map one-to-one to Arabic digits:

| Burmese | ၀ | ၁ | ၂ | ၃ | ၄ | ၅ | ၆ | ၇ | ၈ | ၉ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| English | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |

So `၂၀၂၆` is **2026** and `၃.၁၄` is **3.14**.

## Full multi-paradigm example

A single program that uses all three paradigms — procedural flow, a function, and an object:

```myancode
  မှတ်ချက် ---- Procedural ----
  score ကို ၈၅ အဖြစ်သတ်မှတ်ပါ
  အကယ်၍ score က ၈၀ ထက်ကြီးရင်
    ပြောပါ "ဂုဏ်ထူး"
  မဟုတ်ရင်
    ပြောပါ "ပျမ်းမျှ"
  ပြီးပါပြီ

  မှတ်ချက် ---- Functional ----
  လုပ်ဆောင်ချက် နှစ်ဆ x
    ပြန်ပေးပါ x မြှောက် ၂
  ပြီးပါပြီ
  double ကို နှစ်ဆ အဖြစ်သတ်မှတ်ပါ
  ရလဒ် ကို double ကိုခေါ်ပါ ၅ အဖြစ်သတ်မှတ်ပါ
  ပြောပါ ရလဒ်

  မှတ်ချက် ---- Object-oriented ----
  ကား ကို အရာဝတ္ထု ဖန်တီးပါ
    အရောင် ကို "အနီ" အဖြစ်သတ်မှတ်ပါ
    လုပ်ဆောင်ချက် မောင်း
      ပြောပါ "ကားမောင်းနေသည်"
    ပြီးပါပြီ
  ပြီးပါပြီ
  ကား၏မောင်း ကိုခေါ်ပါ
```

Output:

```
    ဂုဏ်ထူး
    ၁၀
    ကားမောင်းနေသည်
```
