import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as y,i}from"./assets/vendor-77e16229.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("button[data-start]"),f=document.querySelector("span[data-days]"),b=document.querySelector("span[data-hours]"),S=document.querySelector("span[data-minutes]"),g=document.querySelector("span[data-seconds]");let u=null;o.disabled=!0;const s=e=>e.toString().padStart(2,"0"),c=e=>{const l=Math.floor(e/864e5),m=Math.floor(e%864e5/36e5),h=Math.floor(e%864e5%36e5/6e4),p=Math.floor(e%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:h,seconds:p}},d=({days:e,hours:t,minutes:n,seconds:a})=>{f.textContent=s(e),b.textContent=s(t),S.textContent=s(n),g.textContent=s(a)},q=()=>{o.disabled=!0,r.disabled=!0;const e=setInterval(()=>{const t=u-new Date;if(t<=0){clearInterval(e),d(c(0)),i.show({message:"Time is up!",position:"topRight",color:"green"}),r.disabled=!1;return}const n=c(t);d(n)},1e3)};o.addEventListener("click",()=>q());y("#datetime-picker",{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose([e]){e<=new Date?(o.disabled=!0,i.show({message:"Please choose a date in the future",position:"topRight",color:"red"})):(o.disabled=!1,u=e)}});
//# sourceMappingURL=commonHelpers.js.map
