"use server";
export default async function Server() {
  return (
    <div>
      <h2>Server Component</h2>
      <p>This is a server component</p>
      <p>It is rendered on the server and the HTML is sent to the client.</p>
      <p>In Next.JS all the components are server components by default.</p>
      <p>We can use server actions to interact with the server.</p>
    </div>
  );
}
