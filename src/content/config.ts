import { defineCollection, z } from "astro:content";

const teamCollection = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    position: z.string(),
    description: z.string(),
    linkedIn: z.string().optional(),
  }),
});

export const collections = {
  team: teamCollection,
};
