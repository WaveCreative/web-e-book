function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <span>© 2026 E-Booka. Build your reading ritual.</span>
        <div className="flex items-center gap-4">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
