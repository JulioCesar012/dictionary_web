export interface IWordsContext {
  tabToggleType(text: string): void;
  type: string;
  loading: boolean;
  goToNextWord(label: string): void;
  goBackToPreviousWord: () => void;
  wordLabel: string;
  error: string;
  wordDefinition: any;
  mounted: boolean;
  setMounted: any;
  searchIndexPosition: string;
  phoneticWord: string;
  audioPhoneticsWord: any;
  notHasLoading(text: string): void;
}
