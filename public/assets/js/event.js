let event = {
    name: '',
    description: '',
    organiserName: '',
    organiserPhone: '',
    organiserEmail: '',
    organiserAddress: '',
    website: '',
    targetAge: '',
    fromDate: new Date(1995, 11, 17),
    toDate: new Date(1995, 11, 17),
    fromTime: '',
    toTime: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    district: '',
    state: '',
    country: '',
    pin: 123400,
    gallery: {
        title: '',
        img_path: ''
    },
    img_coverPic: '',
    going: 0,
    notGoing: 0,
    mayBeGoing: 0,
    views: 0,
    bookmarks: 0
};

function addObj() {
    let form = document.getElementById('the_form');
    let college = form.elements.searchfield.value;
    event.name = form.elements.name.value;
}


let countBox = 1;
let boxName = 0;

function addNextImg() {
    let boxName = "imgBox" + countBox;
    document.getElementById('responce').innerHTML += '<br/><input type="file" id="' + boxName + '" class="validate" />';
    countBox += 1;
}