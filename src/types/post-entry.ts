interface FileFields {
  url: string;
  details: {
    size: number;
    image: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
}

interface ImageFields {
  sys: {
    type: string;
    linkType: string;
    id: string;
  };
  fields: {
    title: string;
    pagraphOne: string;
    file: FileFields;
  };
}

interface PostFields {
  pagraphOne: string;
  title: string;
  description: string;
  slug: string;
  tags: string[];
  image: ImageFields | null;
  author: string;
  content: string;
}

interface Sys {
  type: string;
  createdAt: string;
  id: string;
}

export interface PostEntry {
  sys: Sys;
  fields: PostFields;
}