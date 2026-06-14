# Defining Functions

A function is a reusable block of code with a name. Define one with **`လုပ်ဆောင်ချက်`** (*"function / action"*), followed by the name and any parameters, and close it with **`ပြီးပါပြီ`**.

## A function with no parameters

```myancode
  လုပ်ဆောင်ချက် နှုတ်ဆက်
    ပြောပါ "မင်္ဂလာပါ"
  ပြီးပါပြီ
```

This defines a function called `နှုတ်ဆက်` (*"greet"*). Defining it doesn't run it — it just teaches the program a new action.

## Adding parameters

List parameter names after the function name. They become variables inside the body:

```myancode
  လုပ်ဆောင်ချက် နှုတ်ဆက် name
    ပြောပါ "မင်္ဂလာပါ"
    ပြောပါ name
  ပြီးပါပြီ
```

Now `name` can be filled in each time the function is called.

## Multiple parameters

Separate several parameters with spaces. Here `ပေါင်း` adds the two together:

```myancode
  လုပ်ဆောင်ချက် ပေါင်းခြင်း a b
    result ကို a ပေါင်း b အဖြစ်သတ်မှတ်ပါ
    ပြောပါ result
  ပြီးပါပြီ
```

> A function's body is everything between its header line and the matching `ပြီးပါပြီ`. Indent the body so the structure is easy to read.

You've defined functions — now learn to **[call them](/learn/calling-functions)**.
