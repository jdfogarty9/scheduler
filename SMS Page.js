// Updated selectAllAvailable function
function selectAllAvailable() {
    const searchStr = employeeSearch.trim().toLowerCase();
    const filteredEmployees = available.filter(emp => 
        (emp.name + ' ' + (emp.phone || '')).toLowerCase().includes(searchStr)
    );

    filteredEmployees.forEach(emp => {
        recipients.push(emp);
        available = available.filter(e => e !== emp);
    });

    selectedIndexes = [];
    render();
}