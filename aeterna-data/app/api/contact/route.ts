import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, country, enquiryType, message, gdprConsent } = body;

        if (!name || !email || !company || !message || !country || !enquiryType || !gdprConsent) {
            return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
        }

        if (!gdprConsent) {
            return NextResponse.json({ error: 'GDPR consent is required.' }, { status: 400 });
        }

        const validCountries = [
            'US', 'GB', 'DE', 'NL', 'FR',
            'CA', 'AU', 'SG', 'JP', 'KR',
            'IN', 'ID', 'other_eu', 'other'
        ];

        const validEnquiryTypes = [
            'pilot', 'discovery', 'brief',
            'bounding_box', 'segmentation',
            'classification', 'visual_rlhf',
            'dataset_qa', 'general'
        ];

        if (!validCountries.includes(country)) {
            return NextResponse.json({ error: 'Invalid country selection.' }, { status: 400 });
        }

        if (!validEnquiryTypes.includes(enquiryType)) {
            return NextResponse.json({ error: 'Invalid enquiry type.' }, { status: 400 });
        }

        const html = `
            <h2>New Contact Enquiry — Aeterna Data</h2>
            <table style="text-align: left; width: 100%;">
                <tr>
                    <td style="padding-bottom: 8px;"><strong>Name:</strong></td>
                    <td style="padding-bottom: 8px;">${name}</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 8px;"><strong>Email:</strong></td>
                    <td style="padding-bottom: 8px;">${email}</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 8px;"><strong>Company:</strong></td>
                    <td style="padding-bottom: 8px;">${company}</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 8px;"><strong>Country:</strong></td>
                    <td style="padding-bottom: 8px;">${country}</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 8px;"><strong>Enquiry Type:</strong></td>
                    <td style="padding-bottom: 8px;">${enquiryType}</td>
                </tr>
                <tr>
                    <td style="padding-bottom: 8px;"><strong>GDPR Consent:</strong></td>
                    <td style="padding-bottom: 8px;">${gdprConsent ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <td style="padding-top: 16px;"><strong>Message:</strong></td>
                    <td style="padding-top: 16px; white-space: pre-wrap;">${message}</td>
                </tr>
            </table>
        `;

        // Simulate processing / email sending time
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Note: You can add integration with an email provider like Resend here
        /*
        import { Resend } from 'resend';
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
            from: 'Contact Form <contact@yourdomain.com>',
            to: ['contact@aeternadata.com'],
            subject: `New Enquiry: ${enquiryType} from ${company}`,
            html: html,
        });
        */

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return NextResponse.json({ error: 'Network error. Please try again or email us directly at contact@aeternadata.com' }, { status: 500 });
    }
}
