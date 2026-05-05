type Params = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function adminSubject(name: string): string {
  return `New Lead: ${name} — Operation Profit Asset Recovery`;
}

export function adminHtml({ name, email, phone, message }: Params): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #f9f9f9;">
      <div style="border-top: 3px solid #DABD59; padding-top: 24px; margin-bottom: 24px;">
        <h1 style="font-size: 18px; color: #0A0A0A; margin: 0 0 4px 0; letter-spacing: 0.03em;">
          New Contact Form Submission
        </h1>
        <p style="color: #888; font-size: 13px; margin: 0;">Operation Profit Asset Recovery</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 15px; margin-bottom: 24px;">
        <tr style="background: #fff;">
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; font-weight: 600; color: #0A0A0A; width: 110px;">Name</td>
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; color: #333;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; font-weight: 600; color: #0A0A0A;">Email</td>
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8;">
            <a href="mailto:${email}" style="color: #B89D3A; text-decoration: none;">${email}</a>
          </td>
        </tr>
        ${phone ? `
        <tr style="background: #fff;">
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; font-weight: 600; color: #0A0A0A;">Phone</td>
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; color: #333;">
            <a href="tel:${phone}" style="color: #333; text-decoration: none;">${phone}</a>
          </td>
        </tr>` : ""}
        <tr style="${phone ? "" : "background: #fff;"}">
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; font-weight: 600; color: #0A0A0A; vertical-align: top;">Message</td>
          <td style="padding: 12px 16px; border: 1px solid #e8e8e8; color: #333; white-space: pre-wrap; line-height: 1.6;">${message}</td>
        </tr>
      </table>

      <div style="background: #fff; border: 1px solid #e8e8e8; padding: 14px 16px; margin-bottom: 24px;">
        <p style="font-size: 12px; color: #aaa; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 4px 0;">Quick Actions</p>
        <a href="mailto:${email}?subject=Re: Your Inquiry — Operation Profit Asset Recovery"
           style="display: inline-block; background: #DABD59; color: #0A0A0A; font-weight: 600; font-size: 13px; padding: 8px 18px; text-decoration: none; margin-right: 8px;">
          Reply to ${name}
        </a>
        ${phone ? `<a href="tel:${phone}" style="display: inline-block; border: 1px solid #ccc; color: #333; font-size: 13px; padding: 8px 18px; text-decoration: none;">
          Call ${phone}
        </a>` : ""}
      </div>

      <p style="font-size: 12px; color: #bbb; margin: 0;">
        Submitted ${submittedAt} (CT) via operationprofitllc.com
      </p>
    </div>
  `;
}
