
function handleSearchMethod() {
    const selectedMethod = document.getElementById("Parks1").value
    console.log("Hi Anjali, how are you?")
    const name = "Mayank"
    console.log(`Hi ${name}, how are you?`)
    // const sm1=document.getElementById("top")
    // sm1.innerHTML=`<p>Hi</p>`
    const dd1 = document.getElementById("dd1")

    let innerHTML = ""
    if (selectedMethod === "parkType") {

        for (let x = 0; x < parkTypesArray.length; x += 1) {
            innerHTML = innerHTML + `<option value="${parkTypesArray[x]}">${parkTypesArray[x]}</option>`
        }

    } else {
        for (let y = 0; y < locationsArray.length; y += 1) {
            innerHTML = innerHTML + `<option value="${locationsArray[y]}">${locationsArray[y]}</options>`

        }
    }
    dd1.innerHTML = innerHTML
}
function handleSearchMethod2() {
    const nationalparks = document.getElementById("nationalparks")
    const selectedMethod = document.getElementById("Parks1").value
    const dd1 = document.getElementById("dd1").value
    let filteredPark = []
    if (selectedMethod === "parkType") {
        filteredPark = nationalParksArray.filter(function (parkDetails) {
            console.log(parkDetails.LocationName, dd1)
            if (parkDetails.LocationName.toLowerCase().includes(dd1.toLowerCase())) {
                return true
            } else {
                return false
            }


        })
    } else {

        filteredPark = nationalParksArray.filter(function (parkDetails) {
            if (parkDetails.State.toLowerCase() === dd1.toLowerCase()) {
                return true
            } else {
                return false
            }

        })

    }
    console.log(filteredPark)
    let parkHTML = ""
    for (let c = 0; c < filteredPark.length; c += 1) {
        const parkDetails = filteredPark[c]
        parkHTML = parkHTML + `<div>
<ul class="parkcard">
  <li>LocationName: ${parkDetails.LocationName}</li>
  <li>Address: ${parkDetails.Address}</li>
  <li>City: ${parkDetails.City}</li>
  <li>State: ${parkDetails.State}</li>
  <li>ZipCode: ${parkDetails.ZipCode}</li>
  <li>Phone: ${parkDetails.Phone}</li>
</ul>
</div>`

    }
    if (filteredPark.length === 0) {
        parkHTML = `<div>
    No Park Found!
    </div>`
    }
    const nationalParks = document.getElementById("nationalParks")
    nationalParks.innerHTML = parkHTML

}

const mts = document.getElementById("mountaindd")


let mountainHTML = "<option value=''disabled selected>Select a mountain</option>"
for (let c = 0; c < mountainsArray.length; c += 1) {
    const mountainData = mountainsArray[c]
    mountainHTML = mountainHTML + `<option value="${mountainData.name}">${mountainData.name}</option>`

}
mts.innerHTML = mountainHTML
console.log("mts", mts)
function handleMountainChange() {
    const filteredMountain = mountainsArray.filter(function (mountainData) {
        if (mountainData.name.toLowerCase() === mts.value.toLowerCase()) {
            return true
        } else {
            return false
        }
    })
    console.log(filteredMountain)

    let mountainHTML = ""
    for (let m = 0; m < filteredMountain.length; m += 1) {
        const mountainData = filteredMountain[m]
        mountainHTML = mountainHTML + `
<div class="mountainCard">
<img src="../images/${mountainData.img}" class="mountainImg"> </img>
<ul class="mountainInfo">

<li>Name: ${mountainData.name}</li>
<li>Description: ${mountainData.desc}</li>
<li>Elevation: ${mountainData.elevation}</li>
<li>Effort: ${mountainData.effort}</li>
</ul>
</div>
`
  }
  const m= document.getElementById("mountainContainer")
  m.innerHTML=mountainHTML
}
