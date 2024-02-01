export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="max-w-3xl w-full text-center font-serif text-gray-600">
        <h1 className="text-3xl text-left font-bold mb-6">A customer has a project on Vercel and they want to redirect the /blog path to another website. Write a reply to the customer.</h1>
        
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold mb-2">My Thinking</h2>
          <p className="text-base leading-relaxed mb-5">Every time a customer reaches out they are trying to address a specific problem. My first step is to figure out what that problem is while making sure that the user is not over complicating things for themselves. Based on the question, it seems that at the moment /blog is content that is all owned and made on a single repo and hosted on Vercel, and directing could mean that the customer is now hosting /blog on an outside platform. In my answer I would attempt to help the customer as much as possible while simultaneously uncovering information that might be helpful for the CSM or whomever is the primary owner of the relationship and responsible for renewal. For instance, if /blog is moving to a website not hosted by Vercel this could be a potential red flag in terms of a possible loss of business.</p>
          <h2 className="text-2xl font-semibold mb-2">Response to Customer</h2>
          <p className="text-base leading-relaxed mb-5">Hi there, thank you so much for reaching out! To provide the best help possible I have a couple of questions for you. The question is a bit nuanced and I would have different answers based on your given situation. Are you simply trying to redirect /blog to a path that is part of your domain hosted on Vercel or are you trying to redirect /blog to a completely new website? My response could also be based on if you want all users to be redirected or just some, are you migrating to a new domain, etc. If you don’t mind giving a few more details that would be awesome.</p>
          <p className="text-base leading-relaxed mb-5">
            <a href='https://vercel.com/docs/edge-network/redirects' target='_blank'>Redirects: https://vercel.com/docs/edge-network/redirects</a>
          </p>
        </div>

      </div>
    </main>
  )
}