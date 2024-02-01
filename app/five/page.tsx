export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="max-w-3xl w-full text-center font-serif">
      <h1 className="text-3xl text-left font-bold mb-6">Imagine that the customer from Question 4 responds with the following email. “I&apos;m so frustrated. I&apos;ve been trying to make this work for hours and I just can&apos;t figure it out. It must be a platform issue so why don&apos;t you just fix it for me instead of asking me questions.” Write a reply to the customer addressing the concerns raised.</h1>
        
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold mb-2">My Thinking</h2>
          <p className="text-base leading-relaxed mb-5">The customer is obviously very irritated. If this was becoming a repeated issue, I would immediately ensure that the account owner is aware. When renewal and NDR are the top priorities, it&apos;s important to assess where the customer is in their journey and ensure that they feel seen and heard. For instance, the first 90 days of a customer’s onboarding are typically very important and we need to make sure that we decrease time to value as much as possible so that they can be unblocked. With that said, it&apos;s also very important to teach a someone to fish so that they are empowered to fix issues on their own in the future.</p>
          <p className="text-base leading-relaxed mb-5">Also, based on the question, it seems that I have been going back and forth with the customer for a while, presumably, I have already asked them things like what error messages are you seeing? What documentation have you referenced to fix this issue? Have you seen this article yet - example.com/articleWithAnswer</p>
          <h2 className="text-2xl font-semibold mb-2">Response to Customer</h2>
          <p className="text-base leading-relaxed mb-5">Hello there, I totally understand how it feels to be blocked on an issue with what seems like no end in sight. I&apos;m sure this is very frustrating. I would love to help as much as I possibly can. As an initial idea, do you want to hop on a call to see if with a working session we could solve the issue together. On the call I would love to through the articles that I sent over, dive into the logs and errors, and help you get unblocked and find some pitfalls in our documentation to ensure that you are able to fix these issues on your own in the future. Lastly, I would love to chat through any and all feedback you have concerning this routing update that you are making so it can be communicated to the product team.</p>
          <h2 className="text-2xl font-semibold mb-2">A Note</h2>
          <p className="text-base leading-relaxed mb-5">Last note. As alluded to in the first paragraph, responses to customers like this are very nuanced. Sometimes they are more urgent based on the amount of money they are paying Vercel. For instance, if there simply was not time in the day and the user reaching out was an SMB with a very small contract, they may be getting a different response. At the end of the day though I believe that user feedback is the rocket fuel that differentiates mediocre products from exceptional ones and users like this typically have amazing feedback that can lead to drastic improvements in the product, error messaging, and documentation.</p>
        </div>

      </div>
    </main>
  )
}