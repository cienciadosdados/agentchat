import { Body, Container, Head, Html, Preview, Section, Tailwind, } from "@react-email/components";
import { Footer } from "./footer";
import { Logo } from "./logo";
export function DefaultLayout(_a) {
    var preview = _a.preview, children = _a.children, footer = _a.footer;
    return (<Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white font-sans">
          <Container className="mx-auto my-10 max-w-[600px] rounded border border-solid border-neutral-200 px-10 py-5">
            <Section className="mt-8">
              <Logo />
            </Section>

            {children}

            <Footer {...footer}/>
          </Container>
        </Body>
      </Tailwind>
    </Html>);
}
