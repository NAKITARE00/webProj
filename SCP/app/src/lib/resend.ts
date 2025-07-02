"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailParams {
    to: string;
    from: string;
    subject: string;
    html: string;
}

export const sendEmail = async ({
    to,
    from,
    subject,
    html,
}: SendEmailParams) => {
    return await resend.emails.send({
        from,
        to,
        subject,
        html,
    });
};
