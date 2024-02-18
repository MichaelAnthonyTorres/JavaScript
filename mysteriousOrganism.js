const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
const pAequorFactory = (num, arr) =>{
    return {
        specimenNum: num,
        dna: arr,
        
        mutate(){
          let randBase = this.dna[Math.floor(Math.random() * 15)]
          let idRandBase = this.dna.indexOf(randBase)
          if(returnRandBase() !== randBase){
            this.dna[idRandBase] = returnRandBase()
          }else{
            console.log('bases match')
          }
          return this.dna
        },
        
        compareDNA(secondDNA){
          let counter = 0
          this.dna.forEach((i, index)=>{
            if(secondDNA[index] === i){
              counter += 1
            }
          })
          let percent = (counter/15) * 100
          return percent.toFixed(0)
        },
  
        willLikelySurvive(){
          let survivingBase = 0
          this.dna.forEach(i => {
            if(i === 'C' || i ==='G'){
              survivingBase += 1
            }
          })
          let percent = (survivingBase/15) * 100
          return percent >= 60 ? true : false
        }
    }
  }
  
  const survivingSpecimen = [];
  let idCounter = 1;
  
  while (survivingSpecimen.length < 30) {
    let newOrg = pAequorFactory(idCounter, mockUpStrand());
    if (newOrg.willLikelySurvive()) {
      survivingSpecimen.push(newOrg);
    }
    idCounter++;
  }
  
  console.log(survivingSpecimen)