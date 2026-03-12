import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type InquiryBody = {
  fullName: string;
  email: string;
  whatsapp: string;
  villa: string;
  checkIn: string;
  checkOut: string;
  guests: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as InquiryBody;

    const {
      fullName,
      email,
      whatsapp,
      villa,
      checkIn,
      checkOut, 
      guests,
      message,
    } = body;

    if (
      !fullName ||
      !email ||
      !whatsapp ||
      !villa ||
      !checkIn ||
      !checkOut ||
      !guests ||
      !message
    ) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address." },
        { status: 400 }
      );
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      return NextResponse.json(
        {
          success: false,
          message: "Check-out date must be after check-in date.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sumalnadira123@gmail.com",
        pass: "ccva zdxu barr ldsd",
      },
    });

    const mailOptions = {
      from: `"${fullName}" <${email}>`,
      replyTo: email,
      to: "sumalnadira123@gmail.com",
      subject: `📨 New Villa Inquiry from ${fullName}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f8; padding: 40px;">
          <div style="max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            
            <div style="background-color: #131414; padding: 20px; text-align: center; color: white;">
              <img 
                src="https://res.cloudinary.com/dpjmcup95/image/upload/v1772968765/c8f928687ebf28425689475c060719bf31a8df8f2_pzxi4y.png" 
                alt="Scenery Villas Logo" 
                style="width: 250px; margin-bottom: 10px;" 
              />
              <h1 style="margin: 0; font-size: 20px;">New Villa Inquiry Submission</h1>
            </div>

            <div style="padding: 30px;">
              <h2 style="color: #131414; margin-top: 0;">Guest Details</h2>
              <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse: collapse; color: #333;">
                <tr>
                  <td style="font-weight: bold; width: 180px;">Full Name:</td>
                  <td>${escapeHtml(fullName)}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Email:</td>
                  <td>
                    <a href="mailto:${escapeHtml(email)}" style="color: #0047AB;">
                      ${escapeHtml(email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">WhatsApp:</td>
                  <td>${escapeHtml(whatsapp)}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Selected Villa:</td>
                  <td>${escapeHtml(villa)}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Check-in Date:</td>
                  <td>${escapeHtml(checkIn)}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Check-out Date:</td>
                  <td>${escapeHtml(checkOut)}</td>
                </tr>
                <tr>
                  <td style="font-weight: bold;">Guests:</td>
                  <td>${escapeHtml(guests)}</td>
                </tr>
              </table>

              <h2 style="color: #131414; margin-top: 30px;">Message / Special Requests</h2>
              <div style="background: #f9f9f9; border-left: 4px solid #131414; padding: 15px; margin-top: 10px; line-height: 1.6; color: #333;">
                ${escapeHtml(message).replace(/\n/g, "<br>")}
              </div>
            </div>

            <div style="background-color: #f0f0f0; padding: 20px; text-align: center; font-size: 12px; color: #777;">
              <p style="margin: 0;">This inquiry was sent from your website inquiry form.</p>
              <p style="margin: 5px 0;">© ${new Date().getFullYear()} Scenery Villas. All rights reserved.</p>
              <div style="margin-top: 10px;">
                <a href="https://www.sceneryvillas.com" style="color: #0047AB; text-decoration: none; margin: 0 5px;">Website</a> |
                <a href="mailto:sceneryvillas @gmail.com" style="color: #0047AB; text-decoration: none; margin: 0 5px;">Email Us</a>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Inquiry sent successfully!",
    });
  } catch (error) {
    console.error("Inquiry email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send inquiry email.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}