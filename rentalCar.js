function rentalCar(carType, days, babyChair) {
    const amount = getAmountFromCarType(carType)
    const babyChairAmount = babyChair ? days * 1200 : 0
    return babyChair ? `Estimado cliente: en base al tipo de vehículo ${carType} alquilado, considerando los ${days} días utilizados e incluido la silla de bebe con un valor de $${babyChairAmount}, el monto total a pagar es de $${amount + babyChairAmount} ` : `Estimado cliente: en base al tipo de vehículo ${carType} alquilado, considerando los ${days} días utilizados, el monto total a pagar es de $${amount}`
}

function getAmountFromCarType(carType) {
    switch (carType) {
        case "compacto":
            return 14000
        case "mediano":
            return 17000
        case "camioneta":
            return 28000
    }
};

//console.log(rentalCar("compacto", 7, false))
