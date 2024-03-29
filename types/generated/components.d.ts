import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogArticleHeadline extends Schema.Component {
  collectionName: 'components_blog_article_headlines';
  info: {
    displayName: 'headline';
    description: '';
  };
  attributes: {
    headline: Attribute.String & Attribute.Required;
    slug: Attribute.String & Attribute.Required;
  };
}

export interface BlogArticleLandscapeImage extends Schema.Component {
  collectionName: 'components_blog_article_landscape_images';
  info: {
    displayName: 'landscapeImage';
    description: '';
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraphWithImage extends Schema.Component {
  collectionName: 'components_blog_article_paragraph_with_images';
  info: {
    displayName: 'paragraphWithImage';
  };
  attributes: {
    paragraph: Attribute.RichText & Attribute.Required;
    image: Attribute.Media & Attribute.Required;
    isLandscape: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageShowRight: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<true>;
    imageCaption: Attribute.String;
  };
}

export interface BlogArticleParagraph extends Schema.Component {
  collectionName: 'components_blog_article_paragraphs';
  info: {
    displayName: 'paragraph';
    description: '';
  };
  attributes: {
    Paragraph: Attribute.RichText & Attribute.Required;
  };
}

export interface InfoBlockButton extends Schema.Component {
  collectionName: 'components_info_block_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    color: Attribute.Enumeration<['turquoise', 'black', 'orange', 'beige']> &
      Attribute.Required &
      Attribute.DefaultTo<'turquoise'>;
    slug: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blog-article.headline': BlogArticleHeadline;
      'blog-article.landscape-image': BlogArticleLandscapeImage;
      'blog-article.paragraph-with-image': BlogArticleParagraphWithImage;
      'blog-article.paragraph': BlogArticleParagraph;
      'info-block.button': InfoBlockButton;
    }
  }
}
