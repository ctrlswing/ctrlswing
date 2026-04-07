"use server";

type WebhookPayload = {
  name?: string;
  email: string;
  source: string;
  business?: string;
};

export async function submitToDiscord(payload: WebhookPayload) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL not set");
    return { success: false, error: "Server configuration error" };
  }

  const fields = [
    { name: "Source", value: payload.source, inline: true },
    { name: "Email", value: payload.email, inline: true },
  ];

  if (payload.name) {
    fields.push({ name: "Name", value: payload.name, inline: true });
  }

  if (payload.business) {
    fields.push({ name: "Business", value: payload.business, inline: false });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        embeds: [
          {
            title: `New ${payload.source} Submission`,
            color: 0xffe17c,
            fields,
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!res.ok) {
      return { success: false, error: "Failed to submit" };
    }

    return { success: true };
  } catch {
    return { success: false, error: "Failed to submit" };
  }
}
