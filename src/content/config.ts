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

const metaSchema = z.object({
  title: z.string(),
  description: z.string(),
});

const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    draft: z.boolean().optional().default(false),
    meta: metaSchema,
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

const leistungenCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      weight: z.number().optional().default(0),
      meta: metaSchema,
      card: z.object({
        title: z.string(),
        description: z.string(),
        image: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
      }),
      hero: z.object({
        title: z.string(),
        description: z.string(),
        image: z
          .object({
            src: image(),
            alt: z.string(),
          })
          .optional(),
      }),

      sectionOne: z
        .object({
          title: z.string(),
          text: z.string(),
          image: z
            .object({
              src: image(),
              alt: z.string(),
            })
            .optional(),
        })
        .optional(),

      sectionWhy: z
        .object({
          title: z.string(),
          description: z.string(),
          bullets: z.array(
            z.object({
              title: z.string(),
              description: z.string(),
            })
          ),
        })
        .optional(),

      // raw content markdown
      // cta action

      // more content?

      faq: z
        .object({
          title: z.string(),
          description: z.string(),
          questions: z.array(
            z.object({
              question: z.string(),
              answer: z.string(),
            })
          ),
        })
        .optional(),

      // contact form, clear
    }),
});

export const collections = {
  team: teamCollection,
  pages: pagesCollection,
  leistungen: leistungenCollection,
};
