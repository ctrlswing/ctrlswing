export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
  content: string;
};

export const posts: BlogPost[] = [
  {
    slug: "building-a-marketing-system-that-actually-works",
    title: "Building a marketing system that actually works.",
    description:
      "Most businesses don't have a marketing problem. They have a fragmentation problem. You buy an SEO tool, you run some Facebook ads, you send a newsletter once a month. None of it talks to each other. Here is how to fix it.",
    category: "Strategy",
    date: "2026-03-24",
    readTime: "6 min read",
    featured: true,
    content: `Most businesses don't have a marketing problem. They have a fragmentation problem. You buy an SEO tool, you run some Facebook ads, you send a newsletter once a month. None of it talks to each other.

You're treating your marketing like an à la carte menu when it needs to be an assembly line. An assembly line takes raw materials (attention) and systematically turns them into a finished product (paying customers). When you buy piecemeal services from five different agencies, you aren't building an assembly line; you're just piling parts in a warehouse and hoping a car builds itself.

This is the fundamental difference between random acts of marketing and a functioning marketing system.

## The Three Pillars of a Working System

A proper marketing system doesn't need to be overly complex. In fact, complexity is the enemy of execution. At CTRLSWING, we build every system around three non-negotiable pillars. If one is missing, the whole thing falls flat.

### 01. Traffic (The Fuel)

You need eyeballs. Whether it's high-intent Google Search ads, organic SEO content, or disruptive social media creative, you need a reliable, repeatable way to get people to look at your offer. Without traffic, the best website in the world is a billboard in the desert.

### 02. Capture (The Engine)

When the traffic arrives, what happens? Your website or landing page has one job: convert attention into action. It needs brutal clarity, lightning-fast load times, and a frictionless way for them to give you their information or their money.

### 03. Nurture (The Transmission)

Most people won't buy on day one. A working system automatically follows up. Automated email flows, SMS reminders, and retargeting ads ensure that the leads you paid for don't leak out of the bucket.

## Stop Doing It Manually

If you are manually downloading CSVs from Facebook and uploading them to Mailchimp, you are the bottleneck in your own business. Software is cheap. Human error is expensive.

\`\`\`yaml
trigger:
  event: form_submission
  source: landing_page_v2

actions:
  - type: add_to_crm
    tags: ["warm_lead", "q4_campaign"]

  - type: send_email
    template: welcome_sequence_day_1
    delay: 0m

  - type: notify_team
    channel: slack_sales
    message: "New lead captured from organic search."
\`\`\`

The code above is a simplified representation, but the logic is what matters. When a user takes an action, the system reacts instantly. It categorizes them, communicates with them, and alerts your team. All while you're sleeping.

## Execution Over Ideation

You don't need another six-week strategy phase. You don't need a mood board. You need a fast, functional website tied to an email sequence, fed by a focused ad campaign.

That's what we build at CTRLSWING. We don't sell hours; we sell outcomes. A complete marketing ecosystem, designed, built, and launched in days, not months. Because while your competitors are arguing over button colors in a staging environment, you should be closing deals.`,
  },
  {
    slug: "why-your-local-business-is-invisible-on-google",
    title: "Why your local business is invisible on Google.",
    description:
      "The basic technical setup most agencies skip that costs you thousands in lost local traffic every single month.",
    category: "SEO",
    date: "2026-03-20",
    readTime: "4 min read",
    content: "Coming soon.",
  },
  {
    slug: "the-death-of-the-learn-more-button",
    title: "The death of the 'Learn More' button.",
    description:
      "Vague calls to action are killing your conversion rate. How to write microcopy that actually gets clicked by your visitors.",
    category: "Conversion",
    date: "2026-03-16",
    readTime: "5 min read",
    content: "Coming soon.",
  },
  {
    slug: "stop-manually-downloading-csv-files",
    title: "Stop manually downloading CSV files.",
    description:
      "If you are manually moving data between Facebook and Mailchimp, you are the bottleneck in your own business.",
    category: "Automation",
    date: "2026-03-12",
    readTime: "7 min read",
    content: "Coming soon.",
  },
  {
    slug: "a-la-carte-marketing-vs-the-assembly-line",
    title: "A la carte marketing vs. the assembly line.",
    description:
      "Why buying piecemeal services from five different agencies leaves you with parts in a warehouse, not a working car.",
    category: "Strategy",
    date: "2026-03-08",
    readTime: "8 min read",
    content: "Coming soon.",
  },
  {
    slug: "brutalism-in-b2b-marketing",
    title: "Brutalism in B2B marketing.",
    description:
      "Why ugly websites sometimes convert better, and how to find the balance between aesthetic and function.",
    category: "Design",
    date: "2026-03-04",
    readTime: "3 min read",
    content: "Coming soon.",
  },
  {
    slug: "how-fast-should-a-website-load",
    title: "How fast should a website load?",
    description:
      "Stop obsessing over Google Lighthouse scores. Here is the actual metric you need to look at for speed and conversion.",
    category: "Strategy",
    date: "2026-02-28",
    readTime: "4 min read",
    content: "Coming soon.",
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): BlogPost | undefined {
  return posts.find((p) => p.featured);
}

export const categories = [
  "All Entries",
  "Strategy",
  "SEO",
  "Conversion",
  "Design",
  "Automation",
];
