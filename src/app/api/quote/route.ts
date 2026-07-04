import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      service,
      budget,
      timeline,
      country,
      company,
      name,
      email,
      phone,
      message,
    } = data;

    const result = await resend.emails.send({
      from: "OSO Engineering <onboarding@resend.dev>",
      to: "eng.osman249@gmail.com",
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Country:</strong> ${country}</p>

        <hr>

        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>

        <hr>

        <p><strong>Project Description</strong></p>

        <p>${message}</p>
      `,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to send email",
      },
      {
        status: 500,
      }
    );
  }
}