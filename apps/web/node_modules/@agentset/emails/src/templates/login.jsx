import { Section, Text } from "@react-email/components";
import { Button } from "../components/button";
import { DefaultLayout } from "../components/default-layout";
var LoginEmail = function (_a) {
    var _b = _a.loginLink, loginLink = _b === void 0 ? "https://portal.example.com/login" : _b, _c = _a.email, email = _c === void 0 ? "john@doe.com" : _c, _d = _a.domain, domain = _d === void 0 ? "https://app.agentset.ai" : _d;
    return (<DefaultLayout preview="Login to Agentset" footer={{ email: email, domain: domain }}>
      <Text className="text-sm leading-6 text-black">
        Here's your requested login link.
      </Text>

      <Section className="my-6">
        <Button href={loginLink}>Login</Button>
      </Section>

      <Text className="text-sm leading-6 text-black">
        or copy and paste this URL into your browser:
      </Text>
      <Text className="max-w-sm flex-wrap font-medium break-words text-purple-600 no-underline">
        {loginLink.replace(/^https?:\/\//, "")}
      </Text>

      <Text className="text-sm leading-6 text-black">
        Please note: This email contains a link that should only be used by you.
        Do not forward this email.
      </Text>
    </DefaultLayout>);
};
export default LoginEmail;
