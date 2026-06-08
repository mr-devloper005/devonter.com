import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowRight, BookOpenText, Download, FileSearch, LibraryBig, Search, Sparkles, type LucideIcon } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditableCategory, getEditableExcerpt, getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function hrefFor(task: TaskKey, post: SitePost, route: string) {
  return postHref(task, post, route)
}

function IssueCover({ post, href, label = 'Featured document' }: { post?: SitePost; href: string; label?: string }) {
  const title = post?.title || 'Fresh PDF resources for focused reading'
  return (
    <Link href={post ? href : '/pdf'} className="group relative block min-h-[520px] overflow-hidden rounded-[2.2rem] bg-[#241109] p-5 text-[#fff4dc] shadow-[0_28px_90px_rgba(36,17,9,0.32)]">
      <img src={getEditablePostImage(post)} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-62 transition duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,17,9,0.18),rgba(36,17,9,0.9))]" />
      <div className="absolute left-5 right-5 top-5 flex items-center justify-between border-b border-[#E4D6A9]/35 pb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#E4D6A9]">
        <span>{SITE_CONFIG.name}</span>
        <span>PDF</span>
      </div>
      <div className="relative z-10 flex min-h-[480px] flex-col justify-end">
        <span className="w-fit rounded-full border border-[#E4D6A9]/30 bg-[#E4D6A9]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[#E4D6A9]">{label}</span>
        <h3 className="mt-5 max-w-2xl font-serif text-5xl font-semibold leading-[0.92] tracking-[-0.06em] sm:text-6xl">{title}</h3>
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#fff4dc]/75">{post ? getEditableExcerpt(post, 170) : 'A calm entry point for documents, notes, and useful pages.'}</p>
        <span className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#E4D6A9] px-5 py-3 text-sm font-bold text-[#241109]">
          Open reading <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  )
}

