import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { Document, MARKS } from "@contentful/rich-text-types";

// Check more options in the example:
// https://github.com/contentful/rich-text/tree/master/packages/rich-text-html-renderer
const options = {
  renderMark: {
    [MARKS.BOLD]: (text: String) => `<b class="blog__bold">${text}</b>`,
    [MARKS.ITALIC]: (text: String) => `<i class="blog__italic">${text}</i>`,
  },
};

export const renderBlogText = (text: Document): String => {
  return documentToHtmlString(text, options);
};
