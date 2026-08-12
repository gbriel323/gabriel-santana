// interfaces/iPortfolio.ts
export interface iWorkDetails {
  titleWork: string;
  descriptionWork: string;
  imageWork: string; // URL da imagem prévia
  urlExample?: string;
}

export interface iWork {
  works: iWorkDetails[];
}
