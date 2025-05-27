'use client'

import { useState } from 'react'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ghdtjr9ns@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email: ', err)
    }
  }

  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Let's connect!
      </h1>
      <p className="mb-4">
        I'm always interested in new ideas and opportunities. Reach me anytime at{' '}
        <span className="inline-flex items-center gap-2">
          <span className="font-medium">ghdtjr9ns@gmail.com</span>
          <button
            onClick={copyEmail}
            className="px-2 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Copy email address"
          >
            {copied ? '복사됨!' : '복사'}
          </button>
        </span>
      </p>
    </section>
  )
}