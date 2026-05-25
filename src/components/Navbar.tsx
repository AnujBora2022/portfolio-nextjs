// // import Link from "next/link";

// // function Navbar() {
// //   return (
// //     <nav></nav>
// //   )
// // }

// // export default Navbar


// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
//       <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
//         <Link href="/" className="font-semibold text-lg tracking-tight">
//           Anuj Bora
//         </Link>
//         <div className="flex items-center gap-6 text-sm text-muted-foreground">
//           <Link href="#projects" className="hover:text-foreground transition-colors">
//             Projects
//           </Link>
//           <Link href="#contact" className="hover:text-foreground transition-colors">
//             Contact
//           </Link>
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-foreground transition-colors"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }



// "use client";

// import Link from "next/link";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => setMounted(true), []);

//   return (
//     <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
//       <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
//         <Link href="/" className="font-semibold text-lg tracking-tight">
//           yourname.dev
//         </Link>
//         <div className="flex items-center gap-6 text-sm text-muted-foreground">
//           <Link href="#projects" className="hover:text-foreground transition-colors">
//             Projects
//           </Link>
//           <Link href="#contact" className="hover:text-foreground transition-colors">
//             Contact
//           </Link>
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="hover:text-foreground transition-colors"
//           >
//             GitHub
//           </a>
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               className="hover:text-foreground transition-colors text-lg"
//               aria-label="Toggle theme"
//             >
//               {theme === "dark" ? "☀️" : "🌙"}
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg tracking-tight">
        Anuj Bora
        </Link>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <a
            href="/resume.pdf"
            download
            className="hover:text-foreground transition-colors"
          >
            Resume
          </a>         
          <a
            href="https://github.com/anujbora2022"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
          
            GitHub
          </a>
          {mounted && (
            <div className="flex items-center gap-2">
              <span className="text-xs">☀️</span>
              <Switch
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
              <span className="text-xs">🌙</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}