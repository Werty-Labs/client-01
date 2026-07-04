import Image from 'next/image';

export function BlogHero({ title, date, image, imagePosition }: { title: string; date: string; image: string; imagePosition?: string }) {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-end pb-16 md:pb-24 pt-40 w-full px-4 md:px-12 lg:px-24 xl:px-32">
      {/* Edge-gradient pattern for cinematic fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: imagePosition || 'center' }}
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="inline-block rounded-full border border-[#0B3B24]/15 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#0B3B24] dark:text-zinc-200 shadow-sm mb-6">
          {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
        <h1 className="font-display1 text-4xl md:text-6xl lg:text-7.5xl font-bold tracking-tighter leading-[0.95] text-[#0B3B24] dark:text-white text-balance">
          {title}
        </h1>
      </div>
    </section>
  );
}
