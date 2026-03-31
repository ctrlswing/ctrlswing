"use server";

import { type QuizFormData, type Recommendation, getRecommendation } from "./quiz";

// --- Simple session booking form ---

export type SessionFormData = {
  name: string;
  email: string;
  website: string;
  message: string;
  phone: string; // honeypot
};

export async function submitSessionForm(data: SessionFormData) {
  // Honeypot: bots fill hidden fields, real users don't
  if (data.phone) {
    return { success: true };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not set");
    return { success: false };
  }

  const embed = {
    title: data.name ? `${data.name} -- session booking` : "Session booking request",
    color: 0xffe17c,
    fields: [
      { name: "Email", value: data.email, inline: false },
      ...(data.website ? [{ name: "Website", value: data.website, inline: false }] : []),
      { name: "What they're working on", value: data.message, inline: false },
    ],
    footer: { text: "source: /start booking form" },
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });
    if (!res.ok) {
      console.error("Discord webhook failed:", res.status);
      return { success: false };
    }
    return { success: true };
  } catch (error) {
    console.error("Discord webhook error:", error);
    return { success: false };
  }
}

export { type QuizFormData, type Recommendation };

const situationLabels: Record<string, string> = {
  inconsistent: "Marketing is inconsistent -- sometimes do it, sometimes don't",
  ai_generic: "Using AI tools but getting generic results I can't use",
  agency_burned: "Tried agencies/freelancers and didn't get what I paid for",
  starting_scratch: "Starting from scratch, don't know where to begin",
  running_not_sure: "Marketing is running but not sure it's working",
};

const painLabels: Record<string, string> = {
  messaging: "Messaging",
  research: "Customer research",
  creative: "Creative strategy",
  approach: "Overall approach",
  ai_workflow: "AI workflow",
};

const approachLabels: Record<string, string> = {
  inconsistent: "Doing it myself, inconsistently",
  ai_generic: "Doing it myself with AI tools but results feel generic",
  paying_not_working: "Paying someone and not seeing results",
  not_at_all: "Not doing it at all",
};

const timelineLabels: Record<string, string> = {
  now: "I want to fix this now",
  weeks: "In the next few weeks",
  researching: "Just researching for now",
};

export async function submitQuiz(data: QuizFormData) {
  // Honeypot: bots fill hidden fields, real users don't
  if (data.website) {
    return { success: true };
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not set");
    return { success: false };
  }

  const isUrgent = data.timeline === "now";
  const recommendation = getRecommendation(data);

  const recommendationLabels: Record<Recommendation, string> = {
    session: "Strategy Session ($150)",
    "creative-strategist": "Creative Strategist Engine ($40)",
    "frontend-designer": "Frontend Designer ($40)",
  };

  const embed = {
    title: data.name ? `${data.name} -- quiz submission` : "Quiz submission",
    color: isUrgent ? 0xff0000 : 0xffe17c,
    fields: [
      {
        name: "Situation (Q1)",
        value: situationLabels[data.situation] || data.situation,
        inline: false,
      },
      {
        name: "Pain Areas (Q2)",
        value:
          data.painAreas.map((p) => painLabels[p] || p).join(", ") ||
          "Not specified",
        inline: false,
      },
      {
        name: "Current Approach (Q3)",
        value: approachLabels[data.currentApproach] || data.currentApproach,
        inline: false,
      },
      {
        name: "Timeline (Q4)",
        value: timelineLabels[data.timeline] || data.timeline,
        inline: true,
      },
      {
        name: "Recommendation",
        value: recommendationLabels[recommendation],
        inline: true,
      },
      ...(data.email
        ? [{ name: "Email", value: data.email, inline: false }]
        : []),
    ],
    footer: {
      text: isUrgent
        ? "URGENT -- Wants to fix this now | source: quiz"
        : "source: quiz",
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: isUrgent ? "**URGENT QUIZ LEAD**" : undefined,
        embeds: [embed],
      }),
    });

    if (!res.ok) {
      console.error("Discord webhook failed:", res.status);
      return { success: false };
    }

    return { success: true };
  } catch (error) {
    console.error("Discord webhook error:", error);
    return { success: false };
  }
}
