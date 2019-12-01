interface User {
  avatar_url: string;
}

export interface Track {
  artwork_url: string;
  permalink_url: string;
  title: string;
  user: User;
}
