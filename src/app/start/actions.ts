"use server";

type LeadData = {
  currentStatus: string;
  needs: string[];
  timeline: string;
  name: string;
  businessName: string;
  businessDesc: string;
  location: string;
  email: string;
  phone: string;
};

const statusLabels: Record<string, string> = {
  zero: "Starting from zero",
  have_website: "Has a website, not converting",
  running_some: "Running some marketing",
  ready_upgrade: "Ready to upgrade everything",
};

const needsLabels: Record<string, string> = {
  website: "Website",
  email: "Email/SMS",
  ads: "Paid Ads",
  seo: "SEO",
  all: "The Full System",
};

const timelineLabels: Record<string, string> = {
  yesterday: "Yesterday (URGENT)",
  this_month: "This month",
  exploring: "Just exploring",
};

export async function submitLead(data: LeadData) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not set");
    return { success: false };
  }

  const isUrgent = data.timeline === "yesterday";

  const embed = {
    title: `${data.name} — ${data.businessName}`,
    color: isUrgent ? 0xff0000 : 0xffe17c,
    fields: [
      {
        name: "Business",
        value: data.businessDesc || "Not provided",
        inline: true,
      },
      {
        name: "Location",
        value: data.location || "Not provided",
        inline: true,
      },
      {
        name: "Situation",
        value: statusLabels[data.currentStatus] || data.currentStatus,
        inline: false,
      },
      {
        name: "Needs",
        value:
          data.needs.map((n) => needsLabels[n] || n).join(", ") ||
          "Not specified",
        inline: false,
      },
      {
        name: "Timeline",
        value: timelineLabels[data.timeline] || data.timeline,
        inline: true,
      },
      {
        name: "Email",
        value: data.email,
        inline: true,
      },
      ...(data.phone
        ? [{ name: "Phone", value: data.phone, inline: true }]
        : []),
    ],
    footer: {
      text: isUrgent ? "URGENT — Wants to start immediately" : "ctrlswing lead",
    },
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: isUrgent ? "**URGENT LEAD**" : undefined,
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
