export interface IWordsContext {
  tabToggleType(text: string): void;
  type: string;
  setType(type: string): any;
  loading: boolean;
  wordPosition: number;
  goToNextWord(label: string): void;
  goBackToPreviousWord: () => void;
  wordLabel: string;
  readWord(label: string): void;
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
  viewWordHistory(label: string): void;
  removeWordHistory(wordId: number): void;
  resizeScreen: any;
  visibleTables: boolean;
  toggleTabMobile: () => void;
  listStr: any;
}
