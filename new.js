function findHospitals() {
    // 1. User ki query uthao
    let query = document.getElementById('userSearch').value;
    
    if(query === "") {
        alert("Bhai, pehle area ya bimmari ka naam toh likho!");
        return;
    }

    // 2. Google Maps Embed URL (Search Mode)
    // 'q' stands for Query, 'z' stands for Zoom
    // Humne 'hospital' ya 'doctor' isliye joda taaki results accurate milein
    let searchQuery = encodeURIComponent(query + " hospital doctor");
    
    // Naya URL structure jo Google Maps ko search results mode mein dalta hai
    let mapUrl = `https://maps.google.com/maps?q=${searchQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

    // 3. Iframe update karo
    let iframe = document.getElementById('hospitalMap');
    iframe.src = mapUrl;

    // 4. Console log (debugging ke liye)
    console.log("Searching for:", query);
}