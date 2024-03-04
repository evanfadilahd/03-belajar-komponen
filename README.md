## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720167|
| Nama |  Evan Fadhilah Dzulfikar |
| Kelas | TI - 3I |


### Jawaban Soal 1

"Change the contents of the Home() code so that it appears as follows by utilizing the Profile() component that was created in step 1!"

![Screenshot](assets-report/01.1.png)
![Screenshot](assets-report/01.2.png)

    What I learn from this task is that we can make an components and use it again easily.
    Also, to reference image from external source (internet) I need a next.config.js configuration to process the image.


### Jawaban Soal 2

![Screenshot](assets-report/02.1.png)
![Screenshot](assets-report/02.2.png)

    What I learn from this task is that I can use components that can use other components many times.
    About the interface, it is slightly changed because the picture doesn't have <div> like before.


### Jawaban Soal 3

Screenshot proof:

![Screenshot](assets-report/03.png)

## Question Answer

    It happens because of a feature called Hot Module Replacement (HMR) or Live Reloading that is integrated in the development environment(in this case is ReactJS), such as Webpack Dev Server or similar tools. 

    So when any file changes on our fs, it will delete the file from the front-end build cache. Webpack will reload our root.jsx file, this then re-load the deleted files. Any parent file, that required the deleted file, will also get deleted from the cache, and so on and so forth for grandparents of deleted files, and it stops at root.jsx. So root.jsx should be the only grandparent of any/all the files you want to reload!


### Practicum Assignment

What is the difference between these framework?

![Screenshot](assets-report/t.0.png)
![Screenshot](assets-report/t.1.png)
![Screenshot](assets-report/t.2.png)

    The main differences between Next.js, Remix, and Gatsby lie in their approaches to rendering (server-side rendering, static site generation), data fetching, and the overall focus of the framework. Next.js and Remix provide solutions for both server-side rendering and client-side rendering, while Gatsby is primarily focused on static site generation.


    1. Next.js: known for its simplicity and ease of use, particularly for server-side rendering (SSR) and static site generation (SSG).
    2. Remix: is a relatively newer framework compared to Next.js and focusing on a different approach to building web applications. It emphasizes server-rendered React applications with a data-fetching model called "Loader Functions."
    3. Gatsby: is another React-based framework, but it's primarily focused on static site generation (SSG).

    Other than that, the file and folder, also the main file have different location.


### Jawaban Soal 4

Explain why it happen!

![Screenshot](assets-report/04.1.png)
![Screenshot](assets-report/04.2.png)

    I think it probably because the page.tsx is importing from default function Home, while I create the function MyTextNimName and it is not in the default function. So I have to export from different function first for it to run!


### Jawaban Soal 5

Is there a change when you call the component in MyPage()?

![Screenshot](assets-report/05.1.png)
![Screenshot](assets-report/05.2.png)

    No, it is the same, even though it have different function, but it using the default function that same as before!


### Jawaban Soal 6

![Screenshot](assets-report/06.1.png)