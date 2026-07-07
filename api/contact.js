const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const validatePayload = (payload) => {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const organization =
    typeof payload.organization === "string" ? payload.organization.trim() : "";
  const role = typeof payload.role === "string" ? payload.role.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (!name || !email || !organization || !role || !message) {
    return { error: "All form fields are required." };
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return { error: "Please provide a valid email address." };
  }

  return {
    data: {
      name,
      email,
      organization,
      role,
      message,
      source:
        typeof payload.source === "string" && payload.source.trim()
          ? payload.source.trim()
          : "Mindsync Contact Form",
      submittedAt:
        typeof payload.submittedAt === "string" && payload.submittedAt.trim()
          ? payload.submittedAt.trim()
          : new Date().toISOString(),
    },
  };
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail =
    process.env.SENDGRID_FROM_EMAIL || "noreply@mindsync.solutions";
  const toEmail = process.env.SENDGRID_TO_EMAIL || "hello@mindsync.solutions";

  if (!apiKey) {
    return res
      .status(500)
      .json({ error: "Email service is not configured correctly." });
  }

  const payloadValidation = validatePayload(req.body || {});
  if (payloadValidation.error) {
    return res.status(400).json({ error: payloadValidation.error });
  }

  const payload = payloadValidation.data;

  const emailBodyText = [
    "New contact enquiry from MindSync Solutions website",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Organization: ${payload.organization}`,
    `Role: ${payload.role}`,
    `Source: ${payload.source}`,
    `Submitted At: ${payload.submittedAt}`,
    "",
    "Message:",
    payload.message,
  ].join("\n");

  const emailBodyHtml = `
    <h2>New contact enquiry from MindSync Solutions website</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Organization:</strong> ${escapeHtml(payload.organization)}</p>
    <p><strong>Role:</strong> ${escapeHtml(payload.role)}</p>
    <p><strong>Source:</strong> ${escapeHtml(payload.source)}</p>
    <p><strong>Submitted At:</strong> ${escapeHtml(payload.submittedAt)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(payload.message).replaceAll("\n", "<br />")}</p>
  `;

  const sendGridResponse = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail }] }],
      from: { email: fromEmail, name: "MindSync Solutions" },
      reply_to: { email: payload.email, name: payload.name },
      subject: `New Contact Enquiry - ${payload.organization}`,
      content: [
        { type: "text/plain", value: emailBodyText },
        { type: "text/html", value: emailBodyHtml },
      ],
    }),
  });

  if (!sendGridResponse.ok) {
    const details = await sendGridResponse.text();
    console.error("SendGrid request failed:", details);
    return res.status(502).json({ error: "Unable to send message right now." });
  }

  return res.status(200).json({ success: true });
}
