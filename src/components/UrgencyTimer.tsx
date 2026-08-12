import { useState, useEffect } from 'react';

export default function UrgencyTimer() {
  // Let's initialize a countdown of 1 hour, 45 minutes, and 20 seconds
  const [timeLeft, setTimeLeft] = useState(() => {
    // We can use a standard countdown that resets to 1h 45m 20s if it hits zero
    // or keep it synchronized with the browser session
    const savedTime = localStorage.getItem('jiujitsu_timer_expiry');
    const now = Date.now();
    
    if (savedTime) {
      const remaining = parseInt(savedTime, 10) - now;
      if (remaining > 0) {
        return Math.floor(remaining / 1000);
      }
    }
    
    // Set a new expiry of 1 hour and 15 minutes (4500 seconds)
    const newExpiry = now + 4500 * 1000;
    localStorage.setItem('jiujitsu_timer_expiry', newExpiry.toString());
    return 4500;
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      // Reset timer to keep the preview lively
      setTimeLeft(4500);
      localStorage.setItem('jiujitsu_timer_expiry', (Date.now() + 4500 * 1000).toString());
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="countdown-timer" className="flex items-center justify-center space-x-3 md:space-x-4 my-6">
      <div className="flex flex-col items-center">
        <div className="bg-brand-orange border-b-4 border-[#E05B00] shadow-md text-white font-display font-black text-3xl md:text-4xl px-3.5 py-2 rounded-2xl min-w-[60px] md:min-w-[70px] text-center tracking-tight">
          {formatNumber(hours)}
        </div>
        <span className="text-[10px] md:text-xs font-extrabold text-slate-500 uppercase tracking-wider mt-1.5">Horas</span>
      </div>
      
      <span className="text-xl md:text-2xl font-black text-brand-orange self-start mt-2">:</span>

      <div className="flex flex-col items-center">
        <div className="bg-brand-orange border-b-4 border-[#E05B00] shadow-md text-white font-display font-black text-3xl md:text-4xl px-3.5 py-2 rounded-2xl min-w-[60px] md:min-w-[70px] text-center tracking-tight">
          {formatNumber(minutes)}
        </div>
        <span className="text-[10px] md:text-xs font-extrabold text-slate-500 uppercase tracking-wider mt-1.5">Minutos</span>
      </div>

      <span className="text-xl md:text-2xl font-black text-brand-orange self-start mt-2">:</span>

      <div className="flex flex-col items-center">
        <div className="bg-brand-orange border-b-4 border-[#E05B00] shadow-md text-white font-display font-black text-3xl md:text-4xl px-3.5 py-2 rounded-2xl min-w-[60px] md:min-w-[70px] text-center tracking-tight">
          {formatNumber(seconds)}
        </div>
        <span className="text-[10px] md:text-xs font-extrabold text-slate-500 uppercase tracking-wider mt-1.5">Segundos</span>
      </div>
    </div>
  );
}
