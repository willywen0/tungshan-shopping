import React from 'react'

const CartSummary = ({ cartItems }) => {

    const totalAmount = cartItems.reduce((acc, item) => {
        return (acc + item.price * item.quantity)
    }, 0)
    // console.log(totalAmount);
    const taxAmount = totalAmount * 0.02

    const totalQuantity = cartItems.reduce((acc, item) => {
        return (acc + item.quantity)
    }, 0)

    const totalAmountWithTax = totalAmount + taxAmount

    return (
        <div className='cart-summary-container'>
            <h2 className='text-2xl font-bold mb-5'>結帳</h2>
            <div className='subtotal font-semibold flex justify-between'>
                <span className='text-base-100 uppercase'>商品總金額*</span> ${totalAmount.toFixed(2)}
            </div>
            <div className='tax-charges font-bold  mt-1 flex justify-between'>
                <span className='text-base-100 uppercase'>加收稅 (2%)</span> ${taxAmount.toFixed(2)}
            </div>
            <div className='total-quantity font-bold  mt-1 flex justify-between'>
                <span className='text-base-100 uppercase'>商品數量*</span> {totalQuantity}
            </div>
            <div className='total-price font-bold mt-8 flex justify-between md:mt-10'>
                <span className='text-base-100 uppercase'>總付款金額</span> ${totalAmountWithTax.toFixed(2)}
            </div>

            <button className='btn btn-block bg-white uppercase text-gray-600 mt-4'>去買單</button>
        </div>
    )
}

export default CartSummary