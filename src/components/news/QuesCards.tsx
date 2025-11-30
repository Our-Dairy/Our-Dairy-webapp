import Cards from './Cards';

export default function QuesCards() {
  return (
    <section>
      <div className="mb-8 text-center">
        <h3 className="text-sm text-green-500 font-medium mb-2">Our News</h3>
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
          Our Latest News <br className="hidden md:block" /> That Can Help You
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Explore insightful articles that can enrich your knowledge and keep you informed about the latest happenings.
        </p>
      </div>
      <Cards />
    </section>
  );
}
