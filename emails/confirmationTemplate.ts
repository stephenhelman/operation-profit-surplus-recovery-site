type Params = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export function confirmationSubject(): string {
  return "We've Received Your Inquiry — Operation Profit Asset Recovery";
}

export function confirmationHtml({ name, email, phone, message }: Params): string {
  return `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; background: #0A0A0A; color: #ffffff;">
      <div style="border-top: 3px solid #DABD59; padding-top: 28px; margin-bottom: 28px;">
        <h1 style="font-size: 22px; color: #DABD59; margin: 0 0 4px 0; letter-spacing: 0.05em; text-transform: uppercase;">
          Operation Profit Asset Recovery
        </h1>
        <p style="color: #666; font-size: 13px; margin: 0;">A division of Operation Profit LLC</p>
      </div>

      <p style="font-size: 16px; color: #e0e0e0; margin: 0 0 16px 0;">Hi ${name},</p>

      <p style="font-size: 16px; color: #e0e0e0; line-height: 1.6; margin: 0 0 16px 0;">
        Thank you for reaching out. We've received your inquiry and a member of our team
        will review your information and contact you shortly.
      </p>

      <p style="font-size: 15px; color: #999; line-height: 1.6; margin: 0 0 28px 0;">
        If you have any urgent questions in the meantime, you can reply directly to this email.
      </p>

      <div style="border: 1px solid #2a2a2a; padding: 20px; margin-bottom: 28px;">
        <p style="font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 12px 0;">
          Your Submission
        </p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 6px 0; color: #888; width: 80px; vertical-align: top;">Name</td>
            <td style="padding: 6px 0; color: #ccc;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 6px 0; color: #888; vertical-align: top;">Email</td>
            <td style="padding: 6px 0; color: #ccc;">${email}</td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding: 6px 0; color: #888; vertical-align: top;">Phone</td>
            <td style="padding: 6px 0; color: #ccc;">${phone}</td>
          </tr>` : ""}
          <tr>
            <td style="padding: 6px 0; color: #888; vertical-align: top;">Message</td>
            <td style="padding: 6px 0; color: #ccc; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
      </div>

      <p style="font-size: 13px; color: #555; line-height: 1.6; margin: 0;">
        Operation Profit Asset Recovery &nbsp;|&nbsp; El Paso, TX<br />
        recovery@operationprofitllc.com
      </p>
    </div>
  `;
}
