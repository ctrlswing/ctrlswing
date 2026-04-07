"use server";

type WebhookPayload = {
  title: string;
  color?: number;
  fields: { name: string; value: string; inline?: boolean }[];
  footer?: string;
};

async function sendDiscordWebhook(payload: WebhookPayload) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not set");
    return { success: false };
  }

  const embed = {
    title: payload.title,
    color: payload.color ?? 0xffe17c,
    fields: payload.fields,
    footer: { text: payload.footer ?? "ctrlswing.com" },
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

export async function submitResourceEmail(data: {
  email: string;
  resource: string;
  honeypot?: string;
}) {
  if (data.honeypot) return { success: true };

  return sendDiscordWebhook({
    title: `Resource Download: ${data.resource}`,
    fields: [
      { name: "Email", value: data.email, inline: true },
      { name: "Resource", value: data.resource, inline: true },
    ],
    footer: "ctrlswing.com/resources",
  });
}

export async function submitWorkshopBooking(data: {
  name: string;
  email: string;
  business: string;
  honeypot?: string;
}) {
  if (data.honeypot) return { success: true };

  return sendDiscordWebhook({
    title: `Workshop Booking: ${data.name}`,
    color: 0xff6b6b,
    fields: [
      { name: "Name", value: data.name, inline: true },
      { name: "Email", value: data.email, inline: true },
      { name: "Business", value: data.business },
    ],
    footer: "ctrlswing.com/workshop — $500 seat",
  });
}

export async function submitNewsletter(data: {
  email: string;
  honeypot?: string;
}) {
  if (data.honeypot) return { success: true };

  return sendDiscordWebhook({
    title: "Newsletter Signup",
    fields: [{ name: "Email", value: data.email }],
    footer: "ctrlswing.com/newsletter",
  });
}
