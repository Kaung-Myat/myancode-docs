import { useMemo } from 'react'

// Token colors per the MyanCode theme spec
const COLORS = {
  keyword: '#c792ea',
  string: '#ce9178',
  number: '#b5cea8',
  operator: '#569cd6',
  comment: '#6a9955',
  text: '#d4d4d4',
}

// MyanCode keywords (Burmese). Order matters: longer phrases first so
// they win over shorter prefixes when both match at the same position.
const KEYWORDS = [
  'အဖြစ်သတ်မှတ်ပါ',
  'သို့မဟုတ်အကယ်၍',
  'အရာဝတ္ထု ဖန်တီးပါ',
  'ထဲသို့ထည့်ပါ',
  'ထည့်သွင်းပါ',
  'ထက်ကြီးသို့ညီရင်',
  'ထက်နည်းသို့ညီရင်',
  'ထက်ကြီးသောကာလ',
  'ထက်နည်းသောကာလ',
  'တစ်ခုစီအတွက်',
  'ပြုလုပ်ပါ',
  'အရာဝတ္ထု',
  'ဖန်တီးပါ',
  'လုပ်ဆောင်ချက်',
  'အကယ်၍',
  'မဟုတ်ရင်',
  'ထက်ကြီးရင်',
  'ထက်နည်းရင်',
  'ညီရင်',
  'မညီရင်',
  'သောကာလ',
  'အကြိမ်',
  'ပြန်ပေးပါ',
  'ပြန်ပေး',
  'ပြောပါ',
  'စာရင်း',
  'ပြီးပါပြီ',
  'ကိုခေါ်ပါ',
  'ခေါ်ပါ',
  'မှန်သည်',
  'မှားသည်',
  'ဘာမှမရှိ',
  'ရင်',
  'ကို',
  '၏',
]

// Operator keywords (Burmese arithmetic + comparison words)
const OPERATORS = [
  'မြှောက်',
  'အကြွင်း',
  'ပေါင်း',
  'နုတ်',
  'စား',
  'ထက်ကြီး',
  'ထက်နည်း',
  'နှင့်',
  'သို့မဟုတ်',
]

const KEYWORD_SET = new Set(KEYWORDS)
const OPERATOR_SET = new Set(OPERATORS)

// Burmese digits and operators in symbols
const MYAN_DIGITS = /^[၀-၉]+(?:\.[၀-၉]+)?/
const ASCII_NUMBER = /^\d+(?:\.\d+)?/
const SYMBOL_OPERATORS = /^(==|!=|<=|>=|->|[+\-*/%<>=])/

function tokenizeLine(line) {
  const tokens = []
  let i = 0
  const len = line.length

  while (i < len) {
    const ch = line[i]
    const rest = line.slice(i)

    // Comment: မှတ်ချက် (or legacy #) to end of line
    if (ch === '#' || rest.startsWith('မှတ်ချက်')) {
      tokens.push({ type: 'comment', text: rest })
      break
    }

    // Burmese strings between curly or straight quotes
    if (ch === '"' || ch === '“') {
      const closeChar = ch === '“' ? '”' : '"'
      let end = i + 1
      while (end < len && line[end] !== closeChar) end++
      const slice = line.slice(i, Math.min(end + 1, len))
      tokens.push({ type: 'string', text: slice })
      i = end + 1
      continue
    }

    // Numbers (Burmese & ASCII)
    const my = rest.match(MYAN_DIGITS)
    if (my) {
      tokens.push({ type: 'number', text: my[0] })
      i += my[0].length
      continue
    }
    const an = rest.match(ASCII_NUMBER)
    if (an) {
      tokens.push({ type: 'number', text: an[0] })
      i += an[0].length
      continue
    }

    // Symbolic operators
    const sym = rest.match(SYMBOL_OPERATORS)
    if (sym) {
      tokens.push({ type: 'operator', text: sym[0] })
      i += sym[0].length
      continue
    }

    // Keyword / operator (multi-char Burmese word)
    let matched = null
    for (const kw of KEYWORDS) {
      if (rest.startsWith(kw)) {
        matched = { type: 'keyword', text: kw }
        break
      }
    }
    if (!matched) {
      for (const op of OPERATORS) {
        if (rest.startsWith(op)) {
          matched = { type: 'operator', text: op }
          break
        }
      }
    }
    if (matched) {
      tokens.push(matched)
      i += matched.text.length
      continue
    }

    // Whitespace
    if (/\s/.test(ch)) {
      let end = i
      while (end < len && /\s/.test(line[end])) end++
      tokens.push({ type: 'text', text: line.slice(i, end) })
      i = end
      continue
    }

    // Otherwise: identifier / unknown char run
    let end = i
    while (
      end < len &&
      !/\s/.test(line[end]) &&
      line[end] !== '"' &&
      line[end] !== '“' &&
      line[end] !== '#'
    ) {
      // Stop if a keyword/operator starts here
      const sub = line.slice(end)
      let stop = false
      for (const kw of KEYWORDS) {
        if (sub.startsWith(kw)) { stop = true; break }
      }
      if (!stop) {
        for (const op of OPERATORS) {
          if (sub.startsWith(op)) { stop = true; break }
        }
      }
      if (!stop && SYMBOL_OPERATORS.test(sub)) stop = true
      if (!stop && (MYAN_DIGITS.test(sub) || ASCII_NUMBER.test(sub))) stop = true
      if (stop) break
      end++
    }
    if (end > i) {
      tokens.push({ type: 'text', text: line.slice(i, end) })
      i = end
    } else {
      tokens.push({ type: 'text', text: ch })
      i++
    }
  }

  return tokens
}

export default function MyanCodeHighlighter({ code }) {
  const lines = useMemo(() => {
    const arr = (code || '').replace(/\r\n/g, '\n').split('\n')
    return arr.map(tokenizeLine)
  }, [code])

  return (
    <pre className="overflow-x-auto py-5 pl-7 pr-6 text-[15px] leading-[1.7] font-mono"
         style={{ color: COLORS.text, background: 'transparent' }}>
      <code className="inline-block pr-6">
        {lines.map((tokens, idx) => (
          <div key={idx} className="whitespace-pre">
            {tokens.length === 0 ? ' ' : tokens.map((t, j) => (
              <span key={j} style={{ color: COLORS[t.type] || COLORS.text }}>
                {t.text}
              </span>
            ))}
          </div>
        ))}
      </code>
    </pre>
  )
}
