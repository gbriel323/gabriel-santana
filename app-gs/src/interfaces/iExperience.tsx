// types.ts (ou qualquer arquivo que você preferir)

export interface iExperience {
  titlePage: string;
  experiences: iExperience[];
  skills: string[];
  titleSkill: string;
}

export interface iExperienceDetails {
  company: string;
  role: string;
  duration: string;
  description: string;
  titleSkill: string;
  skills: string[];
}
