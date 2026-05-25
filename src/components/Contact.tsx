// export default function Contact() {
//   return (
//     <section id="contact" className="py-24 px-6">
//       <div className="max-w-5xl mx-auto">
//         <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
//           Get In Touch
//         </p>
//         <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
//           Contact
//         </h2>
//         <p className="text-muted-foreground max-w-md mb-12 leading-relaxed">
//           Have a project in mind or just want to say hi? My inbox is always open.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
//           <a
//             href="mailto:you@email.com"
//             className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
//           >
//             <span className="text-2xl">📧</span>
//             <span className="font-medium">Email</span>
//             <span className="text-muted-foreground text-sm">you@email.com</span>
//           </a>
//           <a
//             href="https://linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
//           >
//             <span className="text-2xl">💼</span>
//             <span className="font-medium">LinkedIn</span>
//             <span className="text-muted-foreground text-sm">linkedin.com/in/yourprofile</span>
//           </a>
//           <a
//             href="https://github.com/yourusername"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
//           >
//             <span className="text-2xl">🐙</span>
//             <span className="font-medium">GitHub</span>
//             <span className="text-muted-foreground text-sm">github.com/yourusername</span>
//           </a>
//           <a
//             href="https://twitter.com/yourhandle"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
//           >
//             <span className="text-2xl">🐦</span>
//             <span className="font-medium">Twitter</span>
//             <span className="text-muted-foreground text-sm">@yourhandle</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mnjrgjvb");

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-widest uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Contact
        </h2>
        <p className="text-muted-foreground max-w-md mb-12 leading-relaxed">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>

        <div className="grid grid-cols-1  gap-12">
          {/* Contact Cards */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:anujbora0990@gmail.com"
              className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>         
              
              <span className="font-medium">Email</span>
              <span className="text-muted-foreground text-sm">anujbora0990@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/anujbora2004"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              
              <span className="font-medium">LinkedIn</span>
              <span className="text-muted-foreground text-sm">linkedin.com/in/anujbora2004</span>
            </a>
            <a
              href="https://github.com/anujbora2022"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border rounded-xl p-6 hover:bg-muted/50 transition-colors flex flex-col gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>              
              <span className="font-medium">GitHub</span>
              <span className="text-muted-foreground text-sm">github.com/anujbora2022</span>
            </a>
            
          </div>

          {/* Contact Form */}
          {state.succeeded ? (
            <div className="flex items-center justify-center border border-border rounded-xl p-12">
              <div className="text-center flex flex-col gap-2">
                
                <p className="font-semibold text-lg">Message Sent!</p>
                <p className="text-muted-foreground text-sm">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="border border-border rounded-xl p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-destructive text-xs" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition-all"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-destructive text-xs" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Enter your message."
                  className="bg-background border border-border rounded-lg px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-destructive text-xs" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}