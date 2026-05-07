// Client-side submission to a Google Apps Script Web App.
// The endpoint URL is read from VITE_CONTACT_ENDPOINT (set in .env or GitHub Actions secrets).
// The Apps Script must be deployed as a Web App with "Anyone" access and append rows to the Sheet.

export type ContactPayload = {
  name: string;
  email: string;
  function?: string;
  message: string;
};

export async function submitContact(data: ContactPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
  if (!endpoint) {
    throw new Error("Contact endpoint not configured (VITE_CONTACT_ENDPOINT).");
  }

  // Use text/plain to avoid CORS preflight on Apps Script Web Apps.
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      date: new Date().toISOString(),
      name: data.name,
      email: data.email,
      function: data.function ?? "",
      message: data.message,
    }),
  });

  if (!res.ok) {
    throw new Error(`Submit failed (${res.status})`);
  }
}
