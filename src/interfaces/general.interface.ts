export interface ITranslation {
  [key: string]: {
    link: string;
    name: string;
  };
}

export interface ILink {
  name: string;
  link: string;
  translation?: ITranslation;
}