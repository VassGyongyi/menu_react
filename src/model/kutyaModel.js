
export default class KutyaModel {
  #list = [];
  
  constructor() {
    this.#list = [];
  }
  getList() {
    //új memóriaterületre másolva térünk vissza a listával
    return [...this.#list];
  }
 
  
}
