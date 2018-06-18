$('select').formSelect();
$('.timepicker').timepicker();
$('.datepicker').datepicker();
$('.modal').modal();

const elem = document.querySelector('.modal');
const instance = M.Modal.getInstance(elem);
const form = $('#the_form');

form.submit(e => {
    e.preventDefault();
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: data => {
            instance.open();
        },
        error: err => console.error(err)
    })
});