export interface PreguntaType {
  id: number;
  category: string;
  questionText: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
}

export type OptionType = {
  id: string;
  text: string;
  isCorrect: boolean;
};
