var articles = [
    {
      title: "Ind's squad for test against England",
      category: "Sports",
      image: "indvseng.png",
      content: "As mentioned by BCCI in a tweet, Virat Kohli remains unavailable for the remaining 3 tests as well. Shreyas Iyer has been dropped because of his mediocre run. Meanwhile, Kl Rahul & Ravindra Jadeja has been included subject to fitness and also pacer Akashdeep Singh has earned his maiden call up owing to his Ranji performance. Squad for 3rd,4th, 5th test : Rohit Sharma(c), Jasprit Bumrah(vc), Yashashvi Jaiswal, Shubman Gill, Rajat Patidar, Sarfaraz Khan, Kl Rahul, KS Bharat(wk), Dhruv Jurel(wk), Ravindra Jadeja, Ravi Ashwin, Kuldeep Yadav, Axar Patel, Washington Sundar, Mohammad Siraj, Mukesh Kumar, Akashdeep Singh",
      comments: [
        {
          author: "Shivam Sharma",
          content: "India India!",
        },
        {
          author: "Madhav Shankar",
          content: "Let's go India !!!",
        },
      ],
    }, 
    {
        title: "Messi's Hong Kong Controversy",
        category: "Sports",
        image: "Messi.png",
        content: "With the backlash over Lionel Messi not playing for Inter Miami in a match in Hong Kong continues to simmer, an international friendly featuring the Argentina national team in China was cancelled. A week ago, Messi, Inter Miami and owner David Beckham were booed mercilessly in Hong Kong when the Argentine did not come off the bench due to an injury in a match against a local side. The anger turned into vitriol when a few days later Messi played 30 minutes in a match in Japan against Vissel Kobe. After Messi played against Kobe, Global Times, China’s state-controlled mouthpiece lashed into Messi and Inter Miami accusing them of meting out a differential treatment towards Hong Kong.",
        comments: [
          {
            author: "Bob Johnson",
            content: "Interesting read.",
          },
        ],
      },
      {
        title: "Dip in US inflation expectations keeps Dollar steady",
        category: "Business",
        image: "dollar.png",
        content: "A decline in U.S. consumer inflation expectations kept the dollar rally in check on Tuesday as traders reaffirmed their bets for a slew of Federal Reserve rate cuts this year. The New York Fed's latest Survey of Consumer Expectations showed on Monday that U.S. consumers' projection of inflation over the short run fell to the lowest level in nearly three years in December. A reading on U.S. inflation is due later in the week, which will likely provide further clarity on how much room the Fed has to ease rates this year.",
        comments: [
          {
            author: "Samantha Lee",
            content: "Bitcoin lets invest",
          },
        ],
      },
      {
        title: "India's Interim budget 2024",
        category: "Business",
        image: "budget.png",
        content: "The finance minister set the stage for a 'Viksit Bharat by 2047', on the core principles of ‘Sabka Saath’, ‘Sabka Vikas’, ‘Sabka Vishwas’, with ‘Sabka Prayas’ being added as a new theme in the interim Budget. This Budget's four core strategic areas came as GYAN: G for Garib Kalyan, Y for Youth empowerment, A for Anna-data i.e., farmer welfare and N for Nari utthan i.e., support for women entrepreneurs. Finance Minister Nirmala Sitharaman stressed on 5 ‘Disha Nirdashak’ baatein: Social justice as an effective governance model; Focus on the poor, youth, women, and the Annadata (farmers); Focus on infrastructure; Use of technology to improve productivity and High power committee for challenges arising from demographic challenges.",
        comments: [
          {
            author:"Shantanu Jain",
            content: "Best decision is regarding the  No extension of lower tax rate to new manufacturing units coming into place after March 2024,"
          }
        ],
      },
      {
        title: "Taylor Swift Makes GRAMMY History With Fourth Album Of The Year Win in 2024",
        category: "Entertainment",
        image: "taylor.png",
        content: "The pop superstar won the GRAMMY for Album Of The Year for Midnights at the 2024 GRAMMYs, marking her fourth win in the Category — the most Album Of The Year wins of any artist at the GRAMMYs. She exclaimed, 'I would love to tell you that this is the best moment of my life, but I feel this happy when I finish a song, or when I crack to code to a bridge I love, or when I'm shortlisting a music video, or when I'm rehearsing with my dancers or my band, or getting ready to go to Tokyo to play a show. For me the award is the work. All I wanna do is keep being able to do this. I love it so much, it makes me so happy.'",
        comments: [
          {
            author: "Mike Smith",
            content: "Fascinating!",
          },
        ],
      },
      {
        title: "Bride-to-be Rakul Preet Singh says there's 'no room for insecurities",
        category: "Entertainment",
        image: "rakul.png",
        content: "Rakul Preet Singh, who is gearing up to take the plunge with her long-term beau Jackky Bhagnani, opened up about matters of the heart and hared her secret to a healthy and enduring relationship. In an interview with Cosmopolitan India, Rakul emphasized the importance of self-completeness and the importance of addressing insecurities in a relationship. The actress revealed that Jackky and she discussed the significance of understanding their shortcomings and the importance of fostering a relationship without insecurities. They reportedly estanlished these factors even before going public with their romance.",
        comments: [
          {
            author: "Sarah Johnson",
            content: "Enjoyed reading this.",
          },
          {
            author: "Rahul Jain",
            content: "Congratulations!",
          },
        ],
      },
    ];

