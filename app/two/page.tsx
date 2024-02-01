export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="max-w-3xl w-full text-center font-serif">
        <h1 className="text-3xl text-left font-bold mb-6">How would you compare Next.js with another framework? Feel free to compare with a framework of your choice.</h1>

        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold mb-2">Next.js vs Angular</h2>
          <h2 className="text-2xl font-semibold mb-4">Rendering</h2>
          <p className="text-base leading-relaxed mb-5">
            Next.js, especially with its latest App Router architecture, predominantly renders components on the server side. This feature significantly boosts SEO for any website or application, as server-side rendering ensures that the HTML content is readily accessible to web crawlers. Additionally, this approach is particularly beneficial for content-heavy applications. Server-side rendering allows content to be pre-rendered, meaning that if a page is refreshed, it can be retrieved from the cache without needing to be reloaded, enhancing performance and user experience.

            On the other hand, Angular primarily employs client-side rendering. While server-side rendering is possible with Angular, it requires a more comprehensive setup process and is not as straightforward as with Next.js. In Next.js, the choice between server-side and client-side rendering is more seamless and user-friendly from the initial setup. </p>
          <h2 className="text-2xl font-semibold mb-4">Pace of Updates</h2>
          <p className="text-base leading-relaxed mb-5">
            Keeping up with the trends and updates from Angular and Next.js, it is evident that new features are built and shipped for Next.js much more often than Angular. Angular is a bit of a thing of the past, being utilized by very few up and coming companies today.</p>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="text-base leading-relaxed mb-5">
            The contrast in the quality of documentation between Vercel for Next.js and Google for Angular is remarkable. When faced with a specific problem, Vercel provides exceptional documentation, available in both video and written formats. This resource not only covers features comprehensively but also helps users navigate common pitfalls effectively. In contrast, locating the necessary information for Angular via Google can be more challenging.</p>
          <h2 className="text-2xl font-semibold mb-4">Documentation</h2>
          <p className="text-base leading-relaxed mb-5">
            The contrast in the quality of documentation between Vercel for Next.js and Google for Angular is remarkable. When faced with a specific problem, Vercel provides exceptional documentation, available in both video and written formats. This resource not only covers features comprehensively but also helps users navigate common pitfalls effectively. In contrast, locating the necessary information for Angular via Google can be more challenging.</p>
          <h2 className="text-2xl font-semibold mb-4">Customization</h2>
          <p className="text-base leading-relaxed mb-5">
            Next.js offers a more flexible setup compared to Angular. While it does provide structured guidance on routing, its foundation on React&#39;s library gives developers the freedom to tailor the setup with their choice of npm packages. In contrast, Angular comes with a more extensive suite of built-in tools, encompassing forms, HTTP client, animations, and others, offering a more comprehensive out-of-the-box experience.</p>
        </div>

      </div>
    </main>
  )
}
