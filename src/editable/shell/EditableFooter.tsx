'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#241109', '--editable-footer-text': '#fff4dc' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[#E4D6A9]/15 bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.15fr_0.9fr_0.9fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center">
              <img src="/favicon.png?v=20260413" alt={SITE_CONFIG.name} className="h-11 w-11 object-contain" />
            </span>
            <span className="font-serif text-2xl font-semibold tracking-[-0.06em]">{SITE_CONFIG.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-[#E4D6A9]">Explore</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-semibold opacity-75 transition hover:translate-x-1 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.26em] text-[#E4D6A9]">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-semibold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-semibold opacity-75 hover:opacity-100">Logout</button> : null}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[#E4D6A9]/15 bg-[#E4D6A9]/[0.08] p-5">
          <h3 className="font-serif text-2xl font-semibold tracking-[-0.04em]">Reading stays better when it feels intentional.</h3>
          <p className="mt-3 text-sm leading-7 opacity-70">Use search, categories, and the PDF library to move through the archive without losing your place.</p>
          <Link href="/pdf" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E4D6A9] px-4 py-2 text-sm font-bold text-[#241109]">
            Open PDF library <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-[#E4D6A9]/15 px-4 py-5 text-center text-xs font-bold tracking-[0.12em] text-[#E4D6A9]/70">
        © {year} {SITE_CONFIG.name}. All rights reserved.
      </div>
    </footer>
  )
}
