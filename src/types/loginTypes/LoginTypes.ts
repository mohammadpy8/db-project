interface loginType {
  phone: string ;
  password: string;
}

interface registerType {
  fullName: string | undefined;
  phone?: string;
  password?: string;
}

export type { loginType, registerType };
