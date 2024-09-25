import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const sendPasswordResetEmail = async (email: string, token: string) => {
    const resetLink = `http://localhost:3001/auth/new-password?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Reset your password",
        html: `<p>Reset your password: <a href="${resetLink}">reset password</a></p>`,
    })
};
export const sendVerificationEmail = async (email: string, token: string) => {
    const confrimLink = `http://localhost:3001/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Confirm your email",
        html: `<p>Click to Confirm your email: <a href="${confrimLink}">Confirm your email</a></p>`,
    })
};