function areAnagrams(str1, str2) {
 // Convert strings to lowercase and remove non-alphabet characters
 const cleanStr1 = str1.toLowerCase().replace(/[^a-z]/g, '');
 const cleanStr2 = str2.toLowerCase().replace(/[^a-z]/g, '');

  
// Sort characters of the cleaned strings
  const sortedStr1 = cleanStr1.split('').sort().join('');
  const sortedStr2 = cleanStr2.split('').sort().join('');

  
// Compare sorted strings
    return sortedStr1 === sortedStr2;

  }
  
  
// Test cases
  console.log(areAnagrams("foefet", "toffee")); // true
  console.log(areAnagrams("Buckethead", "DeathCubeK")); // true
  