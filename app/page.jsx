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
    <main>
      {pages.map((page) => (
        <img
          key={page.number}
          src={page.src}
          alt={page.title}
        />
      ))}
    </main>
  );
}
