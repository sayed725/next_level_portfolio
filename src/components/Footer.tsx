export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/20 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Portfolio. Built with Next.js & Shadcn UI.</p>
      </div>
    </footer>
  );
}