function CompactDocument({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid gap-4 rounded-[1.55rem] border border-[#622B14]/15 bg-[#fff8e8] p-4 shadow-[0_12px_35px_rgba(98,43,20,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(98,43,20,0.15)] sm:grid-cols-[92px_minmax(0,1fr)]">
      <div className="relative aspect-[3/4] overflow-hidden rounded-[1.1rem] bg-[#E4D6A9]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#995F2F]">Shelf {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-2 line-clamp-3 font-serif text-2xl font-semibold leading-tight tracking-[-0.04em]">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6f553f]">{getEditableExcerpt(post, 110)}</p>
      </div>
    </Link>
  )
}

function HorizontalBrief({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group flex min-w-[290px] max-w-[360px] shrink-0 gap-4 rounded-[1.6rem] border border-[#622B14]/15 bg-[#fff8e8]/88 p-3 shadow-[0_14px_40px_rgba(98,43,20,0.09)] transition duration-300 hover:-translate-y-1">
      <div className="relative h-28 w-24 shrink-0 overflow-hidden rounded-[1.1rem] bg-[#E4D6A9]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
      </div>
      <div className="min-w-0 py-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#995F2F]">{getEditableCategory(post)}</p>
        <h3 className="mt-2 line-clamp-3 font-serif text-xl font-semibold leading-tight tracking-[-0.04em]">{post.title}</h3>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-[#978F66]">Read {index + 1}</p>
      </div>
    </Link>
  )
}

function EditorialNote({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group border-t border-[#622B14]/20 py-6 transition hover:bg-[#E4D6A9]/25 md:grid md:grid-cols-[90px_minmax(0,1fr)_120px] md:gap-6 md:px-4">
      <p className="font-serif text-4xl text-[#995F2F]/70">{String(index + 1).padStart(2, '0')}</p>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#978F66]">{getEditableCategory(post)}</p>
        <h3 className="mt-2 font-serif text-2xl font-semibold leading-tight tracking-[-0.04em]">{post.title}</h3>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6f553f]">{getEditableExcerpt(post, 145)}</p>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#622B14] md:mt-8">
        Open <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

function ImageFirstCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-[2rem] ${index % 2 ? 'bg-[#978F66]' : 'bg-[#622B14]'} p-3 text-[#fff4dc] shadow-[0_22px_60px_rgba(98,43,20,0.18)] transition duration-300 hover:-translate-y-1`}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#E4D6A9]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-86 transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_30%,rgba(36,17,9,0.78))]" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#E4D6A9]">Image-first pick</p>
          <h3 className="mt-2 line-clamp-3 font-serif text-3xl font-semibold leading-[0.98] tracking-[-0.05em]">{post.title}</h3>
        </div>
      </div>
    </Link>
  )
}

function Rail({ children }: { children: ReactNode }) {
  return <div className="flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const heroTitle = pagesContent.home.hero.title.join(' ')
  const featured = posts[0]
  return (
    <section className="relative overflow-hidden bg-[#f3ead4]">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(98,43,20,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(98,43,20,0.055)_1px,transparent_1px)] [background-size:44px_44px]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <h1 className={`${dc.type.heroTitle} mt-5 max-w-3xl`}>{heroTitle}</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f553f]">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mt-8 flex max-w-xl flex-col gap-3 rounded-[1.75rem] border border-[#622B14]/18 bg-[#fff8e8] p-3 shadow-[0_18px_50px_rgba(98,43,20,0.11)] sm:flex-row">
            <label className="flex min-w-0 flex-1 items-center gap-3 px-3">
              <Search className="h-5 w-5 text-[#995F2F]" />
              <input name="q" type="search" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent py-3 text-sm font-semibold outline-none placeholder:text-[#846f55]" />
            </label>
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#622B14] px-5 py-3 text-sm font-bold text-[#fff4dc]">
              Search <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryRoute} className={dc.button.primary}>Browse {taskLabel(primaryTask).toLowerCase()} <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/pdf" className={dc.button.secondary}>Open PDF library</Link>
          </div>
        </div>
        <IssueCover post={featured} href={featured ? hrefFor(primaryTask, featured, primaryRoute) : '/pdf'} />
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(1, 13)
  if (!railPosts.length) return null
  return (
    <section className="relative border-y border-[#622B14]/15 bg-[#241109] py-12 text-[#fff4dc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E4D6A9]">Current shelf</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Fresh documents and notes</h2>
          </div>
          <Link href={primaryRoute} className="inline-flex items-center gap-2 rounded-full border border-[#E4D6A9]/25 px-5 py-3 text-sm font-bold text-[#E4D6A9]">View all <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <Rail>
          {railPosts.map((post, index) => <HorizontalBrief key={post.id || post.slug} post={post} href={hrefFor(primaryTask, post, primaryRoute)} index={index} />)}
        </Rail>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 7)
  if (!featured.length) return null
  const lead = featured[0]
  return (
    <section className="bg-[#f8f1de]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <IssueCover post={lead} href={hrefFor(primaryTask, lead, primaryRoute)} label="Editor selection" />
          <div className="rounded-[2rem] border border-[#622B14]/15 bg-[#fff8e8]/80 p-5 sm:p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#622B14] text-[#fff4dc]"><LibraryBig className="h-5 w-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#995F2F]">Reading index</p>
                <h2 className="font-serif text-3xl font-semibold tracking-[-0.04em]">Browse with a magazine rhythm</h2>
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              {featured.slice(1, 5).map((post, index) => <CompactDocument key={post.id || post.slug} post={post} href={hrefFor(primaryTask, post, primaryRoute)} index={index} />)}
            </div>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {featured.slice(4, 7).map((post, index) => <ImageFirstCard key={post.id || post.slug} post={post} href={hrefFor(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const sectionPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(7)
  const notes = sectionPosts.slice(0, 8)
  return (
    <section className="relative overflow-hidden bg-[#E4D6A9]">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#995F2F]/20 blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#995F2F]">Find a document</p>
          <h2 className="mt-3 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em]">Search-first discovery for busy readers.</h2>
          <p className="mt-5 text-base leading-8 text-[#6f553f]">Use the archive like a polished reading desk: search by keyword, scan categories, then open the resource that fits the moment.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {([
              [FileSearch, 'Searchable resources'],
              [Download, 'PDF-ready pages'],
              [BookOpenText, 'Focused reading'],
            ] satisfies Array<[LucideIcon, string]>).map(([Icon, label]) => (
              <div key={label} className="flex items-center gap-3 rounded-[1.25rem] border border-[#622B14]/15 bg-[#fff8e8]/70 p-4 text-sm font-bold">
                <Icon className="h-5 w-5 text-[#995F2F]" /> {label}
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-[2rem] border border-[#622B14]/15 bg-[#fff8e8] p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4 border-b border-[#622B14]/15 pb-5">
            <h2 className="font-serif text-3xl font-semibold tracking-[-0.04em]">Editorial list</h2>
            <Sparkles className="h-5 w-5 text-[#995F2F]" />
          </div>
          <div>
            {notes.map((post, index) => <EditorialNote key={post.id || post.slug} post={post} href={hrefFor(primaryTask, post, primaryRoute)} index={index} />)}
            {!notes.length ? <p className="py-8 text-sm text-[#6f553f]">Fresh resources will appear here once posts are available.</p> : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="relative overflow-hidden bg-[#622B14] text-[#fff4dc]">
      <div className="pointer-events-none absolute inset-0 [background-image:radial-gradient(circle_at_20%_20%,rgba(228,214,169,0.22),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(151,143,102,0.25),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#E4D6A9]">Continue reading</p>
          <h2 className="mt-4 font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.055em] sm:text-6xl">A calmer place to open, scan, and return to useful documents.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#fff4dc]/74">Explore PDFs, supporting posts, and related sections through a warm editorial interface built for public browsing.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/pdf" className="inline-flex items-center gap-2 rounded-full bg-[#E4D6A9] px-7 py-3.5 text-sm font-bold text-[#241109]">Browse PDFs <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#E4D6A9]/25 px-7 py-3.5 text-sm font-bold text-[#E4D6A9]">Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
