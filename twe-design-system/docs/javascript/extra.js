const selectTriggers = document.querySelectorAll(".select__trigger");

for (const trigger of selectTriggers) {
    trigger.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click event from propagating to the window
        const dropdown = this.closest('.select-wrapper').querySelector('.select');
        dropdown.classList.toggle('open');
    });
}

// Add this event listener to handle custom option selection
window.addEventListener('click', function(e) {
    const allCustomOptions = document.querySelectorAll('.custom-option');
    for (const customOption of allCustomOptions) {
        customOption.classList.remove('selected'); // Remove the class from all options
    }

    for (const select of document.querySelectorAll('.select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }

    // Check if the clicked element is a custom option and add the class
    if (e.target.classList.contains('custom-option')) {
        e.target.classList.add('selected');
    }
});
