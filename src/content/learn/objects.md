# Objects (OOP)

An **object** bundles data (properties) and behaviour (methods) into one thing. Create one with **`အရာဝတ္ထု ဖန်တီးပါ`** (*"create an object"*) and close it with **`ပြီးပါပြီ`**.

## Creating an object

```myancode
  ကား ကို အရာဝတ္ထု ဖန်တီးပါ
    အရောင် ကို "အနီ" အဖြစ်သတ်မှတ်ပါ
    လုပ်ဆောင်ချက် မောင်း
      ပြောပါ "ကားမောင်းနေသည်"
    ပြီးပါပြီ
  ပြီးပါပြီ

  ကား၏မောင်း ကိုခေါ်ပါ
```

This builds a `ကား` (*"car"*) object with:

- a **property** `အရောင်` (*"colour"*) set to `"အနီ"`
- a **method** `မောင်း` (*"drive"*) that prints a message

The final line calls the method and prints:

```
  ကားမောင်းနေသည်
```


## Reading properties

Read a property with the `၏` marker, then print it:

```myancode
  ကျောင်းသား ကို အရာဝတ္ထု ဖန်တီးပါ
    နာမည် ကို "မောင်မောင်" အဖြစ်သတ်မှတ်ပါ
    အမှတ် ကို ၈၅ အဖြစ်သတ်မှတ်ပါ
  ပြီးပါပြီ

  ပြောပါ ကျောင်းသား၏နာမည်
  ပြောပါ ကျောင်းသား၏အမှတ်
```


Output:

```
  မောင်မောင်
  ၈၅
```

> Use objects to model real-world entities — a car, a student, a bank account — keeping their data and actions in one place.

Next: read and update object data with **[Property Access](/learn/property-access)**.
