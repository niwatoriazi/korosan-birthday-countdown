import{r as a,d as p,c,o as g,a as f,b as t,e as d,t as u,u as _,f as v,F as y,g as w}from"./vendor.49d2612d.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}};b();var k="/assets/korosan-birthday-countdown-back-video.2631e62c.mp4",A="/assets/1f359.3b681562.svg",$="/assets/2021Twitter_logo-blue.2596d8f6.png",j="/assets/youtube_social_icon_red.02353a35.webp";const M={id:"count-down-wrapper",class:"w-screen h-screen grid place-items-center pointer-events-none fixed"},N={id:"count-down-timer",class:"lg:text-9xl text-6xl lg:text-center md:text-left leading-tight lg:leading-snug whitespace-normal whitespace-no-wrap"},L=t("span",{class:"lg:text-7xl text-3xl"},"\u8A95\u751F\u65E5\u307E\u3067\u3042\u3068",-1),O=t("br",null,null,-1),z=t("span",{class:"lg:text-7xl text-3xl"},"\u65E5",-1),B=t("br",{class:"lg:hidden"},null,-1),D=t("span",{class:"lg:text-7xl text-3xl"},"\u6642\u9593",-1),F=t("br",null,null,-1),I=t("span",{class:"lg:text-7xl text-3xl"},"\u5206",-1),P=t("br",{class:"lg:hidden"},null,-1),S=t("span",{class:"lg:text-7xl text-3xl"},"\u79D2",-1),V={setup(h){const r=a(0),n=a(0),i=a(0),e=a(0);setInterval(function(){const s=p("2022-10-01 00:00:00").diff(p());r.value=Math.floor(s/(1e3*60*60*24)),n.value=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),i.value=Math.floor(s%(1e3*60*60)/(1e3*60)),e.value=Math.floor(s%(1e3*60)/1e3)},100);const o=c(()=>{let s=3;return(Array(s).join("0")+r.value).slice(-s)}),l=c(()=>{let s=2;return(Array(s).join("0")+n.value).slice(-s)}),m=c(()=>{let s=2;return(Array(s).join("0")+i.value).slice(-s)}),x=c(()=>{let s=2;return(Array(s).join("0")+e.value).slice(-s)});return(s,X)=>(g(),f("div",M,[t("h1",N,[L,O,d(u(_(o)),1),z,B,d(u(_(l)),1),D,F,d(u(_(m)),1),I,P,d(u(_(x)),1),S])]))}};const q=t("div",{id:"bg-video",class:"w-screen h-screen fixed filter blur-md"},[t("video",{class:"w-full h-full object-cover",src:k,autoplay:"",muted:"",playsinline:"",loop:""})],-1),C=t("div",{id:"page-title-wrapper",class:"display-width"},[t("p",{id:"page-title",class:"text-sm lg:text-base text-center text-white"},"\u3053\u308D\u3055\u3093\u304A\u8A95\u751F\u65E5\u30AB\u30A6\u30F3\u30C8\u30C0\u30A6\u30F3(\u975E\u516C\u5F0F)")],-1),E=t("div",{id:"copy-wright-wrapper",class:"display-width"},[t("a",{href:"https://twitter.com/niwatoriazi",target:"_blank",id:"copy-right",class:"text-xs lg:text-base text-center underline text-white"},"\xA92021 \u306B\u308F\u3068\u308A\u3042\u3058")],-1),T=t("div",{id:"frame",class:"fixed inset-0 w-screen h-screen pointer-events-none"},null,-1),H=t("a",{href:"https://niwatoriazi.github.io/okayun-birthday-countdown/",id:"okayun-counter-link",class:"fixed right-10 bottom-38 lg:right-20 lg:bottom-76 transform hover:-rotate-6 hover:scale-110 duration-200 z-50"},[t("img",{src:A,class:"w-24"})],-1),K=t("a",{href:"https://twitter.com/inugamikorone",id:"twitter-share-link",target:"_blank",class:"fixed right-10 bottom-24 lg:right-20 lg:bottom-48 transform hover:-rotate-6 hover:scale-110 duration-200"},[t("img",{class:"w-16 lg:w-24",src:$,alt:"twitter-logo"})],-1),Q=t("a",{href:"https://youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q",id:"youtube-channel-link",target:"_blank",class:"fixed right-10 bottom-10 lg:right-20 lg:bottom-20 transform hover:-rotate-6 hover:scale-110 duration-200"},[t("img",{class:"w-16 lg:w-24",src:j,alt:"youtube-logo"})],-1),U={setup(h){return(r,n)=>(g(),f(y,null,[q,v(V),C,E,T,H,K,Q],64))}};const W=w(U);W.mount("#app");
