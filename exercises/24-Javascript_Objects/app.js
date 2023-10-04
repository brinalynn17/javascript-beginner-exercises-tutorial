var person = {
    name: "John",
    lastName: "Doe",
    age: 35,
    gender: "male",
    luckyNumbers: [7, 11, 13, 17],
    significantOther: person2
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var family = {
    lastName: "Doe",
    members: [person, person2]
};

// Change the fourth luckyNumber of John Doe to 33
person.luckyNumbers[3] = 33;

// Create a new person Jimmy Doe and add him to the family
var jimmyDoe = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};

family.members.push(jimmyDoe);

// Function to calculate the sum of luckyNumbers for a person
function calculateSumOfLuckyNumbers(person) {
    let sum = 0;
    for (const number of person.luckyNumbers) {
        sum += number;
    }
    return sum;
}

// Function to calculate the sum of all family members' luckyNumbers
function addAllFamilyLuckyNumbers(familyMembers) {
    let sumOfAllLuckyNumbers = 0;
    for (const member of familyMembers) {
        sumOfAllLuckyNumbers += calculateSumOfLuckyNumbers(member);
    }
    return sumOfAllLuckyNumbers;
}

// Print the sum of all family members' luckyNumbers
console.log(addAllFamilyLuckyNumbers(family.members));
