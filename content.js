/*
 * All site content lives here. Edit this file to fill in sections as the work comes in.
 * Each step: active:false greys it out on the home page ("coming later").
 * Put finished work in a section's `findings` array (list of strings); it replaces the placeholder.
 */
window.PLAN = {
  goal: "Reimagine the Houston Astros’ large group ticket sales marketing plan",

  // Scope text broken into pieces; pieces with `step` are highlighted and link to that section.
  scope: [
    { t: "To " },
    { t: "reimagine the Houston Astros large group ticket sales marketing plan", step: 0 },
    { t: " through " },
    { t: "creative designs", step: 5 },
    { t: " and " },
    { t: "strategic value propositions", step: 4 },
    { t: ", thus creating a " },
    { t: "modular pitch that can be automated to outreach", step: 6 },
    { t: " with " },
    { t: "local elementary & middle schools, non-profits, and church communities", step: 3 },
    { t: ", ultimately " },
    { t: "increasing the quantity and frequency of large group outings and events", step: 2 },
    { t: " at Daikin Park." },
  ],

  steps: [
    { n: 1, id: "situation", title: "Situational Analysis", short: "Where the Astros stand today", active: false, week: "Coming later", color: "--muted" },
    { n: 2, id: "goals", title: "Goals & Objectives", short: "What success looks like, in measurable terms", active: true, week: "From kickoff", color: "--s2" },
    { n: 3, id: "audience", title: "Target Audience", short: "Who we’re trying to bring to Daikin Park", active: true, week: "Week 2 work", color: "--s3" },
    { n: 4, id: "value", title: "Value Proposition", short: "Why them, why us", active: true, week: "Week 3 work", color: "--s4" },
    { n: 5, id: "mix", title: "Marketing Mix", short: "Activation strategy: how we attract them", active: true, week: "In progress", color: "--s5" },
    { n: 6, id: "channels", title: "Channels & Outreach", short: "How we reach them, including automation", active: true, week: "Week 4 work", color: "--s6" },
    { n: 7, id: "budget", title: "Budget & Resources", short: "What it costs and who runs it", active: false, week: "Coming later", color: "--muted" },
    { n: 8, id: "timeline", title: "Timeline & Metrics", short: "When it launches and how we measure it", active: false, week: "Coming later", color: "--muted" },
  ],

  sections: {
    goals: {
      intro: "What the reimagined plan has to achieve. Everything else in the plan should move one of these numbers.",
      blocks: [
        { h: "From the scope", items: ["Increase the quantity of large group outings and events at Daikin Park", "Increase the frequency, so groups come back"] },
        { h: "From P.J. (kickoff)", items: ["Priority is new business: groups that haven’t come before", "Get more groups to “raise their hand” so a small sales team (14–16 people, down from ~60) can take it from there", "Faith & Family Day fell from 5,000–6,000 group tickets to under 1,000: a clear benchmark"] },
        { h: "Draft objectives (to make measurable)", items: ["New groups booked per season: target TBD", "Share of groups that rebook within 12 months: target TBD", "Group tickets on stacked theme nights: target TBD", "Leads generated per rep hour: target TBD"] },
      ],
      findings: [],
    },

    audience: {
      week: "Week 2",
      intro: "Who the plan is for. Research from Week 2 goes here.",
      largeGroup: {
        h: "What counts as a “large group”?",
        items: [
          "Astros group tickets start at 20 people (verify current minimum).",
          "Online self-booking covers 20–100 tickets; larger groups work directly with a group sales representative.",
          "Working definition for our plan: an organized group of 20+ people attending the same game together, planned by one organizer.",
          "Open question: should we set a higher bar (e.g., 50+ or 100+) for what we call “large” in the final plan?",
        ],
      },
      groups: [
        { h: "Nonprofit organizations", note: "In scope: core of the plan", items: ["Elementary & middle schools", "Church communities", "Nonprofits (incl. youth sports leagues)"] },
        { h: "Non-org / for-profit", note: "Outside P.J.’s three segments: reference only", items: ["Businesses & corporate outings", "Unions & workplaces", "Clubs & friend groups"] },
        { h: "Demographic communities", note: "Run across all segments", items: ["Hispanic / Latino community", "Youth & young families", "Other communities (TBD)"] },
      ],
      findings: [],
    },

    value: {
      week: "Week 3",
      intro: "A value proposition answers two questions: why do the Astros want this group (why them), and why should this group choose an Astros game (why us)?",
      framework: "Who they are + what they value + what we offer = why they come",
      global: {
        h: "Global: baseball in general",
        vp: "An easy, affordable way to give your people a shared experience they’ll remember, with recognition and perks they can’t get buying tickets on their own.",
        items: ["Togetherness: sit together; baseball’s pace makes it social", "Value: group rate, often no fees, bundled food", "Recognition: scoreboard, anthem, on-field moments", "Ease: one rep, digital tickets", "Purpose: fundraising, rewards, celebrating community", "81 home games: flexible dates, weekday day games"],
      },
      astros: {
        h: "Astros-specific",
        today: "“Bring your group for an outing that promotes teamwork and camaraderie”, plus group rate, no fees, renewal priority, loaded value. Written for businesses; doesn’t mention community.",
        draft: "Daikin Park is Houston’s gathering place. We’ll help your school, congregation or nonprofit turn an Astros game into a day your people are celebrated, not just seated.",
      },
      findings: [],
    },

    mix: {
      intro: "The activation strategy: how we actually attract each audience. Four levers.",
      parts: [
        { h: "Price", q: "What does it cost, and how do we make it feel worth it?", ideas: ["Group rates & no fees", "Fundraising splits (extend Future Astros $5 model)", "Deposits & payment terms", "Compete on value, not discounts"] },
        { h: "Place", q: "Where and how do groups buy and experience it?", ideas: ["Online booking vs. rep", "Private / open group sections", "Weekday & day games for schools", "Daikin Park as a destination"] },
        { h: "Promotion", q: "What do we say and show to get attention?", ideas: ["Theme nights stacked with group nights", "Exclusive group merchandise / giveaways", "Creative & visual refresh", "Social content"] },
        { h: "Position", q: "How do we want groups to see an Astros outing?", ideas: ["Houston’s community gathering place", "Celebrated, not just seated", "Different from the zoo, museum, other teams"] },
      ],
      findings: [],
    },

    channels: {
      week: "Week 4",
      intro: "How we reach each audience, and how much of it can be automated. The scope’s “modular pitch that can be automated” lives here.",
      blocks: [
        { h: "Outreach methods to research", items: ["What works for group sales in MLB, NFL, MLS, NBA", "Email (personalized vs. templated), LinkedIn, social, text", "Connector organizations (districts, dioceses, nonprofit networks)"] },
        { h: "Automation", items: ["Astros already use AI chat (Satisfi) for single tickets: extend to groups?", "Standardized vs. personalized pitch: A/B test (P.J.)", "Personalized invitation links (prototype built)"] },
      ],
      findings: [],
    },
  },
};
