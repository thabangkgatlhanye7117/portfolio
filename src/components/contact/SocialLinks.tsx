const socials = [
  {
    label: "GitHub",
    url: "https://github.com/thabangkgatlhanye7117",
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/thabang-kgatlhanye-200889211/",
  },
  {
    label: "Email",
    url: "mailto:thabangkgatlhanye7117@gmail.com",
  },
];

export default function SocialLinks() {
  return (
    <section className="rounded-[32px] bg-zinc-900 p-8 text-white">

      <h2 className="mb-8 text-2xl font-semibold">
        Connect
      </h2>

      <div className="space-y-4">

        {socials.map((social) => (
          <a
            key={social.label}
            href={social.url}
            className="block rounded-2xl border border-zinc-800 p-4 transition hover:border-white"
          >
            {social.label}
          </a>
        ))}

      </div>

    </section>
  );
}