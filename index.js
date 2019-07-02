const entYear = 2007
const batchNine = (entrance) => {
    let entranceYear = new Date(entrance)
    let graduateYear = entranceYear.getFullYear()
    let studyPeriod = 2019 - graduateYear

    console.log(studyPeriod)
    
}
batchNine(entYear)

let date = new Date(2019, 6, 30)
date.setDate(date.getDate() + 3)

console.log(date) // 2 aug 2019



