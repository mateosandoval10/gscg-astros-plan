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


  themes: {
    outreach: { name: "Outreach & Automation", color: "#1F5FA8" },
    marketing: { name: "Marketing & Creative", color: "#7B3FA0" },
    community: { name: "Demographics & Community", color: "#1E7A4C" },
    nights: { name: "Theme Nights & Promotions", color: "#C2410C" },
    experience: { name: "Group Experience & Perks", color: "#B8860B" },
    demand: { name: "Pricing & Demand", color: "#4A5568" },
  },

  steps: [
    { n: 1, id: "situation", title: "Situational Analysis", short: "Where the Astros stand today", active: true, week: "Week 2 audit", color: "--s1" },
    { n: 2, id: "goals", title: "Goals & Objectives", short: "What success looks like, in measurable terms", active: true, week: "From kickoff", color: "--s2" },
    { n: 3, id: "audience", title: "Target Audience", short: "Who we’re trying to bring to Daikin Park", active: true, week: "Weeks 2–3 work", color: "--s3" },
    { n: 4, id: "value", title: "Value Proposition", short: "Why them, why us", active: true, week: "Week 3 work", color: "--s4" },
    { n: 5, id: "mix", title: "Marketing Mix", short: "Activation strategy: how we attract them", active: true, week: "In progress", color: "--s5" },
    { n: 6, id: "channels", title: "Channels & Outreach", short: "How we reach them, including automation", active: true, week: "Week 4 (next) · early findings in", color: "--s6" },
    { n: 7, id: "budget", title: "Budget & Resources", short: "What it costs and who runs it", active: false, week: "Coming later", color: "--muted" },
    { n: 8, id: "timeline", title: "Timeline & Metrics", short: "When it launches and how we measure it", active: false, week: "Coming later", color: "--muted" },
  ],

  sections: {

    situation: {
      week: "Week 2",
      intro: "Where the Astros stand today: an internal audit of their large group ticket marketing, compared with industry leaders (Padres, Red Sox).",
      bigPicture: [
        ["Strong product, weak outreach.", "The theme nights and experiences are there; the pitch and the outreach aren’t."],
        ["Nobody is reaching new groups.", "Outreach goes to past buyers, but P.J.’s priority is new business."],
        ["Old-school methods, young audience.", "Group sales still lean on calls, generic email and a web form."],
        ["Value beats price.", "Perks, food, recognition and timing move groups more than discounts."],
        ["Stack and personalize.", "Pair group nights with theme nights and make every group feel individually wanted."],
      ],
      sgo: {
        Strengths: [
          ["outreach", "Already using AI.", "Satisfi Labs’ AI chat sold $232K of single-game tickets (2022) and saved 11,000+ staff hours."],
          ["outreach", "Paced emails work.", "Every 2–3 weeks, listing theme nights and fireworks, felt like “the right amount” to a church group buyer."],
          ["nights", "Deep theme-night calendar.", "Faith & Family, Hello Kitty (×2), Star Wars, Peanuts, Marvel, Dog Day (×2), Hispanic Heritage, Friday Night Fireworks and more."],
          ["nights", "Proven winners.", "Hello Kitty, Hispanic Heritage Weekend, Dog Day (sold out). Formula: specific community + desirable item + repeated yearly."],
          ["community", "Affinity nights exist.", "UH, Aggie, Abilene Christian, Strake Jesuit, Law Enforcement nights."],
          ["community", "Youth fundraising model.", "Future Astros gives $5 per ticket back to youth leagues."],
          ["experience", "Group benefits.", "Group rate, no fees, renewal priority, loaded value."],
          ["experience", "Memorable add-ons.", "Anthem, color guard, Performance of the Game, nonprofit concourse table, hospitality spaces."],
        ],
        Gaps: [
          ["outreach", "Passive, phone-heavy outreach.", "Groups must find a form, phone or email on their own; no proactive discovery."],
          ["outreach", "No outreach to people who haven’t bought before.", "If new groups aren’t reached, they don’t come."],
          ["outreach", "AI only for single tickets.", "Satisfi isn’t used for group inquiries."],
          ["outreach", "Old-school methods.", "Cold calls ≈2.3% success; ≈91% of cold emails get no reply (industry figures)."],
          ["marketing", "No pitch on the website.", "The group page is a form; the Red Sox explain each experience and its ticket minimum."],
          ["marketing", "Invisible on social.", "No group sales promotion on Instagram, Facebook, TikTok, LinkedIn or X."],
          ["marketing", "Dated visuals.", "Far less polished than the Padres."],
          ["community", "A young, diverse city not being reached.", "Houston is young and ≈44% Latino; current outreach doesn’t reach them."],
          ["nights", "Faith & Family Day collapsed.", "5,000–6,000 group tickets → under 1,000."],
          ["experience", "Few rewards for groups.", "Giveaways go to the first fans through the gate; nothing for group buyers."],
          ["demand", "Attendance is falling.", "≈2.47M in 2026 (≈30,500/game), down ≈580K since 2023."],
        ],
        Opportunities: [
          ["outreach", "Personalize; never copy-paste.", "Personalized and AI-assisted email reportedly ≈29% higher opens; LinkedIn + email + calls = 2–3× responses."],
          ["outreach", "Extend AI chat to groups.", "A 24/7 “raise your hand” assistant that routes groups to reps."],
          ["outreach", "Connector organizations.", "The Padres reserved 900 tickets for FCA on Faith & Family Night."],
          ["marketing", "Social and visual refresh.", "Padres-level visuals across TikTok, Instagram, Facebook, LinkedIn."],
          ["nights", "Stack group nights onto theme nights.", "Churches on Faith & Family, schools on Kids Day, nonprofits on cause nights."],
          ["nights", "Theme nights recruit new fans.", "56% of 2025 theme-game attendees were first-time buyers."],
          ["experience", "Exclusive group merchandise.", "Targeted giveaways on stacked nights can pay for themselves (see giveaway cost-benefit)."],
          ["experience", "Make groups feel welcome.", "Private section, food card, ribbon-board recognition."],
          ["demand", "Compete on value, not price.", "Demand is near unit elastic (≈ −0.83)."],
        ],
      },
      numbers: [
        ["Astros 2026 attendance", "≈2.47M · ≈30,520/game (≈74% capacity)"],
        ["Faith & Family Day group tickets", "5,000–6,000 → under 1,000"],
        ["Promotion attendance lift", "≈ +14% per promotion game"],
        ["Astros bobblehead giveaways, 2026", "2 (league: 179)"],
        ["Price sensitivity", "≈ −0.83 (near unit elastic)"],
      ],
    },
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
      intro: "Who the plan is for: who counts as a large group, the audience groups, and our demographic research.",
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
      findings: [
        { h: "Hispanic & Latino community (runs across all segments)", items: ["≈60–76% of Houston public-school students are Hispanic (source needed)", "Hispanic-serving orgs: AVANCE (parents & young children, education-first), National Hispanic Institute (student leaders, 100+ high schools), Latino Learning Center", "Other Houston teams go further: Texans weave Hispanic themes across games (Somos Texans); Dynamo & Dash host Noche Latina; Padres sell out Hispanic Heritage Weekend"] },
        { h: "Youth sports (within nonprofits)", items: ["Astros already run Youth Academy (ages 7–17), Nike RBI, Buddies Kids Club, Bruce Bolt College Classic, Bob Watson Invitational", "Perfect Game Texas and traveling club teams create tournament overlap with home games"] },
        { h: "Schools", items: ["Contacts: teachers, administrators, coaches, PTOs/PTAs", "Want: celebrate the school community, recognition, educational purpose, special events", "Astros offer educational tours (grades 1–8; Career Day, STEM, Scavenger Hunt grade 6+) and 10 × $10K STEAM scholarships (10 schools in 2025)"] },
        { h: "Church groups", items: ["Houston has 37–40 megachurches; Lakewood draws 45,000–52,000 a week (5% ≈ 2,250–2,600 tickets)", "Episcopal Diocese of Texas runs its own annual Episcopal Night at the Ballpark (pre-game meal, food drive): demand exists, churches do the organizing", "Joel Osteen threw out the first pitch on Faith & Family Night (2012)"] },
        { h: "Nonprofits", items: ["5,414 registered Houston nonprofits (likely undercount; verify)", "Contacts: development/executive directors, event coordinators, volunteer leaders", "Want: visibility for their cause, fundraising, a thank-you for members; tight budgets", "Astros offer charity tickets, Wins for Kids grants, the annual charity game"] },
      ],
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
      definition: "A concise statement that explains why a customer should choose a product or service over alternatives, highlighting its unique benefits and the problems it solves. For us: why choose the Astros over the competition?",
      parts: [["Target audience", "Who is the demographic?"], ["Problem", "What is their pain point or need?"], ["Offer", "What do we offer: theme nights, activation strategies, perks?"], ["Value", "What benefits do they get, and what do the Astros get?"]],
      vps: [
        { name: "Hispanic & Latino Community", seg: "Across all segments", theme: "community", audience: "Latino families, students, and Hispanic-serving orgs (AVANCE, NHI, Latino Learning Center)", problem: "Heritage celebrated one weekend a year; families want affordable, educational, family-centered outings", offer: "Bilingual educational game-day activities, scholarship night, on-field recognition, ticket-proceeds share, reading-log rewards", value: "Them: culture celebrated, students recognized. Astros: group sales and a lasting fan base", statement: "Houston’s Hispanic and Latino community brings a deeper sense of inclusivity and community to Daikin Park. By celebrating culture and supporting the next generation of Hispanic students, the Astros can build a stronger, lasting relationship with Houston’s Latino community, and every new way they include it brings more fans to the ballpark." },
        { name: "Youth Sports Teams", seg: "Within nonprofits", theme: "nights", audience: "Club and school baseball/softball teams, families, coaches; Perfect Game Texas; traveling teams", problem: "Young athletes want to feel seen by their heroes; traveling teams need things to do between games", offer: "Youth Sports Night (uniforms, videoboard recognition), behind-the-scenes access, merch discounts, tournament-linked group discounts", value: "Them: recognition and memories. Astros: fans for life and repeat visits", statement: "Youth sports are the future of professional baseball. When the Astros show up for young athletes, kids feel supported by the players they look up to and fall deeper in love with the game, and those kids and their families keep coming back to support a team that supports them." },
        { name: "Schools", seg: "Core segment", theme: "outreach", audience: "Teachers, administrators, coaches, PTOs/PTAs and their students", problem: "Want outings that celebrate the school, recognize students and have educational purpose", offer: "Educational/STEM tours, scholarship night, Graduation Night, student recognition, reading-log rewards", value: "Them: a memorable educational outing. Astros: large ticket blocks and returning families", statement: "For Houston-area schools seeking meaningful outings, an Astros game delivers on-field experiences, exciting educational opportunities and recognition for students. The Astros are committed to welcoming schools to Daikin Park, giving educators and students the chance to celebrate together in a world-class ballpark." },
        { name: "Church Groups", seg: "Core segment · draft from team ideas", theme: "experience", audience: "Congregations, youth pastors, ministry leaders; 37–40 megachurches like Lakewood", problem: "Want fellowship, a meal and giving back, and must organize ballpark outings themselves", offer: "Family Feast Night (meal, own section, early field access), church youth nights, charitable tie-in", value: "Them: fellowship a church BBQ can’t match. Astros: thousands of tickets from one relationship", statement: "For Houston churches looking for fellowship beyond Sunday, an Astros game offers what a church barbecue can’t: a shared meal, the whole congregation seated together, and a big-league experience their members will remember. The Astros handle the details, so ministries can focus on bringing their people together." },
        { name: "Nonprofits", seg: "Core segment", theme: "demand", audience: "Development/executive directors and volunteer leaders at Houston nonprofits", problem: "Tight budgets; competing for attention and donor dollars", offer: "Charity tickets, grants, charity game, recognition, concourse tables, fundraising splits", value: "Them: awareness, funds, a volunteer thank-you. Astros: community impact that becomes group sales", statement: "The Houston Astros give nonprofits a major platform to spread awareness for their cause, raise significant funds and celebrate the work of their members and volunteers. The Astros are dedicated to local community impact and to making sure every nonprofit member can enjoy an affordable day at the ballpark." },
      ],
      watch: ["Strengthen the “why us”: why the Astros over the zoo, a museum, the Texans or the Dynamo?", "Source the 60–76% enrollment figure and the nonprofit count before client use.", "Hispanic and youth sports are communities within schools, nonprofits and churches."],
      findings: [],
    },

    mix: {
      intro: "The activation strategy: how we actually attract each audience. Four levers.",
      parts: [
        { h: "Price", q: "What does it cost, and how do we make it feel worth it?", ideas: ["Group rates & no fees", "Fundraising splits: extend Future Astros $5 model to schools, churches, nonprofits", "Tournament-linked group discounts for youth teams", "Reading-log rewards: free/discounted student tickets, parents buy alongside", "Compete on value, not discounts (demand ≈ unit elastic)"] },
        { h: "Place", q: "Where and how do groups buy and experience it?", ideas: ["Private/open group sections and food cards", "Early field access, behind-the-scenes (batting practice)", "Weekday & day games for schools; Graduation Night late May–June", "Daikin Park as a destination (the “Fenway effect”)"] },
        { h: "Promotion", q: "What do we say and show to get attention?", ideas: ["Stack group nights onto theme nights", "New nights: Graduation, Youth Sports, Church Family Feast, Scholarship, church youth night", "Exclusive group merchandise (Padres heritage jerseys)", "Bilingual influencers and game-day activities", "Creative & visual refresh"] },
        { h: "Position", q: "How do we want groups to see an Astros outing?", ideas: ["Houston’s community gathering place", "Celebrated, not just seated: recognition is the common currency", "Give back + group outing: turn Foundation goodwill into group relationships", "Different from the zoo, museum, Texans, Dynamo"] },
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
      findings: [
        { h: "Early findings (Week 2)", items: ["Cold outreach underperforms: ≈2.3% of cold calls succeed; ≈91% of cold emails get no reply (industry figures)", "Personalized/AI-assisted emails reportedly ≈29% higher opens; plain text beats image-heavy", "LinkedIn reportedly drives most B2B leads; combined with email and calls, 2–3× responses", "Teams only reach past buyers; new groups go unreached (Spokane Indians interview)", "Email every 2–3 weeks with theme-night and fireworks schedules felt right to a church buyer"] },
        { h: "Connectors identified (Week 3)", items: ["Schools: PTOs/PTAs, districts", "Churches: youth pastors, dioceses (Episcopal Diocese of Texas), megachurches", "Youth sports: Perfect Game Texas, tournament organizers", "Hispanic community: AVANCE, National Hispanic Institute, Latino Learning Center, bilingual influencers"] },
      ],
    },
  },
};
