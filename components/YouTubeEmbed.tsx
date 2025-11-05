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
        <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      )}
      <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-blue-200 hover:border-yellow-400 shadow-md hover-glow transition-all duration-300">
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
