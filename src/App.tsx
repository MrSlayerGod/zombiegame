export function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-abyss relative overflow-hidden">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-crimson/[0.04] blur-[120px] pointer-events-none" />

      {/* Main content - centered logo */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        {/* Flashing red title */}
        <h1 className="animate-flash-red text-crimson text-center select-none">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
            OATHFALL
          </span>
          <span className="block mt-2 text-base sm:text-lg md:text-2xl font-bold tracking-[0.35em] uppercase">
            Rift of the Dead
          </span>
        </h1>

        {/* Tagline */}
        <p className="mt-8 text-zinc-600 text-xs sm:text-sm tracking-widest uppercase text-center">
          Coming Soon
        </p>
      </div>

      {/* Footer area - skull + socials */}
      <footer className="w-full pb-8 pt-4 flex flex-col items-center gap-6 px-4">
        {/* Skull */}
        <div className="animate-skull-pulse animate-subtle-float">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className="w-16 h-16 sm:w-20 sm:h-20"
            fill="none"
          >
            {/* Skull shape */}
            <path
              d="M32 4C18 4 8 14 8 26c0 7 3 12 7 16v6c0 2 1 3 3 3h4v4c0 1 1 2 2 2h4v3h8v-3h4c1 0 2-1 2-2v-4h4c2 0 3-1 3-3v-6c4-4 7-9 7-16C56 14 46 4 32 4z"
              fill="#dc2626"
              opacity="0.9"
            />
            {/* Left eye */}
            <ellipse cx="23" cy="26" rx="5" ry="6" fill="#050508" />
            {/* Right eye */}
            <ellipse cx="41" cy="26" rx="5" ry="6" fill="#050508" />
            {/* Nose */}
            <path d="M30 34 L32 38 L34 34 Z" fill="#050508" />
            {/* Teeth */}
            <rect x="22" y="42" width="4" height="5" rx="0.5" fill="#050508" />
            <rect x="27" y="42" width="4" height="5" rx="0.5" fill="#050508" />
            <rect x="33" y="42" width="4" height="5" rx="0.5" fill="#050508" />
            <rect x="38" y="42" width="4" height="5" rx="0.5" fill="#050508" />
            {/* Jaw line */}
            <path
              d="M20 42h24"
              stroke="#050508"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-6">
          {/* Twitter / X */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-crimson transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-crimson transition-colors duration-300"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-crimson transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-crimson transition-colors duration-300"
            aria-label="TikTok"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-zinc-800 text-[10px] tracking-widest uppercase">
          © 2025 OATHFALL
        </p>
      </footer>
    </div>
  );
}
