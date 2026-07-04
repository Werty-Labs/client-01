import Image from 'next/image';

export function BlogHero({ title, date, image, imagePosition }: { title: string; date: string; image: string; imagePosition?: string }) {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-24 pt-40 w-full px-4 md:px-12 xl:px-24">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl">
        <span className="inline-block rounded-full px-3 py-1 bg-white/10 backdrop-blur-md text-[10px] uppercase tracking-[0.2em] font-medium text-foreground mb-6">
          {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </span>
        <h1 className="font-display1 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-none text-foreground text-balance">
          {title}
        </h1>
      </div>
    </section>
  );
}
