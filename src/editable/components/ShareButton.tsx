'use client'

import { useState } from 'react'
import { Check, Share2 } from 'lucide-react'

type ShareButtonProps = {
  title?: string
  label?: string
  className?: string
}

export function ShareButton({ title, label = 'Share URL', className = '' }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const url = window.location.href
    try {
      if (navigator.share) {
        await navigator.share({ title: title || document.title, url })
      } else {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1800)
      }
    } catch {
      try {
        await navigator.clipboard.writeText(url)
        setCopied(true)
        window.setTimeout(() => setCopied(false), 1800)
      } catch {
        setCopied(false)
      }
    }
  }

  return (
    <button type="button" onClick={share} className={className || 'inline-flex items-center gap-2 rounded-full bg-[#E4D6A9] px-4 py-2 text-sm font-black text-[#241109] transition hover:-translate-y-0.5'}>
      {copied ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
      {copied ? 'Copied' : label}
    </button>
  )
}
