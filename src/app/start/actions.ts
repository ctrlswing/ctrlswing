"use server";

import { type LeadFormData, statusLabels, needsLabels, timelineLabels } from "./constants";

export async function submitLead(data: LeadFormData) {
  // Honeypot check — bots fill hidden fields, real users don't
  if (data.website) {
    return { success: true }; // silently accept to not tip off bot
  }

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
