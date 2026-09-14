const escapeHtml = (value: string): string =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const inline = (value: string): string =>
  escapeHtml(value).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

/**
 * Converts the site's author-controlled blog markdown into HTML.
 * Content is sourced from src/data/blog-posts.ts, not user input.
 */
export const renderBlogHtml = (markdown: string): string => {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n')
  const html: string[] = []
  let inList = false
  let paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length === 0) {
      return
    }
    html.push(`<p>${inline(paragraph.join(' '))}</p>`)
    paragraph = []
  }

  const closeList = () => {
    if (!inList) {
      return
    }
    html.push('</ul>')
    inList = false
  }

  for (const raw of lines) {
    const line = raw.trim()
    if (!line) {
      flushParagraph()
      closeList()
      continue
    }
    if (line.startsWith('### ')) {
      flushParagraph()
      closeList()
      html.push(`<h3>${inline(line.slice(4))}</h3>`)
      continue
    }
    if (line.startsWith('## ')) {
      flushParagraph()
      closeList()
      html.push(`<h2>${inline(line.slice(3))}</h2>`)
      continue
    }
    if (line.startsWith('# ')) {
      flushParagraph()
      closeList()
      html.push(`<h1>${inline(line.slice(2))}</h1>`)
      continue
    }
    if (line.startsWith('- ')) {
      flushParagraph()
      if (!inList) {
        html.push('<ul>')
        inList = true
      }
      html.push(`<li>${inline(line.slice(2))}</li>`)
      continue
    }
    closeList()
    paragraph.push(line)
  }

  flushParagraph()
  closeList()
  return html.join('\n')
}
