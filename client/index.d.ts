interface ITab {
  name: string;
}
type BookCoverRatio = 1 | 2 | 3 | 4 | 5 | 6;

interface IStore {
  loading: {
    effects: string[]
  },
  common: ICommonStore
}
interface ICommonStore {

}
