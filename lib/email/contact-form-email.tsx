import React from 'react';
import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactEmailProps = {
    senderMessage: string;
    senderEmail: string;
}

export default function ContactFormEmail({ senderMessage, senderEmail }: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New Message from Portfolio Site</Preview>
            <Tailwind>
                <Body className='bg-[#fffbd1] text-gray-900'>
                    <Container>
                        <Section className='bg-[#fcfcfc] borderBlack my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received a message via the contact form:</Heading>
                            <Text>A message from {senderEmail}</Text>
                            <Hr />
                            <Text>{senderMessage}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
