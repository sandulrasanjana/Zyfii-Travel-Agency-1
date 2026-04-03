"use client";

import { useState, useEffect } from 'react';
import { Calculator, X, ArrowRightLeft } from 'lucide-react';

export default function CurrencyCalculator() {
    const [isOpen, setIsOpen] = useState(false);
    const [rates, setRates] = useState({ USD: 0, EUR: 0 });
    const [amount, setAmount] = useState<string>("100");
    const [fromCurrency, setFromCurrency] = useState<"USD" | "EUR">("USD");

    useEffect(() => {
        // Fetch live exchange rates
        const fetchRates = async () => {
            try {
                const res = await fetch("https://open.er-api.com/v6/latest/USD");
                const data = await res.json();
                if (data && data.rates && data.rates.LKR) {
                    const lkrPerUsd = data.rates.LKR;
                    const eurToUsd = data.rates.EUR;
                    const lkrPerEur = lkrPerUsd / eurToUsd;
                    setRates({ USD: lkrPerUsd, EUR: lkrPerEur });
                }
            } catch (error) {
                console.error("Failed to fetch rates", error);
                // Fallbacks if API fails
                setRates({ USD: 305.50, EUR: 332.20 });
            }
        };
        fetchRates();
    }, []);

    const convertedLKR = (parseFloat(amount || "0") * (fromCurrency === "USD" ? rates.USD : rates.EUR)).toLocaleString('en-US', { maximumFractionDigits: 2 });

    return (
        <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
            
            {/* Calculator Popup */}
            <div className={`bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 origin-bottom-left ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`} style={{ width: '280px' }}>
                <div className="bg-black text-white p-4 flex justify-between items-center">
                    <div>
                        <h3 className="font-serif font-bold tracking-widest uppercase text-xs mb-1">Currency Calculator</h3>
                        <div className="flex gap-3 text-[10px] font-mono">
                            <span className="text-gray-400">USD: <span className="text-accent">{rates.USD ? rates.USD.toFixed(1) : "---"}</span></span>
                            <span className="text-gray-400">EUR: <span className="text-accent">{rates.EUR ? rates.EUR.toFixed(1) : "---"}</span></span>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors p-1">
                        <X size={16} />
                    </button>
                </div>
                <div className="p-5 space-y-4">
                    <div>
                        <label className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-2 block">Foreign Amount</label>
                        <div className="flex gap-2">
                            <select 
                                className="bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold focus:outline-none focus:border-accent hover:border-gray-300 transition-colors cursor-pointer"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value as "USD" | "EUR")}
                            >
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                            </select>
                            <input 
                                type="number" 
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="flex-1 border border-gray-200 rounded-xl px-3 py-2 text-sm bg-gray-50 focus:outline-none focus:border-accent hover:border-gray-300 transition-colors w-full"
                                placeholder="0.00"
                            />
                        </div>
                    </div>
                    
                    <div className="flex justify-center text-gray-300">
                        <ArrowRightLeft size={14} className="rotate-90" />
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
                        <span className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest mb-1">Estimated In LKR</span>
                        <span className="text-xl font-bold font-serif text-black tracking-wide">
                            Rs. {convertedLKR !== "NaN" ? convertedLKR : "0.00"}
                        </span>
                    </div>

                    <p className="text-[9px] text-gray-400 text-center italic leading-relaxed">*Rates are live approximations retrieved securely and may vary slightly upon real transactions.</p>
                </div>
            </div>

            {/* Floating Action Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`absolute bottom-0 left-0 bg-black shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.3)] transition-all duration-300 transform hover:-translate-y-1 w-14 h-14 rounded-full flex items-center justify-center group ${isOpen ? 'scale-0 opacity-0 pointer-events-none' : 'scale-100 opacity-100'}`}
            >
                <div className="absolute w-full h-full rounded-full border-2 border-accent animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40"></div>
                <Calculator size={22} className="text-white group-hover:text-accent transition-colors" />
            </button>
            
        </div>
    );
}
