import SearchBar from "./_components/search-bar";

export default function Home() {
  return (
    <main className="md:container md:mx-auto px-4 py-6">
      <h1 className="prose prose-2xl text-neutral mb-3">Search characters</h1>
      <SearchBar />
    </main>
  );
}
