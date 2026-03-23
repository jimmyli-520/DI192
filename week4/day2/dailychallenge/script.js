const from = document.getElementById("from")
const to = document.getElementById("to")
const amount = document.getElementById("amount")
const convert = document.getElementById("convert")
const result = document.getElementById("result")

async function getCurrencies() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD")
    if (!response.ok) {
      throw new Error("Something went wrong")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}

async function populateCurrencies() {
  const data = await getCurrencies()
  const currencies = Object.keys(data.rates)
  currencies.forEach(currency => {
    const option = document.createElement("option")
    option.value = currency
    option.textContent = currency
    from.appendChild(option)
    to.appendChild(option.cloneNode(true))
  })
}

async function convertCurrency() {
  try {
    const fromCurrency = from.value
    const toCurrency = to.value
    const amountValue = amount.value
    const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
    if (!response.ok) {
      throw new Error("Something went wrong")
    }
    const data = await response.json()
    const rate = data.rates[toCurrency]
    const convertedAmount = (amountValue * rate).toFixed(2)
    result.textContent = `${convertedAmount} ${toCurrency}`
  } catch (error) {
    console.log(error)
  }
}

populateCurrencies()

convert.addEventListener("click", function () {
  convertCurrency()
})