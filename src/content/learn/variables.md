# Variables & Assignment

A variable stores a value so you can reuse it later. In MyanCode you assign with the pattern:

> **`<name> ကို <value> အဖြစ်သတ်မှတ်ပါ`**

This reads naturally as *"set `<name>` to be `<value>`"*. The particle **`ကို`** marks the target, and **`အဖြစ်သတ်မှတ်ပါ`** means *"set as"*.

```myancode
name ကို "မောင်မောင်" အဖြစ်သတ်မှတ်ပါ
age ကို ၂၅ အဖြစ်သတ်မှတ်ပါ
```

Here `name` holds the text `"မောင်မောင်"` and `age` holds the number **25**.

## Using variables

Once assigned, refer to a variable by its name:

```myancode
name ကို "အေးအေး" အဖြစ်သတ်မှတ်ပါ
ပြောပါ name
```

Output:

```
အေးအေး
```

## Reassigning

Assign to the same name again to update its value:

```myancode
count ကို ၁ အဖြစ်သတ်မှတ်ပါ
count ကို ၂ အဖြစ်သတ်မှတ်ပါ
ပြောပါ count
```

Output:

```
၂
```

## Computing values

The right-hand side can be an expression. The operator `ပေါင်း` means *add*:

```myancode
a ကို ၁၀ အဖြစ်သတ်မှတ်ပါ
b ကို ၅ အဖြစ်သတ်မှတ်ပါ
sum ကို a ပေါင်း b အဖြစ်သတ်မှတ်ပါ
ပြောပါ sum
```

Output:

```
၁၅
```

> Variable names can be English or Burmese. Pick whatever reads clearest for your program.

Next: **[Print & Input](/learn/print-input)**.
