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

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    meta: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z
      .object({
        title: z.string(),
        description: z.string(),
        image: z.string().url().optional(),
      })
      .optional(),
    faqs: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          questions: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        })
      )
      .optional(),
  }),
});

export const collections = {
  team: teamCollection,
  pages: pagesCollection,
};
