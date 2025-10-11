export interface ContactsSocial {
  icon: string;
  name: string;
  href: string;
}
export interface Contacts {
  email: string;
  telephone: string;
  address: Record<'city' | 'country', string>;
  socials: Array<ContactsSocial>;
}
