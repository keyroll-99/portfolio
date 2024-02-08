export class File {
  private name: string;
  private content: string
  private privileges: string = "-rwxrwxr--";
  private author: string = "keyroll";
  private group: string = "keyroll";

  constructor(name: string, content: string, privileges: string | null = null) {
    this.name = name;
    this.content = content;
    if (privileges) {
      this.privileges = privileges;
    }
  }

  public getName() {
    return this.name;
  }

  public getContent() {
    return this.content;
  }

  public getMetrics(){
    return `${this.privileges} ${this.author} ${this.group} ./${this.name}`
  }
}


export const InitFiles = (): File[] => {
  return [
    new File("aboutMe.txt", "This is file 1"),
    new File("contact.txt", "This is file 1"),

  ]
}
