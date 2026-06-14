# Print & Input

Programs talk to the user in two directions: **printing** output and **reading** input.

## Printing with `ပြောပါ`

`ပြောပါ` (*"say"*) writes a value to the screen:

```myancode
ပြောပါ "မင်္ဂလာပါ"
ပြောပါ ၁၀၀
```

You can print a variable just as easily:

```myancode
message ကို "ကြိုဆိုပါတယ်" အဖြစ်သတ်မှတ်ပါ
ပြောပါ message
```

## Reading with `ထည့်သွင်းပါ`

To get input from the user, use **`ထည့်သွင်းပါ`** (*"enter / input"*) on the right-hand side of an assignment. It pauses, waits for the user to type, and stores the result:

```myancode
name ကို ထည့်သွင်းပါ
ပြောပါ "မင်္ဂလာပါ"
ပြောပါ name
```

If the user types `မမ`, the output is:

```
မင်္ဂလာပါ
မမ
```

## A small interactive program

Combine input and output to build a greeting:

```myancode
ပြောပါ "သင့်နာမည်ကို ရိုက်ထည့်ပါ"
name ကို ထည့်သွင်းပါ
ပြောပါ "ဟယ်လို"
ပြောပါ name
```

> Values read with `ထည့်သွင်းပါ` come in as text. When you need a number, the engine converts it automatically in arithmetic contexts.

Next: **[Comments](/learn/comments)**.
