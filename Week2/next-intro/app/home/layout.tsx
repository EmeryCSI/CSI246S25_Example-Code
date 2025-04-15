export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl">
        It is possible to have route specific layouts
      </h2>
      <p>This is coming from /home/layout.tsx</p>
      {children}
    </div>
  );
}
