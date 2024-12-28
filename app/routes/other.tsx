import { Link } from "react-router";

export default function Home() {
  return (
    <main className="grid items-center justify-center pt-16 pb-4">
      <Link to="/" className="border">
        Go back
      </Link>
    </main>
  );
}
