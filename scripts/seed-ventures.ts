import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getCliClient } from "sanity/cli";

const client = getCliClient({ apiVersion: "2024-01-01" });

type Seed = {
  name: string;
  aliases: string[];
  order: number;
  tagline: string;
  description: string;
  url: string;
  role: string;
  file: string;
  centered?: boolean;
};

const ventures: Seed[] = [
  {
    name: "Chia",
    aliases: ["Chia"],
    order: 1,
    tagline: "Subscription billing over mobile money.",
    description:
      "One type-safe interface over PayChangu, PawaPay and OneKhusa, with an open-source SDK, React components and an MCP server. The hosted platform runs plans, checkout, renewals, retries and weekly payouts.",
    url: "https://usechia.com",
    role: "Founder",
    file: "chia.png",
  },
  {
    name: "Kazuni",
    aliases: ["Kazuni"],
    order: 2,
    tagline: "Notifications for the businesses of a continent.",
    description:
      "Verify a domain, get an API key, send transactional email or run campaigns. SMS is next and WhatsApp is planned. Customers pay by mobile money in their own currency.",
    url: "https://usekazuni.com",
    role: "Founder",
    file: "kazuni.png",
  },
  {
    name: "Sekuire",
    aliases: ["Sekuire"],
    order: 3,
    tagline: "Guardrails and permissions for AI agents.",
    description:
      "Agents are being handed real permissions: to spend money, change infrastructure, talk to customers. Sekuire enforces the boundaries their operators set, while the agent runs, not after the fact.",
    url: "https://sekuire.ai",
    role: "Founder & CEO",
    file: "sekuire.png",
    centered: true,
  },
  {
    name: "Vwaza",
    aliases: ["Vwaza", "Vwaza Multimedia"],
    order: 4,
    tagline: "Music, podcasts, TV and a studio for African creators.",
    description:
      "Malawi’s all-in-one creator platform: music streaming, podcast distribution, TV and live video, a merch store, a beats marketplace and direct fan support, with events and ticketing next.",
    url: "https://vwaza.com",
    role: "Founder",
    file: "vwaza.png",
  },
  {
    name: "Luwawa",
    aliases: ["Luwawa"],
    order: 5,
    tagline: "HR, payroll and hiring for companies in Malawi.",
    description:
      "A public job board and applicant pipeline on one side; employees, leave, expenses, equipment and payroll on the other. Named after Luwawa Forest Reserve on the Viphya plateau.",
    url: "https://luwawahr.com",
    role: "Founder",
    file: "luwawa.png",
  },
];

async function seed(v: Seed) {
  const asset = await client.assets.upload(
    "image",
    readFileSync(join(process.cwd(), "scripts", "ventures", v.file)),
    { filename: v.file },
  );
  const banner = {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
    alt: v.name,
    ...(v.centered && {
      hotspot: { _type: "sanity.imageHotspot", x: 0.5, y: 0.5, width: 1, height: 1 },
      crop: { _type: "sanity.imageCrop", top: 0, bottom: 0, left: 0, right: 0 },
    }),
  };
  const fields = {
    name: v.name,
    tagline: v.tagline,
    description: v.description,
    url: v.url,
    role: v.role,
    status: "active",
    order: v.order,
    banner,
  };
  const existing = await client.fetch<string | null>(
    `*[_type == "venture" && name in $names && !(_id in path("drafts.**"))][0]._id`,
    { names: v.aliases },
  );
  if (existing) {
    await client.patch(existing).set(fields).commit();
    console.log(`updated ${v.name}`);
  } else {
    await client.create({ _type: "venture", ...fields });
    console.log(`created ${v.name}`);
  }
}

async function main() {
  for (const v of ventures) {
    await seed(v);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
