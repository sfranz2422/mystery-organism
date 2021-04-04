// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, baseArray) => {
  return {
    specimenNum: number,
    dna: baseArray,
    mutate() {
      randomNumber = Math.floor(Math.random() * 15);
      randomBase = this.dna[randomNumber];
      if (randomBase === "A") {
        baseSelections = ["T", "C", "G"];
        this.dna[randomNumber] = baseSelections[Math.floor(Math.random() * 3)];
      } else if (randomBase === "T") {
        baseSelections = ["A", "C", "G"];
        this.dna[randomNumber] = baseSelections[Math.floor(Math.random() * 3)];
      } else if (randomBase === "C") {
        baseSelections = ["A", "T", "G"];
        this.dna[randomNumber] = baseSelections[Math.floor(Math.random() * 3)];
      } else {
        baseSelections = ["A", "T", "C"];
        this.dna[randomNumber] = baseSelections[Math.floor(Math.random() * 3)];
      }
    }, //end of mutate method

    compareDNA(pAequorObject) {
      let dna1 = this.dna;
      let dna2 = pAequorObject.dna;
      let commonIndexes = [];

      for (let index = 0; index < dna1.length; index++) {
        if (dna1[index] === dna2[index]) {
          commonIndexes.push(index);
        }
      }

      percentCommon = ((commonIndexes.length / dna1.length) * 100).toFixed(2);

      console.log(
        `${this.specimenNum} and ${pAequorObject.specimenNum} have ${percentCommon}% DNA in common`
      );
    }, //end of compareDNA

    willLikelySurvive() {
      let commonElements = [];
      this.dna.forEach((element) => {
        if (element === "C" || element === "G") {
          commonElements.push(element);
        }
      });
      let percentCorG = (commonElements.length / this.dna.length) * 100;
      if (percentCorG >= 60) {
        return true;
      } else {
        return false;
      }
    }, //end of willLikelySurvive
  }; //end of return
};

const generateThirtySurviving = () => {
  let holdingTank = [];
  let sampleNumber = 3;
  while (holdingTank.length <= 30) {
    sample = pAequorFactory(sampleNumber, mockUpStrand());
    if (sample.willLikelySurvive()) {
      holdingTank.push(sample);
      sampleNumber++;
    }
  }
  return holdingTank;
};

const steve = pAequorFactory(1, mockUpStrand());
const mel = pAequorFactory(2, mockUpStrand());

// for (let i = 0; i < 50; i++) {
//   steve.mutate();
//   console.log(steve.willLikelySurvive());
// }
console.log(generateThirtySurviving());
// let comparison = steve.compareDNA(mel);
// console.log(comparison);
