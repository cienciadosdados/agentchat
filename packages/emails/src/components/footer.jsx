import { Hr, Link, Tailwind, Text } from "@react-email/components";
export function Footer(_a) {
    var email = _a.email, marketing = _a.marketing, notificationSettingsUrl = _a.notificationSettingsUrl, domain = _a.domain;
    if (marketing) {
        return (<Tailwind>
        <Hr className="mx-0 my-6 w-full border border-neutral-200"/>
        <Text className="text-[12px] leading-6 text-neutral-500">
          We send out product update emails once a month – no spam, no nonsense.
          Don't want to get these emails?{" "}
          <Link className="text-neutral-700 underline" href={"".concat(domain, "/account/settings")}>
            Unsubscribe here.
          </Link>
        </Text>
        <Text className="text-[12px] text-neutral-500">Agentset Inc.</Text>
      </Tailwind>);
    }
    return (<Tailwind>
      <Hr className="mx-0 my-6 w-full border border-neutral-200"/>
      <Text className="text-[12px] leading-6 text-neutral-500">
        This email was intended for <span className="text-black">{email}</span>.
        If you were not expecting this email, you can ignore this email. If you
        are concerned about your account's safety, please reply to this email to
        get in touch with us.
      </Text>

      {notificationSettingsUrl && (<Text className="text-[12px] leading-6 text-neutral-500">
          Don’t want to get these emails?{" "}
          <Link className="text-neutral-700 underline" href={notificationSettingsUrl}>
            Adjust your notification settings
          </Link>
        </Text>)}
      <Text className="text-[12px] text-neutral-500">Agentset Inc.</Text>
    </Tailwind>);
}
