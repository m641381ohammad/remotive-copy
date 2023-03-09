const jobs = document.querySelector("#jobs")
const time_jobs = document.querySelector("#time_jobs")
const All_categories = document.querySelector(".All_categories")
const design = document.querySelector(".design")
const SEO = document.querySelector(".SEO")
const All_Types = document.querySelector(".All_Types")
const full_time = document.querySelector(".full_time")
const part_time = document.querySelector(".part_time")

$(document).ready(function () {

    $("#search_Btn").click(function () { 
        $.ajax({
            type: 'GET',
            url: 'https://remotive.com/api/remote-jobs',
            dataType: "json",

                success: function (s) { 

                for(let x; x<=s.jobs[0].tags.value; x++){
                        let tags = `<div class="box-item">${s.jobs[0].tags.value}</div>`
                        $("#items_tags").append(tags);
                        console.log(tags);
                    }

                    if(jobs === All_categories && time_jobs === All_Types) {

                        for (let i = 0; i<=s.jobs.length; i++) {

                            var jobCard = `
        <div class="card col-md-12 col-sm-12">

        <div class="card-body ">

            <div class="row">

                <div class="img  col-md-3 col-sm-12">
                    <img src= "${s.jobs[i].company_logo}" alt="">
                </div>

                <div class="prembale col-md-9 col-sm-12">

                    <span class="comp-name">${s.jobs[i].company_name}</span><br>
                    <span class="comp-loc">${s.jobs[i].candidate_required_location}</span>   
                </div> 
            </div>
            <br>
            <div class="tozihat-job">

                <h1>${s.jobs[i].title}</h1><br>
                <h4> - Category : <span> ${s.jobs[i].category} </span></h4>
                <h4> - Job Type : <span> ${s.jobs[i].job_type} </span></h4>

                <div class="Description">
                    <label> - Description :</label><br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus!
                    <p>${s.jobs[i].description}</p>
                </div>

                <label> - Salary : </label><span>${s.jobs[i].salary}</span>

                <h4> - Tags</h4>
                <div class="tags-item" id="items_tags"> </div>

            </div>
            <div class="d-flex flex-row-reverse max-width">
                <button type="button" class="btn btn-primary btn-lg">Apply</button>
            </div>
        </div>
    </div>`

        $("#result").append(jobCard);
    }

                    }else {
                        console.log("Err");
                    }

                },

                error: function (request, status, error) {
    
                    alert("Error is : " + error);
                }
            
        });
    
        






    });
});