export const metadata = {
  title: "Page not found | Puppy Yoga Bali Rizky",
};

export default function NotFound() {
  return (
    <main className="container section" style={{ minHeight: "70vh", display: "grid", alignContent: "center", gap: 24, justifyItems: "start" }}>
      <h1>Page not found</h1>
      <p className="lead">This page doesn&rsquo;t exist. Everything you need is on our home page.</p>
      <a className="btn btn-primary" href="/">
        Back to Puppy Yoga Bali Rizky
      </a>
    </main>
  );
}
