function filterGlobal () {
    $('.datatable').DataTable().search(
        $('#global_filter').val(),
        true,
        true
    ).draw();
}

$(document).ready(function () {
    tb1 = $('.datatable').DataTable({
        "ordering": false,
        "sDom": '<"top"l>rt<"bottom"ip><"clear">'
    });

    $('input.global_filter').on( 'keyup click', function () {
        filterGlobal();
    } );
});