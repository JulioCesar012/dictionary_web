export interface IWordsContext {
  tabToggleType(text: string): void;
  type: string;
  setType(type: string): any;
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
  readAllWord: () => void;
  words: object;
  currentPage: number;
  setCurrentPage: any;
  wordHistory: any;
  readWordHistory: () => void;
  viewWordHistory(label: string): void; 
  removeWordHistory(wordId: number): void;
  resizeScreen: any;
  visibleTables: boolean;
  toggleTabMobile: () => void;
}
