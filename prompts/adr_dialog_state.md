You're a Senior Software Architect with deep experience in frontend platforms, distributed UI systems, and large-scale web applications.
I'm currently designing a high-scale React application composed of microfrontends with a Backend-for-Frontend layer. We're expecting thousands of concurrent users, so we're optimizing for resilience, performance, and fast delivery cycles.
Let me lay out the context so we can think through this together.
Objectives:
High availability and fault isolation across microfrontends
Great performance metrics (Core Web Vitals: LCP, FID, CLS)
Short lead time for releasing features

Constraints and Requirements:
Microfrontends are owned by separate teams and deployed independently
Some global state needs to be shared across them: user session data, feature flags, cached API responses or personalization data 

We're currently evaluating:
React props/context
Redux (with or without RTK)
Zustand
Open to other approaches if they offer better trade-offs at this scale

What I'd like to get your take on:
What global state strategy would you recommend given this setup? Would you go with a single approach, or a hybrid model?
What concerns should we keep in mind regarding performance (especially hydration, serialization, bundle size, or cross-MFE communication)?
Any design patterns or infrastructure setups you've seen work well for syncing state across independently deployed frontends?
Are there any architectural decisions we should clarify early (e.g., how we're composing MFEs - Module Federation vs iframe vs Edge stitching, or whether BFF will handle certain responsibilities)?
If you need more context on how we plan to deploy, where state is stored (client/server/cache), or how users interact across the different MFEs, let me know and I can fill that in.

Let's reason this through like we're both on the architecture board.