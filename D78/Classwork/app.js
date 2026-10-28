document.querySelector("#button-random").addEventListener("click", () => {
                let randomNumber = Math.floor(Math.random() * 6) + 1;
                
                let title = "";
                let imdb = "";
                let cast = "";
                let story = "";

                switch (randomNumber) {
                    case 1:
                        title = "Enola Holmes (2020)";
                        imdb = "6.6";
                        cast = "Millie Bobby Brown, Henry Cavill, Sam Claflin";
                        story = "Enola Holmes is the young sister of Sherlock Holmes. When her mother disappears, Enola runs away to London to find her and becomes a super detective.";
                        break;
                    case 2:
                        title = "The Christmas Chronicles (2018)";
                        imdb = "7.0";
                        cast = "Kurt Russell, Darby Camp, Judah Lewis";
                        story = "A sister and brother plan to catch Santa Claus on camera on Christmas Eve. Instead, they join Santa on a magical journey to save the holiday.";
                        break;
                    case 3:
                        title = "Anne with an E (2017–2020)";
                        imdb = "8.6";
                        cast = "Amybeth McNulty, Geraldine James, R.H. Thomson";
                        story = "A young, imaginative orphan girl is accidentally sent to live with an old brother and sister. Her bright energy changes their quiet lives completely.";
                        break;
                    case 4:
                        title = "Luz: The Light of Heart (2024– )";
                        imdb = "7.5";
                        cast = "Marianna Santos, Daniel Rocha, Gabriela Moreyra";
                        story = "A kind and brave orphan girl, Luz, is raised by a Kaingang family. She starts a big journey at a school to discover the truth about her past.";
                        break;
                    case 5:
                        title = "Harry Potter and the Prisoner of Azkaban (2004)";
                        imdb = "7.9";
                        cast = "Daniel Radcliffe, Emma Watson, Rupert Grint";
                        story = "In his third year at Hogwarts, Harry learns that a dangerous wizard named Sirius Black escaped from Azkaban prison and is looking for him.";
                        break;
                    case 6:
                        title = "Just Add Magic (2015–2020)";
                        imdb = "8.2";
                        cast = "Olivia Sanabia, Abby Donnelly, Aubrey K. Miller";
                        story = "Three best friends find a mysterious, old cookbook in the attic. They quickly discover that the recipes inside are actually magic spells.";
                        break;
                }

                document.getElementById("movie-display").innerHTML = `
                    <div>
                        Lucky Number: ${randomNumber}/6 <br>
                        Movie: ${title} <br>
                        IMDb: ${imdb} <br>
                        Cast: ${cast} <br>
                        Story: ${story}
                    </div>
                `;
            });