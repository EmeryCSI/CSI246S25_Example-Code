export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        This page is displayed inside of the layout. The layout component (app/layout.tsx) 
        wraps all pages in the app directory. You can see the navigation links and header 
        from the layout above this content. This page content is rendered where the 
        {" "}<code>{"{children}"}</code>{" "}
        prop appears in the layout.
      </p>
    </div>
  );
}