// Function to display all articles
function displayAllArticles() {
    var articleSection = document.getElementById("article-section");
    articleSection.innerHTML = ""; // Clear existing articles
    
    articles.forEach(function(article) {
        var articleDiv = createArticleDiv(article);
        articleSection.appendChild(articleDiv);
    });
}

// Function to display articles by category
function displayCategory(category) {
    var articleSection = document.getElementById("article-section");
    articleSection.innerHTML = ""; // Clear existing articles
    
    var categoryArticles = articles.filter(function(article) {
        return article.category === category;
    });
    
    categoryArticles.forEach(function(article) {
        var articleDiv = createArticleDiv(article);
        articleSection.appendChild(articleDiv);
    });
}

// Helper function to create article div
function createArticleDiv(article) {
    var articleDiv = document.createElement("div");
    articleDiv.className = "article";
    
    var imageDiv = document.createElement("div");
    var image = document.createElement("img");
    image.className="article-img";
    image.src = article.image;
    imageDiv.appendChild(image);
    articleDiv.appendChild(imageDiv);
    
    var contentDiv = document.createElement("div");
    contentDiv.className = "article-content";
    
    var title = document.createElement("h2");
    title.innerText = article.title;
    contentDiv.appendChild(title);
    
    var content = document.createElement("p");
    content.innerText = article.content;
    contentDiv.appendChild(content);
    
    var commentSection = document.createElement("div");
    commentSection.className = "comment-section";
    
    var commentTitle = document.createElement("h3");
    commentTitle.innerText = "Comments";
    commentSection.appendChild(commentTitle);
    
    var commentList = document.createElement("ul");
    commentList.id = "comment-list-" + article.title.replace(/\s+/g, '-').toLowerCase();
    commentList.className = "comment-list";
    
    article.comments.forEach(function(comment) {
        var commentItem = document.createElement("li");
        commentItem.innerText = comment.author + ": " + comment.content;
        commentList.appendChild(commentItem);
    });
    
    commentSection.appendChild(commentList);
    
    var commentForm = document.createElement("form");
    commentForm.onsubmit = function(event) {
        event.preventDefault();
        var authorInput = commentForm.elements["author"];
        var contentInput = commentForm.elements["content"];
        var author = authorInput.value;
        var content = contentInput.value;
        
        if (author.trim() !== "" && content.trim() !== "") {
            var newComment = {
                author: author,
                content: content
            };
            article.comments.push(newComment);
            
            var newCommentItem = document.createElement("li");
            newCommentItem.innerText = author + ": " + content;
            commentList.appendChild(newCommentItem);
            
            // Clear input fields
            authorInput.value = "";
            contentInput.value = "";
        }
    };
    
    var heading= document.createElement("h3");
    heading.innerText="Add a Comment";
    commentForm.appendChild(heading);
    
    var authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.name = "author";
    authorInput.placeholder = "Your Name";
    commentForm.appendChild(authorInput);
    commentForm.appendChild(document.createElement("br")); // Add line break
    
    var contentInput = document.createElement("textarea");
    contentInput.name = "content";
    contentInput.placeholder = "Your Comment";
    commentForm.appendChild(contentInput);
    commentForm.appendChild(document.createElement("br")); // Add line break
    
    var submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    submitButton.className = "submit";
    commentForm.appendChild(submitButton);
    
    commentSection.appendChild(commentForm);
    
    contentDiv.appendChild(commentSection);
    
    articleDiv.appendChild(contentDiv);
    
    return articleDiv;
}
displayAllArticles();