import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Strategy Decode")
    .items([
      S.listItem()
        .title("Articles")
        .child(
          S.list()
            .title("Articles")
            .items([
              S.documentTypeListItem("article").title("All articles"),
              S.divider(),
              S.listItem()
                .title("Drafts")
                .child(
                  S.documentList()
                    .title("Draft articles")
                    .filter('_type == "article" && status == "draft"')
                ),
              S.listItem()
                .title("In review")
                .child(
                  S.documentList()
                    .title("Articles in review")
                    .filter('_type == "article" && status == "inReview"')
                ),
              S.listItem()
                .title("Ready to publish")
                .child(
                  S.documentList()
                    .title("Ready articles")
                    .filter('_type == "article" && status == "ready"')
                ),
              S.listItem()
                .title("Published")
                .child(
                  S.documentList()
                    .title("Published articles")
                    .filter('_type == "article" && defined(publishedAt)')
                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                ),
            ])
        ),
      S.documentTypeListItem("author").title("Authors"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("tag").title("Tags"),
      S.documentTypeListItem("company").title("Companies"),
      S.divider(),
      S.listItem()
        .title("Homepage")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("Site settings")
        .id("siteSettings")
        .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
      S.divider(),
      S.documentTypeListItem("redirect").title("Redirects"),
    ]);
