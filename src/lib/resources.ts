export type ResourceType = "skill" | "plugin" | "connector";

export type Resource = {
  slug: string;
  name: string;
  type: ResourceType;
  description: string;
  featured: boolean;
  useCases: string[];
  includes: string[];
  installSteps: string[];
};

export const resources: Resource[] = [
  {
    slug: "creative-strategist",
    name: "Creative Strategist",
    type: "plugin",
    description:
      "Research customers, build personas, generate ad angles. Pulls real review data from Amazon, Reddit, and Trustpilot to fuel creative strategy.",
    featured: true,
    useCases: [
      "Researching a new product or market before writing ads",
      "Building customer personas from real voice-of-customer data",
      "Generating ad angles grounded in actual pain points",
    ],
    includes: [
      "Customer research agent (Amazon, Reddit, Trustpilot scraping)",
      "Persona builder skill",
      "Angle generator skill",
      "Full pipeline orchestration",
    ],
    installSteps: [
      "Clone the repo: git clone https://github.com/ctrlswing/creative-strategist",
      "Add to your Claude Code plugins directory",
      "Run /full-pipeline to start",
    ],
  },
  {
    slug: "frontend-designer",
    name: "Frontend Designer",
    type: "plugin",
    description:
      "Design system generation, component crafting, visual review, and responsive audits. Build polished UI without leaving your editor.",
    featured: true,
    useCases: [
      "Generating a design system from scratch for a new project",
      "Building accessible, responsive components",
      "Reviewing and polishing existing UI for visual quality",
    ],
    includes: [
      "Design system generator",
      "Component craft skill",
      "Visual review agent",
      "Responsive audit skill",
      "Accessibility checker",
      "Page composition skill",
    ],
    installSteps: [
      "Clone the repo: git clone https://github.com/ctrlswing/frontend-designer",
      "Add to your Claude Code plugins directory",
      "Run /frontend-designer to start",
    ],
  },
  {
    slug: "media-buyer",
    name: "Media Buyer",
    type: "plugin",
    description:
      "Google Ads and Bing Ads management from Claude Code. Query accounts, pull reports, detect anomalies, and mutate campaigns with natural language.",
    featured: true,
    useCases: [
      "Pulling performance reports across Google and Bing accounts",
      "Detecting spend anomalies and budget pacing issues",
      "Making bulk campaign changes with natural language",
    ],
    includes: [
      "Google Ads MCP connector",
      "Bing Ads MCP connector",
      "GAQL query skill",
      "Performance analysis agent",
    ],
    installSteps: [
      "Clone the repo: git clone https://github.com/ctrlswing/media-buyer",
      "Configure your Google Ads and Bing Ads API credentials",
      "Add to your Claude Code plugins directory",
    ],
  },
  {
    slug: "copywriting-skill",
    name: "Copywriting",
    type: "skill",
    description:
      "Write and rewrite marketing copy for any page. Homepage, landing pages, pricing pages, feature pages. Follows conversion-focused structure.",
    featured: false,
    useCases: [
      "Writing homepage copy from a product marketing context",
      "Rewriting landing page sections for higher conversion",
      "Drafting pricing page copy with tier comparisons",
    ],
    includes: [
      "Page-by-page copy generation",
      "Headline and subhead variants",
      "CTA copy optimization",
    ],
    installSteps: [
      "Download the Skill.md file",
      "Place it in your Claude Code skills directory",
      "Invoke with /copywriting",
    ],
  },
  {
    slug: "seo-audit-skill",
    name: "SEO Audit",
    type: "skill",
    description:
      "Audit any page for technical SEO, on-page issues, and content gaps. Returns prioritized fixes with implementation guidance.",
    featured: false,
    useCases: [
      "Running a full technical SEO audit on a site",
      "Checking individual pages for on-page SEO issues",
      "Finding content gaps compared to ranking competitors",
    ],
    includes: [
      "Technical SEO checklist (meta, schema, speed, mobile)",
      "On-page analysis (headings, internal links, keyword usage)",
      "Prioritized fix list with effort estimates",
    ],
    installSteps: [
      "Download the Skill.md file",
      "Place it in your Claude Code skills directory",
      "Invoke with /seo-audit",
    ],
  },
  {
    slug: "google-ads-connector",
    name: "Google Ads",
    type: "connector",
    description:
      "MCP server that connects Claude Code to the Google Ads API. Query campaigns, ad groups, keywords, and reports with natural language.",
    featured: false,
    useCases: [
      "Querying campaign performance without leaving the editor",
      "Pulling search term reports for negative keyword mining",
      "Checking budget pacing across accounts",
    ],
    includes: [
      "Google Ads API MCP server",
      "GAQL query builder",
      "Account-level and campaign-level endpoints",
    ],
    installSteps: [
      "Install the MCP server package",
      "Configure your Google Ads API credentials in .mcp.json",
      "Restart Claude Code to connect",
    ],
  },
  {
    slug: "bing-ads-connector",
    name: "Bing Ads",
    type: "connector",
    description:
      "MCP server for Microsoft Advertising (Bing Ads). Query accounts, pull reports, and manage campaigns through Claude Code.",
    featured: false,
    useCases: [
      "Managing Bing Ads campaigns alongside Google Ads",
      "Pulling cross-platform performance comparisons",
      "Detecting editorial disapprovals and policy issues",
    ],
    includes: [
      "Microsoft Advertising API MCP server",
      "Account query endpoints",
      "Report generation",
    ],
    installSteps: [
      "Install the MCP server package",
      "Configure your Microsoft Advertising credentials in .mcp.json",
      "Restart Claude Code to connect",
    ],
  },
  {
    slug: "dataforseo-connector",
    name: "DataForSEO",
    type: "connector",
    description:
      "MCP server for DataForSEO API. Pull SERP data, keyword volumes, backlink profiles, and content analysis directly in Claude Code.",
    featured: false,
    useCases: [
      "Pulling keyword search volumes and difficulty scores",
      "Analyzing SERP competitors for a target query",
      "Checking backlink profiles and domain authority",
    ],
    includes: [
      "DataForSEO API MCP server",
      "SERP, keyword, backlink, and content endpoints",
      "Location and language filtering",
    ],
    installSteps: [
      "Install the MCP server package",
      "Add your DataForSEO API credentials to .mcp.json",
      "Restart Claude Code to connect",
    ],
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourcesByType(type: ResourceType): Resource[] {
  return resources.filter((r) => r.type === type);
}

export function getAllSlugs(): string[] {
  return resources.map((r) => r.slug);
}
