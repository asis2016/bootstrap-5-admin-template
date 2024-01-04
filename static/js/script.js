$(document).ready(function () {
    /**
     * For sidebarToggled
     */

    // Function to toggle sidebar
    function toggleSidebar() {
        $('body').toggleClass('sidebarToggled');

        //Uncomment this for enabling localstorage
        //localStorage.setItem('amjSidebarToggle', $('body').hasClass('sidebarToggled'));
    }

    // Sidebar toggle button
    let sidebarToggleBtn = $('#sidebarToggleBtn');
    if (sidebarToggleBtn.length) {

        //Uncomment this for enabling localstorage
        // if (localStorage.getItem('amjSidebarToggle') === 'true') {
        //     toggleSidebar();
        // }

        sidebarToggleBtn.on('click', function (event) {
            event.preventDefault();
            toggleSidebar();
        });
    }

    // Untoggle sidebar button
    let sidebarUntoggleBtn = $('#sidebarUntoggleBtn');
    if (sidebarUntoggleBtn.length) {
        sidebarUntoggleBtn.on('click', function (event) {
            event.preventDefault();
            toggleSidebar();
            // $('.wrapper #mainSidebar').toggleClass('d-none');
        });
    };

});