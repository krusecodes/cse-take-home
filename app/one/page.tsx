export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
      <div className="max-w-3xl w-full text-center font-serif text-gray-600">
        <h1 className="text-3xl text-left font-bold mb-6">Describe how you solved a challenge that one of your previous teams faced. How did you determine your solution was successful?</h1>
        
        <div className="text-left mb-8">
          <h2 className="text-2xl font-semibold mb-2">Example 1 - Engineering:</h2>
          <p className="text-base leading-relaxed mb-4">In my previous role, I worked for an influencer marketing platform called Aspire. Aspire pairs brands with influencers to create sponsored social media posts. As part of the onboarding process for brands, they had to authenticate their Facebook page, which was associated with their Instagram handle, on the platform. This enabled Aspire to track when influencers would mention or tag the brand in a post and then report on the analytics associated with that post. However, there was a problem: sometimes these posts were not tracked, even though the connection seemed to be working as intended. We received about 20 to 30 support tickets a week regarding this issue. As a domain expert in the authentication process, I worked hand in hand with the designer to create a table displaying every permission that had an outage and the troubleshooting steps the brand could take to fix the individual permissions to which Aspire no longer had access. A major contribution I made was adding an alert in the UI, so that as soon as the brand logged into the platform, if there was an issue, they would be directed to the new permissions dashboard to fix the problem. Once this feature was built, utilizing GraphQL, React, and TypeScript for the entire front end, we no longer received any support tickets regarding this issue.</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">Example 2 - Implementation and Onboarding:</h2>
          <p className="text-base leading-relaxed">Early in my career, I was the sole implementation manager for a brand-new platform at Aspire. Initially, onboarding could take up to 2 months, and this lengthy time-to-value setup resulted in a renewal rate of around 40%. I received this process from a company leader and immediately revamped it. I incorporated a survey to address initial questions and paired the first call with the login process. Upon logging in, brands would achieve their first milestone to get started. I also provided actionable homework for the subsequent calls. My overhaul of the onboarding process reduced the time from 2 months to 2 weeks, and sometimes it only took one week. This significant improvement helped increase renewal rates to 85%.</p>
        </div>

      </div>
    </main>
  )
}
