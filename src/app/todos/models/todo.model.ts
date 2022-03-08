export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.id = Math.floor(Math.random() * 9999999)
    this.texto = texto;
    this.completado = false;
  }
}
