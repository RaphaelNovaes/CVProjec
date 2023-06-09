import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private introduction = {
    sumary: [
      '<span style="color: #a152a1db">',
      'import ',
      '</span>',
      '<span style="color: #e4b534">',
      '{',
      '</span>',
      '<p style="margin-left: 1rem" class="mb-0 text-wrap">',
      '<span style="color: #35597e">',
      'const ',
      '</span>',
      '<span style="color: #7998b9">',
      'intro ',
      '</span>',
      '<span style="color: #ffffff9c">',
      '= ',
      '</span>',
      '<span style="color: #af7954">',
      '`',
      '</span>',
      '</p>',
      '<span style="color: #af7954">',
      '<p style="margin-left: 3rem" class="text-wrap">',
      '6 years of PHP back-end development to improve enhancements of applications for multiple industries;',
      '</p>',
      '<p style="margin-left: 3rem" class="text-wrap">',
      'Strong team player and contributor with strong problem-solving and good development practices;',
      '</p>',
      '<p style="margin-left: 3rem" class="mb-0 text-wrap">',
      'Self motivated, easy learning new technologies and tools to better fit in the projects;',
      '</p>',
      '<span style="margin-left: 1rem">',
      '`',
      '</span>',
      '</span>',
      '<span style="color: #e4b534">',
      '\n} ',
      '</span>',
      '<span style="color: #a152a1db">',
      'from ',
      '</span>',
      '<span style="color: #af7954">',
      '\'@me/about\'',
      '</span>',
    ],
  };

  private experience = `
  <h2>HANDS-ON</h2>
  In this section, I'm going to briefly describe some experience cases and technologies I've worked with. Besides that, Feel free to download my detailed resume from <!--<a id="mylink" href="/#mylinks-btn-container" style="text-decoration:underline dotted;cursor:pointer">-->my links<!--</a>--> anytime.<br>
  I have been working as a software developer since 2010. Basically, my main responsibilities were developing new features, bug fixes, and data analysis of PHP-written systems. Let's discuss some interesting cases.<br><br>
  <h3>Database (SQL)</h3>
  Among the technologies I've worked on, I want to highlight SQL. I have already worked with several databases, from simple CRUD requests to complex SQL queries. I remember that one time I had to perform data loss analysis due to a server crash.
  In this case, I had to code several PHP scripts to recover the lost data, which luckily this client had some recent backups of its original database. Even with that, they had a high flow of constant data, so I had some work to do to retrieve this information. After long hours of hard work with lots of joins, temporary tables, data analysis, more PHP scripts to join data from different places and XML reading, I managed to achieve a result close to the original, I can say that they were happy in the end.<br><br>
  <h3>PHP Frameworks, HTML, CSS, and a lot of JavaScript</h3>
  I could say that, I have never been a frontend developer, I don't think I have much creativity for exquisite appearance details, but in the last company I worked for, I was in charge of developing a complete frontend application, with graphs and lists that would be analyzed and monitored for the department's managers. Basically, its features were showing data on sales, inventory, and other information for a large supermarket chain.<br>
  Back then, frontend frameworks like Angular weren't popular, so I had to resort to pure Javascript and Jquery, to achieve this challenge.<br>
  In the end, I managed to make an application better than I expected. I built a structure so that each logged-in user could choose data from related tables and then create their own dynamic chart.<br>
  Ah, of course, I have to mention that Google Charts API helped me a lot in this task, even though at that time, this was not a very powerful tool and come with many limitations. <br>
  I spent some time to implement the features I needed in those charts/graphs using pure javascript.<br>
  Eventually, I got a little bolder and then I decided to go deeper and implement a feature so that each user would put their charts and lists in a view order of their choice on the dashboard and they could change it dynamically without having to go into settings and reload the page, as this system would most of the time to be displayed on TVs for data monitoring.<br>
  Jquery Drag and Drop, helped me to complete this task. The logged-in user could prioritize their preferred monitoring view order, simply by dragging the charts and list to their chosen location.<br>
  Moreover, in real-time, they could change position, delete and add new charts to the dashboard. I've never coded as many AJAX requests as I did in this application.<br><br>
  <h4>Three or more projects in a day</h4>
  Another experience with frontend apps was for this company where I was in charge of coding quick launch web pages, for promotions, new products, and so on. It was like, coding websites with 3 static pages and one contact form, It was not a big challenge but I used to work with different PHP frameworks like Codeigniter, Yii, and CakePHP for each project. Most of the time, we had ready-to-use HTML and CSS templates. So we just had to apply the backend and deploy.<br><br>
  <h3>Rabbit-MQ</h3>
  My first experience with message broker software like Rabbit-MQ was a little bit confusing I could say. I had never used a similar tool and I didn't really know how it works. This was a system that sent super heavy high-quality photos and videos to different APIs to be processed.<br>
  It then sent messages to Rabbit-MQ, which queued the files to avoid crashes, data loss, and server overload. The PHP application sent error messages along with broken files to Rabbit-MQ for an API and opened problem reports to be resolved by a support team. I didn't become a messaging expert, but I learned a lot about the structure and process.<br><br>
  <h3>ERP, CRM</h3>
  Moreover, I worked with large and complex ERP systems that served all the areas of large companies and factories. Monolithic systems of that size are sensitive to developing new tools and correcting bugs because many methods are interconnected in different parts of the system, and if I need to modify something for a specific module, it will most likely end up crashing other modules.<br><br>
  <h4>Workaround scripts</h4>
  Last but not least, I've already worked with a popular CRM system known as SugarCRM. This is a customer relationship management system. It was in the first company I worked for, I learned a lot there. I used to code complex SQL queries to migrate from one version of the system to another. <br>
  Additionally, I used to code complex PHP scripts to be triggered on the command line to meet some customer needs that were generally not offered by the main system. The reason for coding small stop-gap scripts to solve one-off problems was that it would take a lot of time for more experienced programmers to implement these new features.<br><br>
  <h3>Well...</h3>
  This is a small part of my life as a software developer and the challenges that I faced in these six years. Since I don't have a portfolio hance I've always worked for companies and not as a freelancer, I coded this website to show a little bit of my skills.<br><br>
  I left my GitHub pointed to this project's repository, my Linkedin profile, and also my resume in my links section. If you have any questions, please check my phone number and email below this page or send me a message via the <a id="contpg" href="/contact">contact page</a>.<br><br>
`;

  private education = [
    [
      [
        'Bachelor Degree in Analysis and Systems Development, Sao Paulo, Brazil',
        '2009 - 2010 ',
      ],
      ['PHP developement basic to advanced, Sao Paulo, Brazil', '2012'],
      ['C++ Basic to advanced, Sao Paulo, Brazil', '2016'],
    ],
    [
      {
        2022: [
          ['Docker & Kubernetes, Udemy'],
          ['TypeScript, Udemy'],
          ['NodeJS/ExpressJS & Deno/Oak, Udemy'],
          ['NestJs, Udemy'],
          ['Apache Cassandra DB, Udemy'],
          ['Apache Hbase DB, Udemy'],
          ['Redis DB, Udemy'],
          ['Neo4j DB, Udemy'],
          ['CSS & SASS, Udemy'],
        ],
        2023: [['MongoDB, Udemy'], ['Angular Complete Guide, Udemy']],
      },
    ],
  ];

  getIntroduction() {
    return this.introduction;
  }

  getExperience(): string {
    return this.experience;
  }

  getEducation() {
    return this.education;
  }
}
