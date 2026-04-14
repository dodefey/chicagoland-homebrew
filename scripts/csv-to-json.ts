import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";
import type { Club } from "../types/club";

type CsvClubRow = {
  slug?: string;
  Club?: string;
  contactEmail?: string;
  contactNote?: string;
  "socialLinks.website"?: string;
  "socialLinks.instagram"?: string;
  "socialLinks.facebook"?: string;
  "socialLinks.other"?: string;
  meetingTime?: string;
  meetingPlace?: string;
  firstTimeVisitorInfo?: string;
  description?: string;
};

const csvPath = path.resolve("./clubs.csv");
const outputDir = path.resolve("./data");
const outputPath = path.join(outputDir, "clubs.json");

const csv = fs.readFileSync(csvPath, "utf-8");

const records = parse(csv, {
  columns: true,
  skip_empty_lines: true,
  bom: true,
  trim: true,
}) as CsvClubRow[];

fs.mkdirSync(outputDir, { recursive: true });

const cleanValue = (value?: string) => {
  const trimmed = (value ?? "").trim();
  return trimmed && trimmed !== "TBD" ? trimmed : "";
};

const clubs: Club[] = records.map((club) => {
  const slug = cleanValue(club.slug);
  const name = cleanValue(club.Club);
  const contactEmail = cleanValue(club.contactEmail);
  const contactNote = cleanValue(club.contactNote);
  const website = cleanValue(club["socialLinks.website"]);
  const instagram = cleanValue(club["socialLinks.instagram"]);
  const facebook = cleanValue(club["socialLinks.facebook"]);
  const other = cleanValue(club["socialLinks.other"]);
  const meetingTime = cleanValue(club.meetingTime);
  const meetingPlace = cleanValue(club.meetingPlace);
  const firstTimeVisitorInfo = cleanValue(club.firstTimeVisitorInfo);
  const description = cleanValue(club.description);

  if (!slug) {
    throw new Error(`Missing slug for row: ${JSON.stringify(club)}`);
  }

  if (!name) {
    throw new Error(`Missing Club name for slug: ${slug}`);
  }

  const socialLinks = {
    ...(website ? { website } : {}),
    ...(instagram ? { instagram } : {}),
    ...(facebook ? { facebook } : {}),
    ...(other ? { other } : {}),
  };

  return {
    slug,
    name,
    ...(contactEmail ? { contactEmail } : {}),
    ...(contactNote ? { contactNote } : {}),
    ...(Object.keys(socialLinks).length ? { socialLinks } : {}),
    ...(meetingTime ? { meetingTime } : {}),
    ...(meetingPlace ? { meetingPlace } : {}),
    ...(firstTimeVisitorInfo ? { firstTimeVisitorInfo } : {}),
    ...(description ? { description } : {}),
  };
});

fs.writeFileSync(outputPath, `${JSON.stringify(clubs, null, 2)}\n`, "utf-8");

console.log(`Generated ${clubs.length} clubs in ${outputPath}`);
