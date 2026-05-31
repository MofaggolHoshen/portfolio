import { Tag } from '../ui/Tag'
import { SectionHeader } from '../ui/SectionHeader'
import { BLOG_POSTS } from '../../data/content'

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function BlogPreview() {
  return (
    <section
      id="blog"
      className="bg-[--color-subtle] px-8 py-20 max-sm:px-5 max-sm:py-14"
      aria-labelledby="blog-heading"
    >
      <SectionHeader
        eyebrow="Writing"
        title="From the Blog"
        subtitle="Thoughts on frontend, tooling, and building for the web."
      />
      <ul className="flex flex-col gap-6 list-none m-0 p-0">
        {BLOG_POSTS.map((post) => (
          <li key={post.id}>
            <a
              href={`/blog/${post.slug}`}
              className="group block bg-[--color-canvas] border border-[--color-line] rounded-xl p-6 no-underline transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-[--color-accent] focus-visible:outline-offset-2"
            >
              <div className="flex items-center gap-4 mb-3 flex-wrap">
                <time dateTime={post.date} className="text-sm text-[--color-muted]">
                  {formatDate(post.date)}
                </time>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[--color-strong] mb-2 group-hover:text-[--color-accent] transition-colors">
                {post.title}
              </h3>
              <p className="text-[--color-muted] leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-sm font-medium text-[--color-accent]" aria-hidden="true">
                Read more →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
