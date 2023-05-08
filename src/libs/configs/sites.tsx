// change to env var?

export type SiteConfig = {
  [k: string]: {
    public: true
  }
}
export const sites: SiteConfig = {
  contact: {
    public: true,
  },
  terms: {
    public: true,
  },
  motors: {
    public: true,
  },
  legacy: {
    public: true,
  },
  partners: {
    public: true,
  },
  style: {
    public: true,
  },
  programs: {
    public: true,
  },
}
