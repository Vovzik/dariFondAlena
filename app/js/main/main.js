function ready(){!function(){if(window.innerWidth>=1801){const t=document.querySelector(".js__dar"),o=document.querySelectorAll(".js__dar-paralaks");t.addEventListener("wheel",()=>{e()});const l=[50,9,15,14,12,31,29,31,25,21,"","","","","","",""],n=["","","","","","","","","","",16,15,32,13,31,9,25],s=[46,"",36,"","",53,"","","",24,26,27,34,40,"","",""],r=["",15,"",27,-17,"",8,19,-21,"","","","","",30,18,6];for(let e=0;e<o.length;e++)o[e].style.left=l[e]+"%",o[e].style.right=n[e]+"%",o[e].style.top=s[e]+"%",o[e].style.bottom=r[e]+"%";function e(){for(let e=0;e<o.length;e++){const t=s[e],c=r[e],a=l[e],i=n[e];a?o[e].style.left=l[e]+Math.floor(3*Math.random())+"%":i&&(o[e].style.right=n[e]+Math.floor(3*Math.random())+"%"),t?o[e].style.top=s[e]+Math.floor(3*Math.random())+"%":c&&(o[e].style.bottom=r[e]+Math.floor(3*Math.random())+"%")}}}else if(window.innerWidth>=601){const t=document.querySelector(".js__dar"),o=document.querySelectorAll(".js__dar-paralaks");t.addEventListener("wheel",()=>{e()});const l=[50,9,15,14,1,"",29,3,25,21,"","","","","","",""],n=["","","","","",1,"","","","",6,5,1,13,31,9,25],s=[46,"",36,"","","","",10,"",24,26,40,34,40,"","",""],r=["",46,"",27,-17,-10,8,"",-21,"","","","","",-5,18,6];for(let e=0;e<o.length;e++)o[e].style.left=l[e]+"%",o[e].style.right=n[e]+"%",o[e].style.top=s[e]+"%",o[e].style.bottom=r[e]+"%";function e(){for(let e=0;e<o.length;e++){const t=s[e],c=r[e],a=l[e],i=n[e];a?o[e].style.left=l[e]+Math.floor(3*Math.random())+"%":i&&(o[e].style.right=n[e]+Math.floor(3*Math.random())+"%"),t?o[e].style.top=s[e]+Math.floor(3*Math.random())+"%":c&&(o[e].style.bottom=r[e]+Math.floor(3*Math.random())+"%")}}console.log("else2")}else if(window.innerWidth>=321){console.log("true3");const t=document.querySelector(".js__dar"),o=document.querySelectorAll(".js__dar-paralaks");t.addEventListener("wheel",()=>{e()});const l=[50,9,15,14,1,"",29,3,25,21,"","","","","","",""],n=["","","","","",1,"","","","",6,5,1,13,31,9,25],s=[46,"",36,"","","","",30,"",24,26,50,34,40,"","",""],r=["",46,"",27,17,-10,8,"",1,"","","","","",-5,18,6];for(let e=0;e<o.length;e++)o[e].style.left=l[e]+"%",o[e].style.right=n[e]+"%",o[e].style.top=s[e]+"%",o[e].style.bottom=r[e]+"%";function e(){for(let e=0;e<o.length;e++){const t=s[e],c=r[e],a=l[e],i=n[e];a?o[e].style.left=l[e]+Math.floor(3*Math.random())+"%":i&&(o[e].style.right=n[e]+Math.floor(3*Math.random())+"%"),t?o[e].style.top=s[e]+Math.floor(3*Math.random())+"%":c&&(o[e].style.bottom=r[e]+Math.floor(3*Math.random())+"%")}}}else{console.log("true4");const t=document.querySelector(".js__dar"),o=document.querySelectorAll(".js__dar-paralaks");t.addEventListener("wheel",()=>{e()});const l=[53,9,15,14,-1,"",29,17,35,21,"","","","","","",""],n=["","","","","",1,"","","","",20,2,1,13,18,9,25],s=[55,"",36,"","","","",27,"",24,24,54,28,40,"","",""],r=["",17,"",50,-5,-10,8,"",-2,"","","","","",20,18,6];for(let e=0;e<o.length;e++)o[e].style.left=l[e]+"%",o[e].style.right=n[e]+"%",o[e].style.top=s[e]+"%",o[e].style.bottom=r[e]+"%";function e(){for(let e=0;e<o.length;e++){const t=s[e],c=r[e],a=l[e],i=n[e];a?o[e].style.left=l[e]+Math.floor(3*Math.random())+"%":i&&(o[e].style.right=n[e]+Math.floor(3*Math.random())+"%"),t?o[e].style.top=s[e]+Math.floor(3*Math.random())+"%":c&&(o[e].style.bottom=r[e]+Math.floor(3*Math.random())+"%")}}}}(),function(){const e=document.querySelectorAll(".js__dar-anchor");for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const o=t.getAttribute("href");document.querySelector(""+o).scrollIntoView({behavior:"smooth",block:"start"})}))}();const e=document.querySelector(".js__nouslider"),t=e.getElementsByClassName("noUi-origin"),o=document.querySelector(".js__nouslider-min"),l=document.querySelectorAll(".js__game-remove"),n=document.querySelectorAll(".js__game-add"),s=document.querySelectorAll(".js__game-fireadd"),r=document.querySelector(".js__api-click"),c=[o,""];let a;function i(e,t){e.classList.add("hidden"),t.classList.remove("hidden")}function d(e){e.classList.remove("hidden")}function u(e,t){e.classList.remove("hidden"),t.classList.add("hidden")}function h(e){e.classList.add("hidden")}var f;noUiSlider.create(e,{start:[0,"5000"],connect:!0,snap:!0,range:{min:0,"14.5%":100,"30.5%":200,"47%":300,"63%":500,"79.5%":1e3,max:5e3}}),t[1].setAttribute("disabled",!0),e.noUiSlider.on("update",(function(e,t){e[0]>=100?c[t].innerHTML=Math.floor(e[0]):c[t].innerHTML="Выберите вашу сумму",function(e){if(e[0]>0&&e[0]<200){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);i(l[0],s[0]),d(n[0]),console.log("true")}else if(e[0]<100){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);console.log("true2")}else if(e[0]<300){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);i(l[1],s[1]),d(n[1]),console.log("true3")}else if(e[0]<500){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);i(l[2],s[2]),d(n[2]),console.log("true4")}else if(e[0]<1e3){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);i(l[3],s[3]),d(n[3]),console.log("true5")}else if(e[0]<5e3){for(let e=0;e<l.length;e++)u(l[e],s[e]),h(n[e]);i(l[4],s[4]),d(n[4]),console.log("true6")}else console.log(!1),function(e,t){for(let o=0;o<e.length;o++)i(e[o],t[o])}(l,s),function(e){for(let t=0;t<e.length;t++)d(e[t])}(n)}(e),console.log(e[0]),a=Math.floor(e[0])})),r.addEventListener("click",()=>{(new cp.CloudPayments).pay("auth",{publicId:"pk_322644a2111e47e5014e5e48685fc",description:"Оплата товаров в example.com",amount:a,currency:"RUB",accountId:"user@example.com",invoiceId:"1234567",email:"user@example.com",skin:"mini",data:{myProp:"myProp value"}},{onSuccess:function(e){!function(){const e=document.querySelectorAll(".js__popup-close"),t=document.querySelector("body");!function(e){if(e){const l=document.querySelector(".js__popup-open.open");l?o(l,!1):function(){const e=window.innerWidth-document.querySelector("body").offsetWidth+"px";t.style.paddingRight=e,t.classList.add("lock")}(),e.classList.add("open"),e.addEventListener("click",e=>{e.target.closest(".js__popup-content")?console.log(!1):(o(e.target.closest(".js__popup-open")),console.log(!0))})}}(document.querySelector('[data-popup="#popup"]'));for(let t=0;t<e.length;t++)e[t].addEventListener("click",l=>{o(e[t].closest(".js__popup-open")),l.preventDefault()});function o(e,o=!0){e.classList.remove("open"),o&&setTimeout((function(){t.style.paddingRight="0px",t.classList.remove("lock")}),400)}}(),$.ajax({url:"/math.php",data:{amount:a},type:"POST"})},onFail:function(e,t){},onComplete:function(e,t){}})}),f=null,$("body").on("click",".select__trigger",(function(){var t=$(this).siblings(".select__drop");(f=$(this)).toggleClass("active"),t.fadeToggle(300),$(document).mouseup((function(e){f.is(e.target)||0!==f.has(e.target).length||t.is(e.target)||0!==t.has(e.target).length||(f.removeClass("active"),t.fadeOut(300))})),$("body").on("change",".select__drop input",(function(){console.log(f),$(this).is(":checked")&&(f.find("span").text($(this).siblings("label").text()),e.noUiSlider.set([$(this).siblings("label").text(),null])),f.removeClass("active"),t.fadeOut(300)}))})),function(){const e=document.querySelectorAll(".js__accardion-click"),t=document.querySelectorAll(".js__accardion-open"),o=document.querySelectorAll(".js__accardion-plus"),l=document.querySelectorAll(".js__accardion-minus");for(let n=0;n<e.length;n++)e[n]&&e[n].addEventListener("click",()=>{t[n].classList.toggle("open"),o[n].classList.toggle("hidden"),l[n].classList.toggle("hidden")})}(),function(){const e=new GreenAudioPlayer(".home__player-audio");e.playPauseBtn.parentElement.querySelector(".play-pause-btn__icon").attributes.d.value="M18 12L0 24V0",e.player.play()}(),setTimeout((function(){}),1e3);lozad().observe()}document.addEventListener("DOMContentLoaded",ready);