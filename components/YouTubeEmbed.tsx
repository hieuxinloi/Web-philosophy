'use client';

interface YouTubeEmbedProps {
  videoId: string;
  startTime?: number;
  title?: string;
}

export default function YouTubeEmbed({ videoId, startTime, title }: YouTubeEmbedProps) {
  const embedUrl = `https://www.youtube.com/embed/${videoId}${startTime ? `?start=${startTime}` : ''}`;
  
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold text-[#ffd700] mb-4">{title}</h3>
      )}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-[#3a3a3a] hover-glow">
        <iframe
          src={embedUrl}
          title={title || 'YouTube video player'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
