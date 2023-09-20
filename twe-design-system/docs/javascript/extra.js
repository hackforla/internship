const selectElement = document.querySelector('.dropdowns');


selectElement.addEventListener('click', () => {
    const options = selectElement.querySelectorAll('option');
    
    options.forEach((option) => {
        option.style.backgroundColor = 'RED';
        option.style.height = '48px';
        option.style.padding = '10px'

    });

    
});
