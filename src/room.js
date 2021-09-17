class Room {
  constructor(name, description){
      this.name = name;
      this.description = description;
      this.contents = [];
  }

  add(item){
      this.contents.push(item);
      return this
  }

  has(ref){
    let keys1 = Object.keys(ref);

    for (let obj of this.contents){
      let keys2 = Object.keys(obj);
      if (keys1.length !== keys2.length) {
        return false;
      }
  
      for (let key of keys1) {
        if (ref[key] !== obj[key]) {
          return false;
        }
      }
    }
    return true;
  }
}

module.exports = Room
