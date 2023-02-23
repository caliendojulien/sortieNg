export interface Hydra<T> {
  'hydra:member': T[],
  'hydra:totalItems': number;
}
