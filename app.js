const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Tech", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1989, end: 1996},
    {name: "Company Eight", category: "Tech", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++){
//     console.log(companies[i])
// }

// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink)


//forEach - better way to loop through an array rather than a for 
// companies.forEach(function(company){
//     console.log(company)
// })



//filter - allows us to filter from an array

//get 21 and over
// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true
//     }
// })

// console.log(canDrink)
//Filter the retail company
// const retailCompanies = companies.filter(function(company){
//     if(company.category === "Retail"){
//             return true;
//     }
// })
// console.log(retailCompanies)


//map - map create new arrays from an exiting array
//create new array of company names
// const companyNames = companies.map(function(company) {
//     return company.name
// })

// console.log(companyNames);

// new arr of squared ages

// const agesSquare = ages.map(function(age){
//     return Math.sqrt(age)
// })

// console.log(agesSquare)



//sort - helps sort the information
    // const sortedCompanies = companies.sort(function(c1, c2) {
    //     if(c1.start > c2.start){
    //         return 1
    //     } else {
    //        return -1
    //     }
    // })

    // console.log(sortedCompanies)

//reduce - 

const ageSum = ages.reduce(function(total, age){
    return total + age
}, 0)

console.log(ageSum)