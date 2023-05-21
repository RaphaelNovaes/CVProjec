import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private introduction = {
    sumary: [
      '{',
      '\n<p class="ms-5 text-wrap">',
      '\n\t6 years of PHP back-end development to improve enhancements of applications for multiple industries;',
      '\n</p>',
      '\n<p class="ms-5 text-wrap">',
      '\n\tStrong team player and contributor with strong problem-solving and good development practices;',
      '\n</p>',
      '\n<p class="ms-5 text-wrap">',
      '\n\tSelf motivated, easy learning new technologies and tools to better fit in the projects;',
      '\n</p>',
      '}',
    ],
  };

  private experience = `
  In this section I'm going to briefly describe some of my experiences and some technologies I've worked with. Following you can find a link to download my detailed resume.<br><br>
  I have been working as a software developer since 2010, I was responsable for development of new features, bug fixes, and data analysis of PHP written systems.<br><br>
  I have already worked with several databases, from simple CRUD requests to complex SQL queries, I have already performed data loss analysis due to a server crash.<br>
  In this case, I had to code some PHP scripts to recover lost data, which luckily this client had some clones and recent backups of its original database. <br>
  After long hours of hard work with lots of joins, temporary tables, data analysis, PHP scripts to join data from different places, and XML reading, I managed to achieve a result close to the original, I can say that this client was happy in the end.<br><br>
  I have never been a frontend developer, I can say that I don't have much creativity for exquisite appearance details, but in the last company I worked for, I was in charge of developing a completely frontend application, with graphs and lists that would be analyzed and monitored for the department's managers. Basically, its features were showing data of sales, inventory, and other information for a large supermarket chain.<br>
  Back then, frontend frameworks like Angular weren't popular, so I had to resort to pure Javascript with Jquery, Bootstrap, and CSS to help me out a bit with the details.<br>
  In the end it worked fine, I managed to make an application better than I expected. I built a structure so that each logged-in user could choose data from related tables and create they own dynamic chart.<br>
  Ah, of course, I have to mention that Google Charts helped me a lot in this task, even though at that time, this was not a very powerful tool and come with many limitations. <br>
  I spent some time to implement the features I needed in those charts/graphs using pure javascript.<br>
  Eventually, I got a little bolder and then I decided to implement a feature so that each user would put their charts and lists in a view order of their choice on the dashboard and they could change it dynamically without having to go into settings and reload the page, as this system would mostly of the time to be displayed on TVs for data monitoring.<br>
  Using Jquery Drag and Drop, I was able to complete this task. The logged-in user could prioritize their preferred monitoring view order, simply by dragging the charts and list to their chosen location.<br>
  Moreover, in real-time, they could change position, delete and add new charts to the dashboard. I've never coded as many AJAX requests as I did in this application.<br><br>
  I have also worked in a company that sold quickly developed websites with static pages and a form, for companies that want to launching new products or promotions. It was like 3 or 4 webpages for each project. In this company I have always to work with different frameworks like Codeigniter, Yii and CakePHP.<br><br>
  My first experience with message broker software like Rabbit-MQ was a little bit confusing I could say. I had never used a similar tool and I didn't really know its functionality. This was a system that sent super heavy high quality photos and videos to different APIs to be processed.<br>
  This then sends messages to Rabbit-MQ, which queues the files to prevent crashes, data loss, and server overload.The PHP application managed sending errors, forwarded messages to Rabbit-MQ and opened problem reports to be resolved by a support team. I didn't become an expert in messaging services, but I learned a lot of the structure and the process.<br><br>
  Moreover, I worked with large and complex ERP systems that served all the areas of large companies and factories. Monolithic systems of that size are sensitive to develop new tools and correcting bugs because many methods are interconnected in different parts of the system, and if I need to modify something for a specific module, it will most likely end up crashing other modules.<br><br>
  Last but not Least, I've already worked with a popular CRM system known as SugarCRM. This is a customer relationship management system. It was in the first company I worked for, I learned a lot there. I used to code complex SQL queries to migrate from one version of the system to another. <br>
  Additionally, I used to code complex php scripts to be triggered on the command line to meet some customer needs that were generally not offered by the main system. It would demand a lot of time and more experienced developers to implement it as new features.<br><br>
  This is a small part of the things I've worked on and faced in these six years. And I know there's still so much more to come. Since I don't have a portfolio, I've always worked for companies and not as a freelancer. I developed this website to show some of my code and skills.<br><br>
  Following is my GitHub pointed to the repository of this project, my Linkedin pefile and also my resume. If you want to get in touch with me, check out my phone number and e-mail bellow or go to the contact page and send me a message.<br><br>
  Thank you for your attention.
`;

  private education = [
    [
      ["Bachelor Degree in Analysis and Systems Development","2009 - 2010 "],
      ["PHP developement basic to advanced","2012"],
      ["C++ Basic to advanced","2016"],
    ],
    [
      ["Docker & Kubernetes","2022"],
      ["TypeScript","2022"],
      ["NodeJS/ExpressJS & Deno/Oak","2022"],
      ["NestJs","2022"],
      ["Apache Cassandra DB","2022"],
      ["Apache Hbase DB","2022"],
      ["Redis DB","2022"],
      ["Neo4j DB","2022"],
      ["CSS & SASS","2022"],
      ["MongoDB","2023"],
      ["Angular Complete Guide","2023"]
    ]
  ];

  getIntroduction() {
    return this.introduction;
  }

  getExperience() {
    return this.experience;
  }

  getEducation() {
    return this.education;
  }
}
