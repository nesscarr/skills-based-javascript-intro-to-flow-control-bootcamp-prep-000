
function basicTeenager(age) {
    if (age >= 13 && age <= 19) {
      return "You are a teenager!" //return statement if between 13 and 19
    }
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!" //if 13-19 true then teenager
  }
  else {
    return "You are not a teenager" //else return not teenager
  }
}

function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!" //if 13-19 teenager
  }
  else if (age <= 12) {
    return "You are a kid" //under 13, kid
  }
    else {
    return "You are a grownup" //above 19 grownup
  }
}

function ternaryTeenager(age) {
    return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager" //ternary statement age parameters ?  true:false
}

function switchAge(age) {
  switch (age) {
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19://smoothed out cases
        return "You are a teenager";
        break;
      default:
        return "You have an age"; //outside of teenager age range
      }
}
