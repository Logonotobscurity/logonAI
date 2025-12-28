
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MagicLinkEmailProps {
  url: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MagicLinkEmail = ({ url }: MagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Log in with this magic link</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="48"
          height="48"
          alt="LOG_ON Logo"
        />
        <Heading style={heading}>Your Magic Link</Heading>
        <Section>
          <Text style={text}>
            Welcome to LOG_ON! Click the link below to sign in to your
            account.
          </Text>
          <Text style={text}>
            This link is valid for 24 hours. If you did not request this email, 
            you can safely ignore it.
          </Text>
        </Section>
        <Button style={button} href={url}>
          Sign In
        </Button>
        <Text style={text}>
          Best,
          <br />
          The LOG_ON Team
        </Text>
      </Container>
    </Body>
  </Html>
);

export default MagicLinkEmail;

const main = {
  backgroundColor: "#F5F5F5",
  fontFamily:
    'Alegreya, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #eee",
  borderRadius: "5px",
  boxShadow: "0 5px 10px rgba(20, 50, 70, 0.2)",
  marginTop: "20px",
  maxWidth: "360px",
  margin: "0 auto",
  padding: "68px 0 130px",
};

const heading = {
  fontFamily: 'Belleza, "Helvetica Neue", "Helvetica", Arial, sans-serif',
  color: "#673AB7",
  fontSize: "32px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "center" as const,
  padding: "0 40px",
};

const button = {
  backgroundColor: "#009688",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "200px",
  margin: "40px auto",
  padding: "12px 0",
};

