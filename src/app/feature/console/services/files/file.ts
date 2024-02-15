import aboutMeFileContent from "./fileContent/abouteMeFileContent";
import contactFileContent from "./fileContent/contactFileContent";
import initFileContent from "./fileContent/initFileContent";
import projectsFileContent from "./fileContent/projectsFileContent";


export class File {
  private readonly name: string;
  private readonly content: string[]
  private readonly privileges: string = "-rwxrwxr--";
  private author: string = "keyroll";
  private group: string = "keyroll";

  constructor(name: string, content: string[], privileges: string | null = null) {
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
    new File("aboutMe.txt", aboutMeFileContent),
    new File("contact.txt", contactFileContent),
    new File("init.txt", initFileContent),
    new File("projects.txt",  projectsFileContent)
  ]
}
