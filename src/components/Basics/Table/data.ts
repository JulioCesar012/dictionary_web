export interface TableProps {
  searchIndexPosition: number;
  words: any;
  active: any;
  type: string;
  lastRef?: any;
  func: (wordId: number) => void;
  viewFunc: (word: string) => void;
}
