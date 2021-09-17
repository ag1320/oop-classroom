class Marker {
  constructor (size, color, remainingInk){
      this.size = size;
      this.color = color;
      this.remainingInk = remainingInk;
  }

  write(string){
    let i = 0;
    let result = '';
    let characters = string.replace(/\s/g,'').length

    if (characters > this.remainingInk){
      while (this.remainingInk > 0){
        result += string[i]
        if (!(result[result.length-1] === ' ')){
            this.remainingInk --;
        }
        i++;
      }
    } else {
      this.remainingInk -= characters;
      result = string;
    }
    return result
  }
}

module.exports = Marker
