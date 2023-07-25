export interface stateObj {
  showActionPane: boolean | false;
}

export type ContextObj = {
  state: stateObj ,
  dispatch: (arg: any) => void
} 

export default ContextObj;