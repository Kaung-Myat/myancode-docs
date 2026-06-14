# Calling Functions

Defining a function teaches the program an action; **calling** it runs that action. Use **`ကိုခေါ်ပါ`** (*"call it"*) after the function name.

## Calling with no arguments

```myancode
  လုပ်ဆောင်ချက် နှုတ်ဆက်
    ပြောပါ "မင်္ဂလာပါ"
  ပြီးပါပြီ

  နှုတ်ဆက် ကိုခေါ်ပါ
```

Defining `နှုတ်ဆက်` does nothing on its own. The last line calls it, printing:

```
  မင်္ဂလာပါ
```

## Passing arguments

Provide values after `ကိုခေါ်ပါ`. They fill the parameters in order:

```myancode
  လုပ်ဆောင်ချက် နှုတ်ဆက် name
    ပြောပါ "မင်္ဂလာပါ"
    ပြောပါ name
  ပြီးပါပြီ

  နှုတ်ဆက် ကိုခေါ်ပါ "မောင်မောင်"
```

Output:

```
  မင်္ဂလာပါ
  မောင်မောင်
```

## Calling repeatedly

The point of a function is reuse — call it as many times as you like:

```myancode
  လုပ်ဆောင်ချက် နှုတ်ဆက် name
    ပြောပါ name
  ပြီးပါပြီ

  နှုတ်ဆက် ကိုခေါ်ပါ "အေး"
  နှုတ်ဆက် ကိုခေါ်ပါ "မမ"
  နှုတ်ဆက် ကိုခေါ်ပါ "ဖိုး"
```

Output:

```
  အေး
  မမ
  ဖိုး
```

Next, make functions hand back results with **[Return Values](/learn/return-values)**.
