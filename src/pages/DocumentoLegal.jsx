import { useEffect } from 'react'
import { setPageSEO } from '@/lib/seo'

// Os textos ficam em src/docs/termos-de-uso.json e politica-de-privacidade.json.
export default function DocumentoLegal({ documento }) {
  useEffect(() => {
    setPageSEO({
      title: `${documento.title} | Progem`,
      description: `Leia ${documento.title} da Plataforma Progem.`,
    })
  }, [documento])

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 break-words">
      {documento.blocks.map((block, index) => {
        if (block.type === 'title') return (
          <h1 key={index} className="text-3xl sm:text-4xl font-bold mb-4">{block.text}</h1>
        )
        if (block.type === 'date') return (
          <p key={index} className="muted text-sm mb-8">{block.text}</p>
        )
        if (block.type === 'heading') return (
          <h2 key={index} id={block.id} className="scroll-mt-28 text-xl sm:text-2xl font-semibold mt-10 mb-5">{block.text}</h2>
        )
        if (block.type === 'toc') return (
          <p key={index} className="my-3">
            <a href={`#${block.target}`} className="underline underline-offset-4 hover:text-[var(--c-primary)]">{block.text}</a>
          </p>
        )
        return (
          <p key={index} className={`mb-4 leading-relaxed whitespace-pre-wrap ${block.level > 0 ? 'pl-5 sm:pl-8' : ''}`}>
            {block.marker && <span className="mr-2">{block.marker}</span>}{block.text}
          </p>
        )
      })}
    </article>
  )
}
