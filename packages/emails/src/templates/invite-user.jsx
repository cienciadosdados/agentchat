import { Button, Heading, Link, Section, Text } from "@react-email/components";
import { DefaultLayout } from "../components/default-layout";
export function OrganizationInvite(_a) {
    var _b = _a.email, email = _b === void 0 ? "john@doe.com" : _b, _c = _a.url, url = _c === void 0 ? "http://localhost:8888/api/auth/callback/email?callbackUrl=http%3A%2F%2Fapp.localhost%3A3000%2Flogin&token=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx&email=youremail@gmail.com" : _c, _d = _a.organizationName, organizationName = _d === void 0 ? "Acme" : _d, _e = _a.organizationUser, organizationUser = _e === void 0 ? "Brendon Urie" : _e, _f = _a.organizationUserEmail, organizationUserEmail = _f === void 0 ? "panic@thedis.co" : _f, _g = _a.domain, domain = _g === void 0 ? "https://app.agentset.ai" : _g;
    var emailLink = (<Link className="text-blue-600 no-underline" href={"mailto:".concat(organizationUserEmail)}>
      {organizationUserEmail}
    </Link>);
    return (<DefaultLayout preview={"Join ".concat(organizationName, " on Agentset")} footer={{ email: email, domain: domain }}>
      <Heading className="mx-0 my-7 p-0 text-xl font-medium text-black">
        Join {organizationName} on Agentset
      </Heading>
      {organizationUser || organizationUserEmail ? (<Text className="text-sm leading-6 text-black">
          {organizationUser ? (<>
              <strong>{organizationUser}</strong> ({emailLink})
            </>) : (emailLink)}{" "}
          has invited you to join the <strong>{organizationName}</strong>{" "}
          organization on Agentset!
        </Text>) : (<Text className="text-sm leading-6 text-black">
          You have been invited to join the <strong>{organizationName}</strong>{" "}
          organization on Agentset!
        </Text>)}

      <Section className="my-6">
        <Button className="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white no-underline" href={url}>
          Join Organization
        </Button>
      </Section>

      <Text className="text-sm leading-6 text-black">
        or copy and paste this URL into your browser:
      </Text>

      <Text className="max-w-sm flex-wrap font-medium break-words text-purple-600 no-underline">
        {url.replace(/^https?:\/\//, "")}
      </Text>
    </DefaultLayout>);
}
export default OrganizationInvite;
