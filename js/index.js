
$(document).ready(function () {


    // console.log('ready')
    $("#search_Btn").click(function () {
        // console.log('search_Btn  click')

        $.ajax({
            type: 'GET',
            url: 'https://remotive.com/api/remote-jobs',
            dataType: "json",

            success: function (s) {


                console.log('success')
                // console.log(s.jobs[0].tags)
                // console.log('value')

                // console.log(s.jobs[0].tags.value)
                var rawTags = s.jobs[0].tags;
                var allTags = '';

                var tagsDiv = '';
                rawTags.forEach(tg => {
                    allTags += tg + ','
                    let tags = `<div class="box-item">${tg}</div>`
                    
                    tagsDiv += tags;
                });


                // console.log('allTags: ' + allTags);

                var jobCard = `
                    <div class="card col-md-12 col-sm-12">

                    <div class="card-body ">

                        <div class="row">

                            <div class="img  col-md-3 col-sm-12">
                                <img src="${s.jobs[0].company_logo}" alt="">
                            </div>

                            <div class="prembale col-md-9 col-sm-12">

                                <span class="comp-name">${s.jobs[0].company_name}</span><br>
                                <span class="comp-loc">${s.jobs[0].candidate_required_location}</span>
                            </div>
                        </div>
                        <br>
                        <div class="tozihat-job">

                            <h1>${s.jobs[0].title}</h1><br>
                            <h4> - Category : <span> ${s.jobs[0].category} </span></h4>
                            <h4> - Job Type : <span> ${s.jobs[0].job_type} </span></h4>

                            <div class="Description">
                                <label> - Description :</label><br>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatibus!
                                <p>${s.jobs[0].description}</p>
                            </div>

                            <label> - Salary : </label><span>${s.jobs[0].salary}</span>

                            <h4> - Tags</h4>
                            ${tagsDiv}
                                
                                

                                
                                

                            </div>

                        </div>
                        <div class="d-flex flex-row-reverse max-width">
                            <button type="button" class="btn btn-primary btn-lg">Apply</button>
                        </div>
                    </div>
                </div>`

                // $("#result").append(jobCard);
                // console.log(s.jobs[5]);

                for(let i =0; i<=s.jobs.length; i++) {
                    $("#result").append(jobCard);   
                }

            },

            error: function (request, status, error) {

                alert("Error is : " + error);
            }

        });








    });
});