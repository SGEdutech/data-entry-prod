/*function addObj() {
    let form = document.getElementById('the_form');
    let college = form.elements.searchfield.value;
    event.name = form.elements.name.value;
}*/

let countBox = 1;

let sample = `<div class="input-field col s4">
                    <input type="text" name="title ` + countBox + ` " id="title` + countBox + `" placeholder="write something about result">
                    <label for="title"> Past Result </label>
                </div>

                <div class="file-field input-field col s12">
                    <div class="btn">
                        <span>Past Results Pic</span>
                        <input type="file" name="img_path ` + countBox + `">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text" placeholder="Upload picture">
                    </div>
                </div>`;


let boxName = 0;

function addNextImgNText() {
    let boxName = "imgBox" + countBox;
    document.getElementById('holder').innerHTML += sample;
    countBox += 1;
}

