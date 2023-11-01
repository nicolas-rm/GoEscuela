$(function () {


    var Container = {
        scrumboard: $('.scrumboard'),
        card: $('.scrumboard .card')
    }

    // Containers
    var scrumboard = Container.scrumboard;
    var card = Container.card;


    // Make Task Sortable

    function $_taskSortable() {
        $('[data-sortable="true"]').sortable({
            connectWith: '.connect-sorting-content',
            items: ".card",
            cursor: 'move',
            placeholder: "ui-state-highlight",
            refreshPosition: true,
            stop: function (event, ui) {
                var parent_ui = ui.item.parent().attr('data-section');

            },
            update: function (event, ui) {
                console.log(ui);
                console.log(ui.item);
            }
        });
    }

    // Click on Add Task button to open the modal and more..

    function addTask() {
        $('.addTask').on('click', function (event) {
            event.preventDefault();
            getParentElement = $(this).parents('[data-connect="sorting"]').attr('data-section');
            $('.edit-task-title').hide();
            $('.add-task-title').show();
            $('[data-btnfn="addTask"]').show();
            $('[data-btnfn="editTask"]').hide();
            // $('.addTaskAccordion .collapse').collapse('hide');
            $('#addTaskModal').modal('show');
            $_taskAdd(getParentElement);
        });
    }

    // Get the range count value

    $('#progress-range-counter').on('input', function (event) {
        event.preventDefault();
        /* Act on the event */
        getRangeValue = $(this).val();
        $('.range-count-number').html(getRangeValue);
        $('.range-count-number').attr('data-rangeCountNumber', getRangeValue);
    });

    // Reset the input Values

    $('#addTaskModal, #addListModal').on('hidden.bs.modal', function (e) {
        $('input,textarea').val('');
        $('input[type="range"]').val(0);
        $('.range-count-number').attr('data-rangecountnumber', 0);
        $('.range-count-number').html(0);
    })


    function $_taskAdd(getParent) {

        $('[data-btnfn="addTask"]').off('click').on('click', function (event) {

            getAddBtnClass = $(this).attr('class').split(' ')[1];

            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth()); //January is 0!
            var yyyy = today.getFullYear();

            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            today = dd + ' ' + monthNames[mm] + ', ' + yyyy;

            var $_getParent = getParent;


            var $_task = document.getElementById('s-task').value;
            var $_taskText = document.getElementById('s-text').value;

            var $_taskProgress = $('.range-count-number').attr('data-rangeCountNumber');

            if ($_taskText == '') {

                $html = '<div data-draggable="true" class="card task-text-progress" style="">' +
                    '<div class="card-body">' +

                    '<div class="task-header">' +

                    '<div class="">' +
                    '<h4 class="" data-taskTitle="' + $_task + '">' + $_task + '</h4>' +
                    '</div>' +

                    '<div class="">' +
                    '<div class="dropdown">' +
                    '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                    '<i class="ti ti-dots-vertical text-dark"></i>' +
                    '</a>' +
                    '<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-4">' +
                    '<a class="dropdown-item s-task-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);"><i class="ti ti-pencil fs-5"></i>Edit</a>' +
                    '<a class="dropdown-item s-task-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);"><i class="ti ti-trash fs-5"></i>Delete</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +


                    '<div class="task-body">' +

                    '<div class="task-bottom">' +
                    '<div class="tb-section-1">' +
                    '<span class="hstack gap-2 fs-2" data-taskDate="' + today + '"><i class="ti ti-calendar fs-5"></i> ' + today + '</span>' +
                    '</div>' +
                    '<div class="tb-section-2">' +
                    '<span class="badge text-bg-success fs-1">Design</span>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +

                    '</div>' +
                    '</div>';

            } else {
                $html = '<div data-draggable="true" class="card task-text-progress" style="">' +
                    '<div class="card-body">' +

                    '<div class="task-header">' +

                    '<div class="">' +
                    '<h4 class="" data-taskTitle="' + $_task + '">' + $_task + '</h4>' +
                    '</div>' +

                    '<div class="">' +
                    '<div class="dropdown">' +
                    '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
                    '<i class="ti ti-dots-vertical text-dark"></i>' +
                    '</a>' +
                    '<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-4">' +
                    '<a class="dropdown-item s-task-edit cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);"><i class="ti ti-pencil fs-5"></i>Edit</a>' +
                    '<a class="dropdown-item s-task-delete cursor-pointer d-flex align-items-center gap-1" href="javascript:void(0);"><i class="ti ti-trash fs-5"></i>Delete</a>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +

                    '<div class="task-body">' +

                    '<div class="task-content">' +
                    '<p class="mb-0" data-taskText="' + $_taskText + '">' + $_taskText + '</p>' +
                    '</div>' +

                    '<div class="task-bottom">' +
                    '<div class="tb-section-1">' +
                    '<span class="hstack gap-2 fs-2" data-taskDate="' + today + '"><i class="ti ti-calendar fs-5"></i> ' + today + '</span>' +
                    '</div>' +
                    '<div class="tb-section-2">' +
                    '<span class="badge text-bg-success fs-1">Design</span>' +
                    '</div>' +
                    '</div>' +

                    '</div>' +

                    '</div>' +
                    '</div>';

            }

            $("[data-section='" + $_getParent + "'] .connect-sorting-content").append($html);


            $('#addTaskModal').modal('hide');

            $_taskEdit();
            $_taskDelete();
        });
    }

    $("#add-list").off('click').on('click', function (event) {
        event.preventDefault();

        $('.add-list').show();
        $('.edit-list').hide();
        $('.edit-list-title').hide();
        $('.add-list-title').show();
        $('#addListModal').modal('show');
    });

    $(".add-list").off('click').on('click', function (event) {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '.' + dd + '.' + yyyy;

        var $_listTitle = document.getElementById('s-list-name').value;

        var $_listTitleLower = $_listTitle.toLowerCase();
        var $_listTitleRemoveWhiteSpaces = $_listTitleLower.split(' ').join('_');
        var $_listSectionDataAttr = $_listTitleRemoveWhiteSpaces;


        $html = '<div data-section="s-' + $_listSectionDataAttr + '" class="task-list-container  mb-4 " data-connect="sorting">' +
            '<div class="connect-sorting">' +
            '<div class="task-container-header">' +
            '<h6 class="s-heading mb-0 fs-4 fw-semibold" data-listTitle="' + $_listTitle + '">' + $_listTitle + '</h6>' +
            '<div class="hstack gap-2">' +
            '<div class="add-s-task">' +
            '<a class="addTask d-flex align-items-center justify-content-center gap-1 lh-sm" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Task"><i class="ti ti-plus text-dark"></i></a>' +
            '</div>' +
            '<div class="dropdown">' +
            '<a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink-4" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">' +
            '<i class="ti ti-dots-vertical text-dark"></i>' +
            '</a>' +
            '<div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuLink-4">' +
            '<a class="dropdown-item list-edit" href="javascript:void(0);">Edit</a>' +
            '<a class="dropdown-item list-delete" href="javascript:void(0);">Delete</a>' +
            '<a class="dropdown-item list-clear-all" href="javascript:void(0);">Clear All</a>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +

            '<div class="connect-sorting-content" data-sortable="true">' +


            '</div>' +


            '</div>' +
            '</div>';

        $(".task-list-section").append($html);
        $('#addListModal').modal('hide');
        $('#s-list-name').val('');
        $_taskSortable();
        $_editList()
        $_deleteList();
        $_clearList();
        addTask();
        $_taskEdit();
        $_taskDelete();


        // =================================
        // Tooltip
        // =================================
        var tooltipTriggerList = [].slice.call(
            document.querySelectorAll('[data-bs-toggle="tooltip"]')
        );
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl);
        });
    })

    // Delete the whole list including tasks at on click

    function $_deleteList() {
        $('.list-delete').off('click').on('click', function (event) {
            event.preventDefault();
            $(this).parents('[data-connect]').remove();
        })
    }
    function $_editList() {
        $('.list-edit').off('click').on('click', function (event) {

            event.preventDefault();

            var $_outerThis = $(this);

            $('.add-list').hide();
            $('.edit-list').show();

            $('.add-list-title').hide();
            $('.edit-list-title').show();

            var $_listTitle = $_outerThis.parents('[data-connect="sorting"]').find('.s-heading').attr('data-listTitle');
            $('#s-list-name').val($_listTitle);

            $('.edit-list').off('click').on('click', function (event) {
                var $_innerThis = $(this);
                var $_getListTitle = document.getElementById('s-list-name').value;

                var $_editedListTitle = $_outerThis.parents('[data-connect="sorting"]').find('.s-heading').html($_getListTitle);
                var $_editedListTitleDataAttr = $_outerThis.parents('[data-connect="sorting"]').find('.s-heading').attr('data-listTitle', $_getListTitle);

                $('#addListModal').modal('hide');
                $('#s-list-name').val('');
            })
            $('#addListModal').modal('show');
            $('#addListModal').on('hidden.bs.modal', function (e) {
                $('#s-list-name').val('');
            })
        })
    }

    // Clear all task at on click

    function $_clearList() {
        $('.list-clear-all').off('click').on('click', function (event) {
            event.preventDefault();
            $(this).parents('[data-connect="sorting"]').find('.connect-sorting-content .card').remove();
        })
    }

    // Delete the task on click 

    function $_taskDelete() {
        $('.card .s-task-delete').off('click').on('click', function (event) {
            event.preventDefault();

            get_card_parent = $(this).parents('.card');

            $('#deleteConformation').modal('show');

            $('[data-remove="task"]').on('click', function (event) {
                event.preventDefault();
                /* Act on the event */
                get_card_parent.remove();
                $('#deleteConformation').modal('hide');
            });

        })
    }

    function $_taskEdit() {
        $('.card .s-task-edit').off('click').on('click', function (event) {

            event.preventDefault();

            var $_outerThis = $(this);

            $('.add-task-title').hide();
            $('.edit-task-title').show();

            $('[data-btnfn="addTask"]').hide();
            $('[data-btnfn="editTask"]').show();

            var $_taskTitle = $_outerThis.parents('.card').find('h4').attr('data-taskTitle');
            var get_value_title = $('.task-text-progress #s-task').val($_taskTitle);

            var $_taskText = $_outerThis.parents('.card').find('p:not(".progress-count")').attr('data-taskText');
            var get_value_text = $('.task-text-progress #s-text').val($_taskText);

            var $_taskProgress = $_outerThis.parents('.card').find('div.progress-bar').attr('data-progressState');
            var get_value_progress = $('#progress-range-counter').val($_taskProgress);
            var get_value_progressHtml = $('.range-count-number').html($_taskProgress);
            var get_value_progressDataAttr = $('.range-count-number').attr('data-rangecountnumber', $_taskProgress);

            $('[data-btnfn="editTask"]').off('click').on('click', function (event) {
                var $_innerThis = $(this);

                var $_taskValue = document.getElementById('s-task').value;
                var $_taskTextValue = document.getElementById('s-text').value;
                var $_taskProgressValue = $('.range-count-number').attr('data-rangeCountNumber');

                var $_taskDataAttr = $_outerThis.parents('.card').find('h4').attr('data-taskTitle', $_taskValue);
                var $_taskTitle = $_outerThis.parents('.card').find('h4').html($_taskValue);
                var $_taskTextDataAttr = $_outerThis.parents('.card').find('p:not(".progress-count")').attr('data-tasktext', $_taskTextValue);
                var $_taskText = $_outerThis.parents('.card').find('p:not(".progress-count")').html($_taskTextValue);

                var $_taskProgressStyle = $_outerThis.parents('.card').find('div.progress-bar').attr('style', "width: " + $_taskProgressValue + "%");
                var $_taskProgressDataAttr = $_outerThis.parents('.card').find('div.progress-bar').attr('data-progressState', $_taskProgressValue);
                var $_taskProgressAriaAttr = $_outerThis.parents('.card').find('div.progress-bar').attr('aria-valuenow', $_taskProgressValue);
                var $_taskProgressProgressCount = $_outerThis.parents('.card').find('.progress-count').html($_taskProgressValue + "%");

                $('#addTaskModal').modal('hide');
                var setDate = $('.taskDate').html('');
                $('.taskDate').hide();
            })
            $('#addTaskModal').modal('show');
        })
    }

    $_editList();
    $_deleteList();
    $_clearList();
    addTask();
    $_taskEdit();
    $_taskDelete();
    $_taskSortable();

});