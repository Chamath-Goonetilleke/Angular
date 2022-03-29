import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase',
})
export class TitleCasePipe implements PipeTransform {
  transform(value: string): any {
    if (!value) {
      return null;
    }
    
    let words = value.split(' ');
    for (var i = 0; i < words.length; i++){
      if (i > 0 && this.isPreposition(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = this.toTitleCase(words[i]); 
      }
    }
    return words.join(' ');
  }
  private isPreposition(word: string) {
    let prepositions = ["of", "the","is"];
    return prepositions.includes(word.toLowerCase());
  }
  
  private toTitleCase(word: string) {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
  }

  }


