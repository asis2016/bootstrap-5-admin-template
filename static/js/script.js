$(document).ready(function () {
    /**
     * For sidebarToggled
     */

    // Function to toggle sidebar
    function toggleSidebar() {
        $('body').toggleClass('sidebarToggled');
        localStorage.setItem('amjSidebarToggle', $('body').hasClass('sidebarToggled'));
    }

    // Sidebar toggle button
    let sidebarToggleBtn = $('#sidebarToggleBtn');
    if (sidebarToggleBtn.length) {
        if (localStorage.getItem('amjSidebarToggle') === 'true') {
            toggleSidebar();
        }

        sidebarToggleBtn.on('click', function (event) {
            event.preventDefault();
            console.log('clicked');
            toggleSidebar();
        });
    }

    // Untoggle sidebar button
    let sidebarUntoggleBtn = $('#sidebarUntoggleBtn');
    if (sidebarUntoggleBtn.length) {
        sidebarUntoggleBtn.on('click', function (event) {
            event.preventDefault();
            console.log('clicked');
            toggleSidebar();
            // $('.wrapper #mainSidebar').toggleClass('d-none');
        });
    }



    /**
     * For sidebarToggled
     */
    const ctx = document.getElementById('visitorBrowser');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Safari', 'Chrome', 'IE', 'Opera', 'Firefox', 'Others'],
            datasets: [{
                data: [10, 20, 20, 5, 42, 3],
                borderWidth: 1,
                backgroundColor: ['red', 'yellow', 'green', 'purple', 'orange', 'indigo']
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false  // Hide the legend
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            // Calculate the percentage and display it in the tooltip
                            let dataSum = context.dataset.data.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                            let currentValue = context.dataset.data[context.dataIndex];
                            let percentage = ((currentValue / dataSum) * 100).toFixed(2) + "%";
                            return percentage;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: false  // Hide x-axis
                },
                y: {
                    display: false  // Hide y-axis
                }
            },
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            responsive: false,
            height: 250, // Set the desired height
            width: 250 // Set the desired width
        }
    });
});