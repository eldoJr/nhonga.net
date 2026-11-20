import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowRight, HiLockClosed, HiPlus, HiCreditCard, HiTrash } from 'react-icons/hi2'

interface Props {
  itemTitle: string
  itemAuthor: string
  itemImage: string
  itemPrice: string
  paymentDay: string
  priceLabel: string
}

type Method = 'mobile' | 'card' | 'paypal'

interface SavedCard {
  id: string
  last4: string
  brand: 'visa' | 'mastercard'
  expiry: string
}

const inputCls = 'w-full px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-600 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors'
const labelCls = 'block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5'

export default function PaymentSection({ itemTitle, itemAuthor, itemImage, itemPrice, paymentDay, priceLabel }: Props) {
  const [method, setMethod] = useState<Method>('mobile')
  const [showAddCard, setShowAddCard] = useState(false)
  const [savedCards, setSavedCards] = useState<SavedCard[]>([
    { id: '1', last4: '4242', brand: 'visa', expiry: '12/27' },
  ])
  const [newCard, setNewCard] = useState({ number: '', name: '', expiry: '', cvv: '' })

  return (
    <>
      {/* Search + Header */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pt-6 sm:pt-10 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex items-center gap-2 w-full max-w-lg bg-[#06210D] rounded-2xl px-2.5 py-1.5">
            <input
              type="text"
              placeholder="Search Nhonga..."
              className="flex-1 bg-transparent text-sm text-gray-200 placeholder-nhonga-500 outline-none px-2 text-center"
            />
            <button className="flex items-center justify-center w-10 h-7 rounded-2xl bg-nhonga-500 hover:bg-nhonga-600 transition-colors shrink-0 cursor-pointer">
              <HiArrowRight className="w-4 h-4 text-gray-950" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Checkout</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 dark:text-white leading-tight">
            <span className="font-bold">Payment </span>
            <span className="font-bold text-nhonga-500">Method</span>
          </h1>
        </motion.div>
      </section>

      {/* Main */}
      <section className="w-full max-w-[1400px] mx-auto px-5 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start"
        >
          {/* Left — payment methods */}
          <div className="flex flex-col gap-3">

            {/* Mobile wallet */}
            <div
              onClick={() => setMethod('mobile')}
              className={`flex flex-col gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-colors ${
                method === 'mobile'
                  ? 'border-nhonga-400 bg-nhonga-500/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 hover:border-nhonga-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${method === 'mobile' ? 'border-nhonga-500 bg-nhonga-500' : 'border-gray-400'}`}>
                  {method === 'mobile' && <span className="w-2 h-2 rounded-full bg-white block" />}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">Mobile wallet</p>
                  <p className="text-xs text-gray-400">Pay instantly from your phone</p>
                </div>
              </div>

              {method === 'mobile' && (
                <div className="flex flex-col gap-3 pl-8">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-red-500">M-Pesa</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-orange-400">e-Mola</span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-yellow-500">mKesh</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Phone number</p>
                    <input
                      type="tel"
                      placeholder="+258  84 000 0000"
                      className="w-full max-w-sm px-4 py-2.5 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-600 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-nhonga-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Credit / Debit card */}
            <div
              onClick={() => setMethod('card')}
              className={`flex flex-col gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-colors ${
                method === 'card'
                  ? 'border-nhonga-400 bg-nhonga-500/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 hover:border-nhonga-300'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${method === 'card' ? 'border-nhonga-500 bg-nhonga-500' : 'border-gray-400'}`}>
                    {method === 'card' && <span className="w-2 h-2 rounded-full bg-white block" />}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Credit or Debit card</p>
                    <p className="text-xs text-gray-400">Visa, Mastercard</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="px-3 py-1 rounded text-xs font-bold text-white bg-[#1A1F71]">VISA</span>
                  <span className="px-3 py-1 rounded text-xs font-bold text-[#EB001B] border border-gray-200 dark:border-gray-600">Mastercard</span>
                </div>
              </div>

              {method === 'card' && savedCards.length > 0 && (
                <div className="flex flex-col gap-2 pl-8" onClick={(e) => e.stopPropagation()}>
                  {savedCards.map((card) => (
                    <div key={card.id} className="flex items-center justify-between px-4 py-3 rounded-xl bg-white dark:bg-white/10 border border-gray-200 dark:border-gray-600">
                      <div className="flex items-center gap-3">
                        <HiCreditCard className="w-5 h-5 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {card.brand === 'visa' ? 'Visa' : 'Mastercard'} •••• {card.last4}
                          </p>
                          <p className="text-xs text-gray-400">Expires {card.expiry}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => setSavedCards((prev) => prev.filter((c) => c.id !== card.id))}
                        className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                      >
                        <HiTrash className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* PayPal */}
            <div
              onClick={() => setMethod('paypal')}
              className={`flex items-center gap-3 p-5 rounded-2xl border-2 cursor-pointer transition-colors ${
                method === 'paypal'
                  ? 'border-nhonga-400 bg-nhonga-500/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5 hover:border-nhonga-300'
              }`}
            >
              <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${method === 'paypal' ? 'border-nhonga-500 bg-nhonga-500' : 'border-gray-400'}`}>
                {method === 'paypal' && <span className="w-2 h-2 rounded-full bg-white block" />}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">PayPal</p>
                <p className="text-xs text-gray-400">You will be redirected to PayPal</p>
              </div>
            </div>

            {/* Add card */}
            <button
              onClick={() => { setShowAddCard((v) => !v); setMethod('card') }}
              className="flex items-center gap-2 text-sm font-medium text-nhonga-500 hover:text-nhonga-600 transition-colors cursor-pointer mt-1"
            >
              <HiPlus className="w-4 h-4" /> Add new credit or debit card
            </button>

            {showAddCard && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-4 p-5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-white/5"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <label className={labelCls}>Card number</label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={19}
                      placeholder="1234 5678 9012 3456"
                      value={newCard.number}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, '').slice(0, 16)
                        setNewCard((p) => ({ ...p, number: v.replace(/(\d{4})/g, '$1 ').trim() }))
                      }}
                      className={inputCls}
                    />
                    <HiCreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300" />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>Cardholder name</label>
                  <input type="text" placeholder="Ana Machava" value={newCard.name} onChange={(e) => setNewCard((p) => ({ ...p, name: e.target.value }))} className={inputCls} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls}>Expiry date</label>
                    <input
                      type="text"
                      placeholder="MM / YY"
                      maxLength={7}
                      value={newCard.expiry}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, '').slice(0, 4)
                        setNewCard((p) => ({ ...p, expiry: v.length > 2 ? `${v.slice(0,2)} / ${v.slice(2)}` : v }))
                      }}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>CVV</label>
                    <input type="password" placeholder="•••" maxLength={4} value={newCard.cvv} onChange={(e) => setNewCard((p) => ({ ...p, cvv: e.target.value.replace(/\D/g,'').slice(0,4) }))} className={inputCls} />
                  </div>
                </div>
                <button
                  onClick={() => {
                    if (!newCard.number || !newCard.name || !newCard.expiry || !newCard.cvv) return
                    const last4 = newCard.number.replace(/\s/g,'').slice(-4)
                    setSavedCards((p) => [...p, { id: Date.now().toString(), last4, brand: 'visa', expiry: newCard.expiry }])
                    setNewCard({ number: '', name: '', expiry: '', cvv: '' })
                    setShowAddCard(false)
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer"
                >
                  Save card
                </button>
              </motion.div>
            )}
          </div>

          {/* Right — order summary */}
          <div className="flex flex-col gap-5 p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-gray-700">
            <p className="text-base font-bold text-gray-900 dark:text-white">Order summary</p>

            {/* Item */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 shrink-0">
                <img src={itemImage} alt={itemTitle} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white leading-snug">{itemTitle}</p>
                <p className="text-xs text-gray-400 mt-0.5">by {itemAuthor}</p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

            {/* Line items */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Payment day</span>
                <span>{paymentDay}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>{priceLabel} price</span>
                <span>{itemPrice}</span>
              </div>
              <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                <span>Service fee</span>
                <span>0 MT</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-200 dark:bg-gray-700" />

            {/* Total */}
            <div className="flex items-center justify-between">
              <span className="text-base font-bold text-gray-900 dark:text-white">Total</span>
              <span className="text-2xl font-bold text-nhonga-500">{itemPrice}</span>
            </div>

            {/* Pay button */}
            <button className="w-full py-3 rounded-2xl bg-[#06210D] text-sm font-semibold text-nhonga-400 hover:bg-nhonga-900 transition-colors cursor-pointer">
              Pay {itemPrice}
            </button>

            {/* Secure note */}
            <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
              <HiLockClosed className="w-3.5 h-3.5" />
              <span>Secure payment · Nhonga Pay</span>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
