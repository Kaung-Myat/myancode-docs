import { useEffect, useRef, useState } from 'react'
import MyanCodeHighlighter from './MyanCodeHighlighter.jsx'

const EXAMPLES = [
  {
    label: 'procedural.myan',
    code: `score ကို ၇၅ အဖြစ်သတ်မှတ်ပါ
အကယ်၍ score က ၈၀ ထက်ကြီးရင်
  ပြောပါ "ဂုဏ်ထူး"
မဟုတ်ရင်
  ပြောပါ "ပျမ်းမျှ"
ပြီးပါပြီ`,
  },
  {
    label: 'oop.myan',
    code: `ကား ကို အရာဝတ္ထု ဖန်တီးပါ
  အရောင် ကို "အနီ" အဖြစ်သတ်မှတ်ပါ
  လုပ်ဆောင်ချက် မောင်း
    ပြောပါ "ကားမောင်းနေသည်"
  ပြီးပါပြီ
ပြီးပါပြီ
ကား၏မောင်း ကိုခေါ်ပါ`,
  },
  {
    label: 'functional.myan',
    code: `လုပ်ဆောင်ချက် နှစ်ဆ x
  ပြန်ပေးပါ x မြှောက် ၂
ပြီးပါပြီ
double ကို နှစ်ဆ အဖြစ်သတ်မှတ်ပါ
ပြောပါ double ကိုခေါ်ပါ ၅`,
  },
]

const TYPING_SPEED = 35 // ms per char
const PAUSE_AFTER = 3000 // ms

export default function TypewriterCode() {
  const [exIdx, setExIdx] = useState(0)
  const [shown, setShown] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    const current = EXAMPLES[exIdx].code
    let i = 0
    setShown('')

    const tick = () => {
      i++
      setShown(current.slice(0, i))
      if (i < current.length) {
        timerRef.current = setTimeout(tick, TYPING_SPEED)
      } else {
        timerRef.current = setTimeout(() => {
          setExIdx((p) => (p + 1) % EXAMPLES.length)
        }, PAUSE_AFTER)
      }
    }

    timerRef.current = setTimeout(tick, TYPING_SPEED)
    return () => clearTimeout(timerRef.current)
  }, [exIdx])

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#16161b] shadow-2xl shadow-primary/25 ring-1 ring-black/5">
      <div className="flex items-center justify-between border-b border-white/8 bg-white/[0.03] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
          </div>
          <span className="ml-3 font-mono text-xs text-neutral-400">{EXAMPLES[exIdx].label}</span>
        </div>
        <div className="flex gap-1">
          {EXAMPLES.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === exIdx ? 'w-6 bg-brand-gradient' : 'w-1.5 bg-neutral-700'
              }`}
            />
          ))}
        </div>
      </div>
      <div className="relative min-h-[260px]">
        <MyanCodeHighlighter code={shown} />
        <span
          className="absolute animate-blink text-neutral-300"
          style={{
            display: 'none', // The blinking cursor is decorative; the typing pace itself reads as live.
          }}
        />
      </div>
    </div>
  )
}
