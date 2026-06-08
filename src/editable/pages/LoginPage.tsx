import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpenText, FileSearch, LibraryBig, type LucideIcon } from 'lucide-react'
import { buildPageMetadata } from '@/lib/seo'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { EditableLocalLoginForm } from '@/editable/components/EditableLocalAuthForms'
import { pagesContent } from '@/editable/content/pages.content'

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({ path: '/login', title: 'Login', description: pagesContent.auth.login.metadataDescription })
}

export default function LoginPage() {
  return (
    <EditableSiteShell>
      <main className="relative overflow-hidden bg-[#f3ead4] text-[#241109]">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background-image:linear-gradient(rgba(98,43,20,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(98,43,20,0.055)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#995F2F]/18 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-[#978F66]/22 blur-3xl" />
        <section className="relative mx-auto grid min-h-[calc(100vh-12rem)] max-w-[var(--editable-container)] items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-16">
          <div className="rounded-[2.4rem] border border-[#622B14]/15 bg-[#241109] p-7 text-[#fff4dc] shadow-[0_28px_90px_rgba(36,17,9,0.28)] sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E4D6A9]/25 bg-[#E4D6A9]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#E4D6A9]">
              <BookOpenText className="h-4 w-4" /> {pagesContent.auth.login.badge}
            </div>
            <h1 className="mt-6 max-w-2xl font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.07em] sm:text-7xl">{pagesContent.auth.login.title}</h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#fff4dc]/72">{pagesContent.auth.login.description}</p>
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {([
                [LibraryBig, 'Return to your reading desk'],
                [FileSearch, 'Find documents faster'],
              ] satisfies Array<[LucideIcon, string]>).map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-3 rounded-[1.3rem] border border-[#E4D6A9]/18 bg-[#E4D6A9]/[0.08] p-4 text-sm font-bold text-[#fff4dc]/82">
                  <Icon className="h-5 w-5 text-[#E4D6A9]" /> {label}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.2rem] border border-[#622B14]/15 bg-[#fff8e8]/90 p-6 shadow-[0_24px_70px_rgba(98,43,20,0.14)] backdrop-blur sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[#995F2F]">Member access</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.05em]">{pagesContent.auth.login.formTitle}</h2>
            <EditableLocalLoginForm />
            <p className="mt-5 text-sm text-[#6f553f]">New here? <Link href="/signup" className="font-black text-[#622B14] underline-offset-4 hover:underline">{pagesContent.auth.login.createCta}</Link></p>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
