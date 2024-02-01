export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="max-w-3xl w-full text-center font-serif text-gray-600">
        <h1 className="text-3xl text-left font-bold mb-6">A customer is creating a site and would like their project not to be indexed by search engines.</h1>

        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold mb-2">My Thinking</h2>
          <p className="text-base leading-relaxed mb-5">Any interaction with a customer is an opportunity to learn more about how they are utilizing our product and a potential way to get product feedback, which I believe is the lifeblood to building a wonderful product. With that being said, I would first ask a question or two and then provide an answer.</p>
          <h2 className="text-2xl font-semibold mb-2">Response to Customer</h2>
          <p className="text-base leading-relaxed mb-5">Hi there, Thank you so much for reaching out! No pressure on a response here, but would you mind me asking why you do not want your project to be indexed by search engines? I would love to know simply for product feedback.</p>
          <p className="text-base leading-relaxed mb-5">To ensure that all of your pages are not index by search engines, be sure to implement this at the highest level component and that way all pages will not be indexed. In your head tags you can add noindex,nofollow. In the article below you will see examples of how this can be utilized. Let me know if you have any questions or feedback!</p>
          <p className="text-base leading-relaxed mb-5">
            <a href='https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/metatags' target='_blank'>Indexing: https://nextjs.org/learn-pages-router/seo/crawling-and-indexing/metatags</a>
          </p>
        </div>

      </div>
    </main>
  )
}