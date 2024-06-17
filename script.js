function submitForm() {
    
    var form = document.getElementById('container');
    const formData = new FormData(form);
    const newRow = document.createElement('tr');
    formData.forEach((value, key) => {
        const newCell = document.createElement('td');
        newCell.textContent = value;
        newRow.append(newCell);
    });
    const tableBody = document.getElementById('dataTable').querySelector('tbody');
    tableBody.append(newRow);
    form.reset();
}
