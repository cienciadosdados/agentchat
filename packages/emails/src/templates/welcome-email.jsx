import { Heading, Link, Text } from "@react-email/components";
import { DefaultLayout } from "../components/default-layout";
export function WelcomeEmail(_a) {
    var _b = _a.name, name = _b === void 0 ? "John Doe" : _b, _c = _a.email, email = _c === void 0 ? "john@doe.com" : _c, _d = _a.domain, domain = _d === void 0 ? "https://app.agentset.ai" : _d;
    return (<DefaultLayout preview="Welcome to Agentset.ai" footer={{ email: email, domain: domain }}>
      <Heading className="mx-0 my-7 p-0 text-xl font-medium text-black">
        Welcome to Agentset
      </Heading>

      <Text className="text-sm leading-6 text-black">
        Thanks for signing up{name && ", ".concat(name)}!
      </Text>

      <Text className="text-sm leading-6 text-black">
        My name is Abdellatif, and I'm the co-founder of Agentset - the open
        source RAG platform. We're excited to have you on board!
      </Text>

      <Text className="text-sm leading-6 text-black">
        Here are a few things you can do:
      </Text>

      <Text className="ml-1 text-sm leading-4 text-black">
        ◆ Create a namespace
      </Text>

      <Text className="ml-1 text-sm leading-4 text-black">
        ◆ Ingest your first document
      </Text>

      <Text className="ml-1 text-sm leading-4 text-black">
        ◆ Chat with your documents in the playground
      </Text>

      <Text className="ml-1 text-sm leading-4 text-black">
        ◆ Check out our{" "}
        <Link href="https://docs.agentset.ai/" className="font-medium text-blue-600 no-underline">
          API documentation
        </Link>{" "}
      </Text>

      <Text className="text-sm leading-6 text-black">
        Let me know if you have any questions or feedback. I'm always happy to
        help!
      </Text>

      <Text className="text-sm leading-6 font-light text-neutral-400">
        Abdellatif from Agentset
      </Text>
    </DefaultLayout>);
}
export default WelcomeEmail;
