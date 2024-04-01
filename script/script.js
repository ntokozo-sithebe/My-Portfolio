
let testimonials = JSON.parse(localStorage.getItem("testimonials")) || localStorage.setItem("testimonials", JSON.stringify([
    {       id: 1,
            name: "Ishmael",
            surname: "Brown",
            title:"Former Facilitator at Astron Energy and BAB Developers ",
            quotes: "Ntokozo has consistently demonstrated exceptional dedication and commitment during her learnership. Her academic performance has been outstanding,consistently ranking at the top of her class. In particular, I found her ability to grasp new concepts such as Chemistry, Environmental Awareness and Problem Solving particularly pleasing. Her ability to grasp complex concepts and solve problems with ease is a testament to her strong analytical skills and unwavering determination",
            profile: "https://i.ibb.co/DpDLQDy/Screenshot-20231102-115458-Gallery.jpg"
        },
        {   id: 2,
            name: "Pinda",
            surname: "Fortuin",
            title:"Colleague",
            quotes: "I have no doubt that Ntokozo Sithebe possesses the qualities necessary for success in her future endeavours. Her passion for learning, her ability to adapt and overcome challenges, and her commitment to excellence make her an outstanding individual. I wholeheartedly recommend Ntokozo for any academic or professional pursuit she elects to embark on",
            profile: "https://i.ibb.co/LZ3HL27/image-1.jpg"
        },
        {   id: 3,
            name: "Simamkele",
            surname: "Tancu",
            title:"Colleague",
            quotes: "I highly recommend Ntokozo Sithebe as a software developer. Her technical expertise, commitment to quality, and strong communication skills make her an asset to any team. I look forward to working with her again in the future",
            profile: "https://i.ibb.co/cQKG4yR/simamkele-tancu.jpg"
        },
        {   id: 4,
            name: "Thimna",
            surname: "Alam",
            title:"Colleague",
            quotes: "Ntokozo is the most goal driven person I have ever met. She is always willing to learn - curious in other words. Her brightest feature is her boldness - she is never afraid to speak her mind, her truth and her timing at that is amazing. Among all her amazing features she is well- mannered, respectful of her surroundings and focused.",
          profile: "https://i.ibb.co/WsQ54g2/LC2.jpg"
        }, 
        {   id: 5,
            name: "Zubaidah",
            surname: "Isaacs",
            title:"Colleague",
            quotes: "Ntokozo Sithebe is someone that is kind, funny and very hardworking. She is dedicated to her craft and always does her best in whatever, situation she finds herself in.",
          profile: "https://i.ibb.co/sW7qs0W/image-3.png"
        }, 
    
        {   id: 6,
            name: "Seth",
            surname: "Tobias",
            title:"Colleague",
            quotes: "Ntokozo is a very bright person. She has a very bubbly and friendly personality. She is a very mindful person and appreciates all the small things in life. She is also quite inspirational as her outlook on life is quite profound and eye opening. Her smile brightens any room she walks into. She has a way with people and has a calming aura",
            profile: "https://i.ibb.co/K21vWCJ/image-4.png"
        }
]));

const testWrapper = document.querySelector("[data-testimony]");

function ViewTestimonials(){
    testWrapper.innerHTML = "";
    try{
        if(testimonials){
            testimonials.forEach((testimonials)=>{
                testWrapper.innerHTML += 
                `<div class="card d-flex justify-content-center" id="front">
                <h5 class="card-title">${testimonials.name} ${testimonials.surname}</h5
                <h5 class="card-title">${testimonials.title}</h5>    
        
                <div class="card-body">
                 <img scr="${testimonials.profile}" class="profiles card-img-top w-25" alt='profile'

                <div class="back">
                <p class="card-text">${testimonials.quotes}.</p>'
                </div>

                </div>
              </div>`;
      });
    } else {
      fineWrapper.innerHTML += `<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;
    }
            }catch{
                error.message

            }
        }
    ViewTestimonials();
    


    let projects = JSON.parse(localStorage.getItem("projects")) || localStorage.setItem("projects", JSON.stringify([
        {
            name: "Capstone Project",
            description: "E-commerce using MySQL, Node.js, Vue,js, Html and CSS",
            gitHub: "https://believeinbetter-capstone.web.app/  ",
            netlify: "https://gym-kini-capstone.onrender.com/ "
        },
        {
            name: "E-Commerce",
            description: "My first e-commerce - using HTML and CSS",
            gitHub: "https://github.com/ntokozo-sithebe/ecommerce.git",
            netlify: "https://app.netlify.com/sites/starlit-gelato-a806a6/"
        },
        {
            name: "Bootstrap Portfolio",
            description: "My First Portfolio - using Bootstrap",
            gitHub: "https://github.com/ntokozo-sithebe/Ntokozo-s-Portfolio.git",
            netlify: "https://app.netlify.com/sites/scintillating-moxie-9328bf/"
        },
        {
            name: "Calculator",
            description: "Creating a calculator - using HTML,CSS and Javascript",
            gitHub: "https://github.com/ntokozo-sithebe/my_Calculator.git",
            netlify: "https://app.netlify.com/sites/beamish-cranachan-1fbe34/"
        },
        {
            name: "Keyboard",
            description: "Creating a keyboard - using HTML and CSS",
            gitHub: "https://github.com/ntokozo-sithebe/My-Keyboard.git",
            netlify: "https://fastidious-beignet-6ed204.netlify.app/"
        },
        {
            name: "Fine SKN E-commerce",
            description: "Skin-care e-commerce - using HTML, CSS and Javascript",
            gitHub: "https://github.com/ntokozo-sithebe/fineSkn_--ecommerce.git",
            netlify: "https://silver-lebkuchen-2176b2.netlify.app/"
        }
    ]))
    const proWrapper = document.querySelector("[data-projects]")

    function ViewProjects(){
       
        proWrapper.innerHTML = "";
    try{
        if(projects){
            projects.forEach((projects)=>{
                proWrapper.innerHTML += 
                ` <div class="card-body text-center">
                    <h5 class="card-title"> ${ projects.name }</h5>
                    <p class="card-text"> ${ projects.description }</p>
                  </div> 
                  <div class="card-body align-items-center">
                    <div>
                            <a :href="projects.gitHub" target="_blank" class="card-link"><button class="btn btn-primary" type="button">Github</button></a>
                         
                            <a :href="projects.netlify" target="_blank" class="card-link"><button class="btn btn-secondary" type="button">Netlify</button></a>
                         
                    </div>
                  </div>
                </div>
                </div>
            </div>`;
      });
    } else {
        proWrapper.innerHTML += `<div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>`;
    }
            }catch{
                error.message

            }
        }

ViewProjects()
    