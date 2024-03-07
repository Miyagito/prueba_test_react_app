export interface PreguntaType {
  id: number;
  category: string;
  questionText: string;
  options: OptionType[];
}

export interface OptionType {
  id: string;
  text: string;
  isCorrect: boolean;
}
