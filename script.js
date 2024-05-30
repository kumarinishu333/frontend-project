// You can add JavaScript here for additional functionality if needed
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is running');
});
function searchGuru() {
    var input, filter, resultsDiv;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    
    // Example data, replace with actual data source
    var gurus = [
        { name: "Rodney T. Doyon", expertise: "Yoga" },
        { name: "Luella J. Robles", expertise: "Sanskrit" },
        { name: "David E. Lampkin", expertise: "Math" },
        { name: "Michael B. Maxwell", expertise: "History" },
        { name: "Linda R. Gibson", expertise: "PHP Development" },
        { name: "Douglas M. Mikel", expertise: "Chemistry" }
    ];
    
    for (var i = 0; i < gurus.length; i++) {
        if (gurus[i].name.toUpperCase().indexOf(filter) > -1 || gurus[i].expertise.toUpperCase().indexOf(filter) > -1) {
            var guruDiv = document.createElement('div');
            guruDiv.innerHTML = `<strong>${gurus[i].name}</strong> - ${gurus[i].expertise}`;
            resultsDiv.appendChild(guruDiv);
        }
    }
}
