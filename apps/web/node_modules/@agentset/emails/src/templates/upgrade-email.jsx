import { Heading, Link, Text } from "@react-email/components";
import { DefaultLayout } from "../components/default-layout";
export function UpgradeEmail(_a) {
    var _b = _a.name, name = _b === void 0 ? "John Doe" : _b, _c = _a.email, email = _c === void 0 ? "john@doe.com" : _c, _d = _a.plan, plan = _d === void 0 ? {
        name: "Pro",
        features: [],
    } : _d, _e = _a.domain, domain = _e === void 0 ? "https://app.agentset.ai" : _e;
    var finalFeatures = plan.features
        ? plan.features.filter(function (feature) { return !feature.disabled; })
        : [];
    return (<DefaultLayout preview={"Thank you for upgrading to Agentset ".concat(plan.name, "!")} footer={{ email: email, domain: domain }}>
      <Heading className="mx-0 my-7 p-0 text-xl font-medium text-black">
        Thank you for upgrading to Agentset {plan.name}!
      </Heading>

      <Text className="text-sm leading-6 text-black">
        Hey{name && " ".concat(name)}!
      </Text>
      <Text className="text-sm leading-6 text-black">
        My name is Abdellatif, and I'm the co-founder of Agentset.
      </Text>
      <Text className="text-sm leading-6 text-black">
        I wanted to personally reach out to thank you for upgrading to{" "}
        <strong>Agentset {plan.name}</strong>! Your support means the world to
        us and helps us continue to build and improve Agentset.
      </Text>
      {finalFeatures.length > 0 ? (<>
          <Text className="text-sm leading-6 text-black">
            On the {plan.name} plan, you now have access to:
          </Text>
          {finalFeatures.map(function (feature) {
                var _a;
                return (<Text className="ml-1 text-sm leading-4 text-black">
              ◆{" "}
              {((_a = feature.tooltip) === null || _a === void 0 ? void 0 : _a.href) ? (<Link href={feature.tooltip.href}>{feature.text}</Link>) : (feature.text)}
            </Text>);
            })}
        </>) : null}

      <Text className="text-sm leading-6 text-black">
        If you have any questions or feedback about Agentset, please don't
        hesitate to reach out – I'm always happy to help!
      </Text>

      <Text className="text-sm leading-6 font-light text-neutral-400">
        Abdellatif from Agentset
      </Text>
    </DefaultLayout>);
}
export default UpgradeEmail;
