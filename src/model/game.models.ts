  export interface Board {
    spaces: Triangle[]
  }
  
  export interface Triangle {
    color: Color,
    count: number
  }

  export enum Color {
    Black = 0,
    White = 1,
    None = -1
}