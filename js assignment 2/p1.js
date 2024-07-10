//Q1) Create an array of states in india.
//Remove all the names starting with vowels from the list. Use array.filter.
let state= ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
     "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
let newstate=state.filter(state=> !/^[AEIOUaeiou]/.test(state))//^ use for start
console.log(newstate);