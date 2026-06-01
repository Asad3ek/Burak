# INFORMATION OF BUILDING PROJECT
```
1. Making Brain Storm about project:
    *Includes: 
        What about the Project?
        What kind of Data there will be?
        What king of service offer this project?

```
```
2. Making Flowchart of Project:
    *Includes: 
        This flowchart illustrates the overall structure of the 
        application, including the main pages, user navigation 
        paths, and key functionalities. It serves as a 
        blueprint for understanding how users interact with the system 
        before moving to UI design, database modeling,and development.  
```
```
3. Wireframe:
    *Includes: 
        Wireframe — bu web sayt yoki mobil ilovaning qoralama (skelet) dizayni.
        Ya'ni:

        Flowchart → User qayerga yuradi?
        Wireframe → O'sha page qanday joylashadi?
        UI Design → Chiroyli ko'rinishi qanday bo'ladi?
```
```
4. In Figma Project Design:
    *Includes:
        Figma Design - bu finall design hisoblanadi. 
        Frontend developer aynan shu dizaynga qarab kod yozadi.
```
```
5. ER Diagram (Modelling): 
    *Includes:
        ER Diagram (Entity Relationship Diagram) — bu nafaqat database'ning chizmasi balki backend developerning xaritasi hamdir. Backend developer shu ER modelling asosida backEnd ni quradi. 
        Oddit qilib aytganda:

            Frontend uchun → Wireframe
            Backend uchun  → ER Diagram
        
        ER Diagram:

        Qanday ma'lumot saqlanadi?
        Qaysi table bo'ladi?
        Tablelar qanday bog'lanadi?

```
# Moving To Wring Code
```
1. Start connection to the server
    .env file da projectning secret data lari yoziladi. Bu fileni Node to'g'ridan to'gri o'qiy olmaydi. SHu sabali bizga "dotenv" package kerak bo'ladi. "dotenv" ning config methodi .env fileni o'qishga yordam beradi. Method: dotenv.config().
```

```
#Project standarts:

1. Login Standarts 
2. Naming standarts:
   - Function, variables and Methods:  => camelCase orqali
   - Class:                            => Pascal: MemberService
   - Folder:                           => Kebab case: 
   - css classlarda:                   => Snack: => main_text

3. Error Handling Standarts: 
```