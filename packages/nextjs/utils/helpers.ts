import { createCheckout, updateCheckout } from "~~/lib/shop";

export function saveLocalData(cart: any, checkoutId: any, checkoutUrl: any) {
  localStorage.setItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME, JSON.stringify([cart, checkoutId, checkoutUrl]))
}

function getLocalData() {
  return JSON.parse(localStorage.getItem(process.env.NEXT_PUBLIC_LOCAL_STORAGE_NAME))
}

export function setLocalData(setCart: (arg0: any[]) => void, setCheckoutId: (arg0: any) => void, setCheckoutUrl: (arg0: any) => void) {
  const localData = getLocalData()

  if (localData) {
    if (Array.isArray(localData[0])) {
      setCart([...localData[0]])
    }
    else {
      setCart([localData[0]])
    }
    setCheckoutId(localData[1])
    setCheckoutUrl(localData[2])
  }
}

export async function createShopifyCheckout(newItem: { [x: string]: any; }) {
  const data = await createCheckout( newItem['variantId'], newItem['variantQuantity'])  
  return data
}

export async function updateShopifyCheckout(updatedCart: any[], checkoutId: any) {
  const lineItems = updatedCart.map(item => {
    return {
      variantId: item['variantId'],
      quantity: item['variantQuantity']
    }
  })
  await updateCheckout(checkoutId, lineItems)
}

export function getCartSubTotal(cart: any[]) {
  if (cart.length === 0) {
    return 0
  }
  else {
    let totalPrice = 0
    cart.forEach(item => totalPrice += parseInt(item.variantQuantity) * parseFloat(item.variantPrice))
    return Math.round(totalPrice * 100) / 100
  }
}