'use client';

interface ReferenceLinkProps {
  href: string;
  title: string;
  source?: string;
  description?: string;
}

export default function ReferenceLink({ href, title, source, description }: ReferenceLinkProps) {
  // Kiểm tra nếu href là "#" hoặc rỗng thì không cho click
  const isPlaceholder = href === '#' || !href;
  
  return (
    <a
      href={isPlaceholder ? undefined : href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noopener noreferrer"}
      onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
      className={`block bg-[#1a1a1a] border border-[#3a3a3a] rounded-lg p-4 transition-all duration-300 group ${
        isPlaceholder 
          ? 'cursor-not-allowed opacity-60' 
          : 'hover:border-[#ffd700] hover:bg-[#2a2a2a] cursor-pointer'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-1">
          <svg 
            className="w-5 h-5 text-[#ffd700] group-hover:scale-110 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h5 className="text-white font-semibold group-hover:text-[#ffd700] transition-colors mb-1">
            {title}
          </h5>
          {source && (
            <p className="text-xs text-gray-400 mb-1">{source}</p>
          )}
          {description && (
            <p className="text-sm text-gray-300 line-clamp-2">{description}</p>
          )}
          <p className="text-xs text-[#ffd700] mt-2 flex items-center gap-1">
            Đọc thêm
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </div>
      </div>
    </a>
  );
}

