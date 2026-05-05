interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <nav>
        <h1>My Blog</h1>
      </nav>
      <main>{children}</main>
      <footer>
        <p>© 2026</p>
      </footer>
    </div>
  );
}