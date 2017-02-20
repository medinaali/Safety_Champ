// Project Name: Safety Champs, Description: Interactive platform for kids to learn about Child Abuse Prevention 
// Developer: Medina Ali, www.medinaali.com, medinaali@nyu.edu 
// Designer: Akshay Iyer, http://www.akshayiyer.in, akshay.iyer@nyu.edu 
// Idea/Concept & Software Development Copyright: Medina Ali 
// Resource, Research and Media Credit: HowToTellYourChild.com , https://www.youtube.com/watch?v=uJCWysVuxcs 

                function showYes() {
                    document.getElementById("yesResponse").innerHTML = "Correct! :) "
                    document.getElementById('nextbutton').style.display = "block";
                    noarea.style.visibility = "hidden";
             }

                function showNo() {
                    document.getElementById("noResponse").innerHTML = "Wrong! :( "
                    document.getElementById('tryagainbutton').style.display = "block";
                    yesarea.style.visibility = "hidden";
                }