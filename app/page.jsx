const pages = [
  { number: 1, src: '/newsletter/page-1.jpg', title: 'Нүүр хуудас' },
  { number: 2, src: '/newsletter/page-2.jpg', title: 'СИИ сургалтын хэрэгжилт' },
  { number: 3, src: '/newsletter/page-3.jpg', title: 'Багшийн сайн туршлага' },
  { number: 4, src: '/newsletter/page-4.jpg', title: 'Баярмаа багшийн булан' },
  { number: 5, src: '/newsletter/page-5.jpg', title: 'СИИ хөтөлбөр: Багш хамтран суралцагч болох нь' },
  { number: 6, src: '/newsletter/page-6.jpg', title: 'Судалгааны үйл ажиллагаа' },
  { number: 7, src: '/newsletter/page-7.jpg', title: 'Чөлөөт булан' },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="hero" id="top">
        <div className="brand-row">
          <div>
            <p className="eyebrow">SEE Learning Mongolia</p>
            <h1>СИИ-н гэр бүл өргөжсөөр байна</h1>
          </div>
          <span className="issue-badge">2026 оны тавдугаар сар</span>
        </div>

        <p className="intro">
          Сэтгэл, оюуны боловсролыг монгол хүүхэд бүрт хүргэх зорилготой СИИ сургалтын сонины бүрэн дугаар.
        </p>

        <nav className="page-nav" aria-label="Newsletter pages">
          {pages.map((page) => (
            <a key={page.number} href={`#page-${page.number}`}>Нүүр {page.number}</a>
          ))}
        </nav>
      </header>

      <section className="reader" aria-label="Full newsletter pages">
        {pages.map((page) => (
          <article className="page-card" id={`page-${page.number}`} key={page.number}>
            <div className="page-toolbar">
              <div>
                <span className="page-number">Нүүр {page.number}</span>
                <h2>{page.title}</h2>
              </div>
              <a className="top-link" href="#top">Дээш очих</a>
            </div>

            <img
              src={page.src}
              alt={`SEE Learning Mongolia newspaper page ${page.number}: ${page.title}`}
              className="newsletter-page"
            />
          </article>
        ))}
      </section>

      <footer className="footer">
        <p>SEE Learning Mongolia · Сэтгэл, оюуны боловсролыг монгол хүүхэд бүрт</p>
      </footer>
    </main>
  );
}
