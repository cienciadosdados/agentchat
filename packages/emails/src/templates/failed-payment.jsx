import { Heading, Section, Text } from "@react-email/components";
import { Button } from "../components/button";
import { DefaultLayout } from "../components/default-layout";
export function FailedPayment(_a) {
    var _b = _a.user, user = _b === void 0 ? { name: "John Doe", email: "john@doe.com" } : _b, _c = _a.organization, organization = _c === void 0 ? { name: "Agentset", slug: "agentset" } : _c, _d = _a.amountDue, amountDue = _d === void 0 ? 49 : _d, _e = _a.attemptCount, attemptCount = _e === void 0 ? 2 : _e, _f = _a.domain, domain = _f === void 0 ? "https://app.agentset.ai" : _f;
    var title = "".concat(attemptCount == 2 ? "2nd notice: " : attemptCount == 3 ? "3rd notice: " : "", "Your payment for Agentset failed");
    return (<DefaultLayout preview={title} footer={{ email: user.email, domain: domain }}>
      <Heading className="mx-0 my-7 p-0 text-lg font-medium text-black">
        {attemptCount == 2 ? "2nd " : attemptCount == 3 ? "3rd  " : ""}
        Failed Payment for Agentset
      </Heading>

      <Text className="text-sm leading-6 text-black">
        Hey{user.name ? ", ".concat(user.name) : ""}!
      </Text>

      <Text className="text-sm leading-6 text-black">
        Your payment of{" "}
        <code className="text-purple-600">${amountDue / 100}</code> for your
        Agentset organization{" "}
        <code className="text-purple-600">{organization.name}</code> has failed.
        Please update your payment information using the link below:
        {/* TODO: add link for help article */}
      </Text>

      <Section className="my-6">
        <Button href={"".concat(domain, "/").concat(organization.slug, "/settings/billing")}>
          Update payment information
        </Button>
      </Section>

      <Text className="text-sm leading-6 text-black">
        If you have any questions, feel free to respond to this email – we're
        happy to help!
      </Text>
    </DefaultLayout>);
}
export default FailedPayment;
